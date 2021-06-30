import Chrono from './chrono.js';
import { questions, allBadAnswers, answersGood, resolveAnswers } from './dom-element.js';
import { addPointOnTheScore, showScore } from './handle-score.js';
import { disabledBadAnswer } from './handle-wrong.js';
import { setCurrentYear } from './util.js';

/** -------------------------------
* Handle Chrono on the interface
-------------------------------- */
const $time = document.querySelector("#time");

let startmin = 1.5;
let time = startmin * 60;
let min = Math.floor(time / 60);
let sec = time % 60;
let count = new Chrono(startmin, time, min, sec, $time);

let checkInterval = false;
let timer;

count.displayTime();

const countdown = () => {

    if(!checkInterval) {

        checkInterval = true;

        count.countdown();
        count.displayTime();

        timer = setInterval(() => {

            if( count.timeTotal > 0){
            
                count.countdown();
                count.displayTime();
        
            } else if(count.timeTotal === 0){
                
                clearInterval(timer);
                count.displayTime();
                alert("GAME OVER \n Clique sur OK pour rejouer");
                location.reload();

            } 

        }, 1000);

    } else { 
        return;
    }

};

// Add current year on the footer
const $year = document.querySelector("#year");
setCurrentYear($year);

/** --------------------------------
 * Management of wrong answers
---------------------------------- */
for(let firstWrongAnswer of allBadAnswers[0]){
    
    firstWrongAnswer.addEventListener("change", () => {
        if(firstWrongAnswer.checked){
            countdown()
        }
    })
}

for(let i = 0; i < questions.length; i++){

    disabledBadAnswer(allBadAnswers[i], questions[i], answersGood[i], resolveAnswers[i]);

}

for(let lastWrongAnswer of allBadAnswers[10]){
    
    lastWrongAnswer.addEventListener("change", () => {
        if(lastWrongAnswer.checked){
            clearInterval(timer);
            showTheScore.disabled = false;
        }
    })
}

/** --------------------------------
* Gestion of score for correct answer
--------------------------------- */
const goodAnswers = [];
const information = document.getElementById('information');

const showTheScore = document.getElementById('showScore');
showTheScore.addEventListener('click', () => showScore(goodAnswers, information, showTheScore) );
    
/** --------------------------------
 * Management of right answers
---------------------------------- */

for(let i = 0; i <= questions.length; i++){
    
    answersGood[i].addEventListener('change', () => {

        if(answersGood[0].checked){
            countdown();
        }

        if(answersGood[10].checked){
            clearInterval(timer);
            showTheScore.disabled = false;
        }
        
        if(answersGood[i].checked){
            questions[i].style.backgroundColor = '#25c725';
            questions[i].style.color = "white";
            questions[i].style.transition = 'background-color 0.8s, color 0.85s';
            allBadAnswers[i].forEach(badAnswer => badAnswer.disabled = true );
            addPointOnTheScore(goodAnswers);
        }
    });

}
