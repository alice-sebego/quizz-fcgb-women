import Chrono from './chrono.js';
import { addPointOnTheScore, showScore } from './handle-score.js';
import { disabledBadAnswer } from './handle-wrong.js';

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

/** -------------------------------
* Gestion of Color's div questions
-------------------------------- */
const questions = [
    document.getElementById("question1"),
    document.getElementById("question2"),
    document.getElementById("question3"),
    document.getElementById("question4"),
    document.getElementById("question5"),
    document.getElementById("question6"),
    document.getElementById("question7"),
    document.getElementById("question8"),
    document.getElementById("question9"),
    document.getElementById("question10"),
    document.getElementById("question11")
]

/** --------------------------
* Array of bad questions
--------------------------- */
const allBadAnswers = [
    [
        document.getElementById('Bruges'),
        document.getElementById('Merignac'),
        document.getElementById('Lormont')
    ],
    [
        document.getElementById('1998'),
        document.getElementById('2007'),
        document.getElementById('2009')
    ],
    [
        document.getElementById('11sept'),
        document.getElementById('26sept'),
        document.getElementById('20dec')
    ],
    [
        document.getElementById('Chatelin'),
        document.getElementById('Cascarino'),
        document.getElementById('Asseyi')
    ],
    [
        document.getElementById('Brettes'),
        document.getElementById('Stehelin'),
        document.getElementById('Miart')
    ],
    [
        document.getElementById('3eme'),
        document.getElementById('7eme'),
        document.getElementById('9eme')
    ],
    [
        document.getElementById('11'),
        document.getElementById('21'),
        document.getElementById('16')
    ],
    [
        document.getElementById('2'),
        document.getElementById('3'),
        document.getElementById('5')
    ],
    [
        document.getElementById('Nayler'),
        document.getElementById('Lavogez'),
        document.getElementById('Tarrieu')
    ],
    [
        document.getElementById('Dauba'),
        document.getElementById('Garcia'),
        document.getElementById('Sousa')
    ],
    [
        document.getElementById('Lyonnais'),
        document.getElementById('Paris'),
        document.getElementById('Montpellier')
    ]

];


const resolveAnswers = [
    "La bonne réponse est l'Entente Sportive Blanquefortaise",
    "La bonne réponse est 2015",
    "La bonne réponse est le 20 mars 2016",
    "La bonne réponse est Vanessa Gilles",
    "La bonne réponse est le stade Sainte-Germaine au Bouscat",
    "La bonne réponse est 4ème au classement de D1",
    "La bonne réponse est un beau 0-0 contre cette sextuple championne d'Europe",
    "La bonne réponse est 4",
    "La bonne réponse est Marie Petiteau",
    "La bonne réponse est Pedro Martinez Losa",
    "La bonne réponse est l\'Olympique de Marseille"
]

/*
*Good answers
*/

const answersGood = [
    document.getElementById("Blanquefort"),
    document.getElementById("2015"),
    document.getElementById("20mars"),
    document.getElementById("Gilles"),
    document.getElementById("Sainte-Germaine"),
    document.getElementById("4eme"),
    document.getElementById("00"),
    document.getElementById("4"),
    document.getElementById("Petiteau"),
    document.getElementById("Losa"),
    document.getElementById("Marseille")
];

// countdown();
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