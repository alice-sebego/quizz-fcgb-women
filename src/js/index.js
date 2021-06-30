import Chrono from './chrono.js';

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
const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");
const question3 = document.getElementById("question3");
const question4 = document.getElementById("question4");
const question5 = document.getElementById("question5");
const question6 = document.getElementById("question6");
const question7 = document.getElementById("question7");
const question8 = document.getElementById("question8");
const question9 = document.getElementById("question9");
const question10 = document.getElementById("question10");
const question11 = document.getElementById("question11");

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
* Array of bad questions 1
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

]

const badAnswersquestion1 = [
    document.getElementById('Bruges'),
    document.getElementById('Merignac'),
    document.getElementById('Lormont')
];

const badAnswersquestion2 = [
    document.getElementById('1998'),
    document.getElementById('2007'),
    document.getElementById('2009')
];

const badAnswersquestion3 = [
    document.getElementById('11sept'),
    document.getElementById('26sept'),
    document.getElementById('20dec')
];

const badAnswersquestion4 = [
    document.getElementById('Chatelin'),
    document.getElementById('Cascarino'),
    document.getElementById('Asseyi')
];

const badAnswersquestion5 = [
    document.getElementById('Brettes'),
    document.getElementById('Stehelin'),
    document.getElementById('Miart')
];

const badAnswersquestion6 = [
    document.getElementById('3eme'),
    document.getElementById('7eme'),
    document.getElementById('9eme')
];

const badAnswersquestion7 = [
    document.getElementById('11'),
    document.getElementById('21'),
    document.getElementById('16')
];

const badAnswersquestion8 = [
    document.getElementById('2'),
    document.getElementById('3'),
    document.getElementById('5')
];

const badAnswersquestion9 = [
    document.getElementById('Nayler'),
    document.getElementById('Lavogez'),
    document.getElementById('Tarrieu')
];

const badAnswersquestion10 = [
    document.getElementById('Dauba'),
    document.getElementById('Garcia'),
    document.getElementById('Sousa')
];

const badAnswersquestion11 = [
    document.getElementById('Lyonnais'),
    document.getElementById('Paris'),
    document.getElementById('Montpellier')
];

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


/** --------------------------------
* Gestion of score for correct answer
--------------------------------- */
const goodAnswers = [];
const addPointOnTheScore = () =>{
    let i = 'ok'; 
    goodAnswers.push(i);
    let lengthGoodanswer = goodAnswers.length;
    lengthGoodanswer ++;
    console.log(lengthGoodanswer);
} 

/**
* Show the user's score
*/
const showScore = ()=>{
    const score = goodAnswers.length;
    const doneScore = document.createElement('div');
    doneScore.setAttribute('id','donescore');
    const information = document.getElementById('information');
    information.prepend(doneScore);
    doneScore.textContent = score + ' / 11';
    showTheScore.disabled = true;
    const gifAnime = document.createElement('div');
    information.prepend(gifAnime);
    
    if(score == 11){
        gifAnime.innerHTML = '<img src="https://media.giphy.com/media/xUA7b2uqotaDunMxaw/giphy.gif" alt="bravo pour ton score" style="display:block; margin:auto;"><p class="bravo">Bravo ! Tu déchires !!!! Tu as obtenu :</p>'
    } else if(score < 11 && score >= 8){
        gifAnime.innerHTML ='<img src="https://media.giphy.com/media/l0MYSC9asVRDGWtEI/giphy.gif" alt="bravo pour ton score" style="display:block; margin:auto;"><p class="bravo">Bravo ! Tu as obtenu :</p>'
    } else if(score >= 5 && score < 8){
        gifAnime.innerHTML = '<img src="https://media.giphy.com/media/3oKIPzGXnfYyUYmSLS/giphy.gif" alt="bravo pour ton score" style="display:block; margin:auto;"><p class="bravo">Bravo ! Tu as obtenu :</p>'
    } else if(score < 5 && score > 1 ){
        gifAnime.innerHTML = '<img src="https://media.giphy.com/media/3o6wrjU8qqDrANCYH6/giphy.gif" alt="bravo pour ton score" style="display:block; margin:auto;"><p class="bravo">Bravo ! Tu as obtenu :</p>'
    } else {
        gifAnime.innerHTML = '<img src="https://media.giphy.com/media/3o7ZeyhOrwx6Px3OUg/giphy.gif" alt="bravo pour ton score" style="display:block; margin:auto;"><p class="bravo">Aïe ! Tu as obtenu :</p>'
    } 
} 

const showTheScore = document.getElementById('showScore');
showTheScore.addEventListener('click', () => {
    showScore();    
});
    

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
            addPointOnTheScore();
        }
    });

}



/** --------------------------------
 * Gestion of Correct and bad answer
---------------------------------- */

/**
* Gestion of question 1
*/

// Disabled bad answers after user's answer
const disabledBadAnswer1 = () => {
    for (let i = 0; i < badAnswersquestion1.length; i++) {
            const badAnswerquestion1 = badAnswersquestion1[i];
            badAnswerquestion1.addEventListener('change', () => {
                question1.style.backgroundColor = '#f5657d';
                question1.style.color = "white";
                question1.style.transition = 'background-color 0.8s, color 0.85s';
                reponse1Good.disabled = true;
                badAnswersquestion1.forEach(badAnswerquestion1 => {
                   badAnswerquestion1.disabled = true;
                });

                countdown();

                const resolveAnswer1 = document.createElement('p');
                resolveAnswer1.setAttribute('class','resolveAnswer');
                resolveAnswer1.textContent = 'La bonne réponse est l\'Entente Sportive Blanquefortaise';
                question1.append(resolveAnswer1);
            });    
    }
}

disabledBadAnswer1();

/**
* Gestion of question 2
*/

// Disabled bad answers after user's answer
const disabledBadAnswer2 = () => {
    for (let i = 0; i < badAnswersquestion2.length; i++) {
            const badAnswerquestion2 = badAnswersquestion2[i];
            badAnswerquestion2.addEventListener('change', () => {
            question2.style.backgroundColor = '#f5657d';
            question2.style.color = "white";
            question2.style.transition = 'background-color 0.8s, color 0.85s';
            reponse2Good.disabled = true;
            badAnswersquestion2.forEach(badAnswerquestion2 =>  badAnswerquestion2.disabled = true );
           const resolveAnswer2 = document.createElement('p');
           resolveAnswer2.setAttribute('class','resolveAnswer');
           resolveAnswer2.textContent = 'La bonne réponse est 2015';
           question2.append(resolveAnswer2);
        });   
    }
}
disabledBadAnswer2();

/**
* Gestion of question 3
*/

// Disabled bad answers after user's answer
const disabledBadAnswer3 = () => {
    for (let i = 0; i < badAnswersquestion3.length; i++) {
            const badAnswerquestion3 = badAnswersquestion3[i];
            badAnswerquestion3.addEventListener('change', () => {
            question3.style.backgroundColor = '#f5657d';
            question3.style.color = "white";
            question3.style.transition = 'background-color 0.8s, color 0.85s';
            reponse3Good.disabled = true;
            badAnswersquestion3.forEach(badAnswerquestion3 => {
               badAnswerquestion3.disabled = true;
           });
           const resolveAnswer3 = document.createElement('p');
           resolveAnswer3.setAttribute('class','resolveAnswer');
           resolveAnswer3.textContent = 'La bonne réponse est le 20 mars 2016';
           question3.append(resolveAnswer3);
        });    
    }
}
disabledBadAnswer3();

/**
* Gestion of question 4
*/

// Disabled bad answers after user's answer
const disabledBadAnswer4 = () => {
    for (let i = 0; i < badAnswersquestion4.length; i++) {
            const badAnswerquestion4 = badAnswersquestion4[i];
            badAnswerquestion4.addEventListener('change', () => {
            question4.style.backgroundColor = '#f5657d';
            question4.style.color = "white";
            question4.style.transition = 'background-color 0.8s, color 0.85s';
            reponse4Good.disabled = true;
            badAnswersquestion4.forEach(badAnswerquestion4 => badAnswerquestion4.disabled = true );
           const resolveAnswer4 = document.createElement('p');
           resolveAnswer4.setAttribute('class','resolveAnswer');
           resolveAnswer4.textContent = 'La bonne réponse est Vanessa Gilles';
           question4.append(resolveAnswer4);
        });    
    }
}
disabledBadAnswer4();

/**
* Gestion of question 5
*/

// Disabled bad answers after user's answer
const disabledBadAnswer5 = ()=>{
    for (let i = 0; i < badAnswersquestion5.length; i++) {
            const badAnswerquestion5 = badAnswersquestion5[i];
            badAnswerquestion5.addEventListener('change', () => {
            question5.style.backgroundColor = '#f5657d';
            question5.style.color = "white";
            question5.style.transition = 'background-color 0.8s, color 0.85s';
            reponse5Good.disabled = true;
            badAnswersquestion5.forEach(badAnswerquestion5 => badAnswerquestion5.disabled = true );
           const resolveAnswer5 = document.createElement('p');
           resolveAnswer5.setAttribute('class','resolveAnswer');
           resolveAnswer5.textContent = 'La bonne réponse est le stade Sainte-Germaine au Bouscat';
           question5.append(resolveAnswer5);
        });    
    }
}
disabledBadAnswer5();

/**
* Gestion of question 6
*/

// Disabled bad answers after user's answer
const disabledBadAnswer6 = () => {
    for (let i = 0; i < badAnswersquestion6.length; i++){
            const badAnswerquestion6 = badAnswersquestion6[i];
            badAnswerquestion6.addEventListener('change', () => {
            question6.style.backgroundColor = '#f5657d';
            question6.style.color = "white";
            question6.style.transition = 'background-color 0.8s, color 0.85s';
            reponse6Good.disabled = true;
            badAnswersquestion6.forEach(badAnswerquestion6 => badAnswerquestion6.disabled = true);
           const resolveAnswer6 = document.createElement('p');
           resolveAnswer6.setAttribute('class','resolveAnswer');
           resolveAnswer6.textContent = 'La bonne réponse est 4ème au classement de D1';
           question6.append(resolveAnswer6);
        });    
    }
}
disabledBadAnswer6();

/**
* Gestion of question 7
*/

// Disabled bad answers after user's answer
const disabledBadAnswer7 = ()=>{
    for (let i = 0; i < badAnswersquestion7.length; i++) {
            const badAnswerquestion7 = badAnswersquestion7[i];
            badAnswerquestion7.addEventListener('change', () => {
            question7.style.backgroundColor = '#f5657d';
            question7.style.color = "white";
            question7.style.transition = 'background-color 0.8s, color 0.85s';
            reponse7Good.disabled = true;
            badAnswersquestion7.forEach(badAnswerquestion7 => badAnswerquestion7.disabled = true);
           const resolveAnswer7 = document.createElement('p');
           resolveAnswer7.setAttribute('class','resolveAnswer');
           resolveAnswer7.textContent = 'La bonne réponse est un beau 0-0 contre cette sextuple championne d\'Europe';
           question7.append(resolveAnswer7);
        });    
    }
}
disabledBadAnswer7();

/**
* Gestion of question 8
*/

// Disabled bad answers after user's answer
const disabledBadAnswer8 = ()=>{
    for (let i = 0; i < badAnswersquestion8.length; i++) {
            const badAnswerquestion8 = badAnswersquestion8[i];
            badAnswerquestion8.addEventListener('change', () => {
            question8.style.backgroundColor = '#f5657d';
            question8.style.color = "white";
            question8.style.transition = 'background-color 0.8s, color 0.85s';
            reponse8Good.disabled = true;
            badAnswersquestion8.forEach(badAnswerquestion8 => badAnswerquestion8.disabled = true );
           const resolveAnswer8 = document.createElement('p');
           resolveAnswer8.setAttribute('class','resolveAnswer');
           resolveAnswer8.textContent = 'La bonne réponse est 4';
           question8.append(resolveAnswer8);
        });    
    }
}
disabledBadAnswer8();

/**
* Gestion of question 9
*/

// Disabled bad answers after user's answer
const disabledBadAnswer9 = ()=>{
    for (let i = 0; i < badAnswersquestion9.length; i++) {
            const badAnswerquestion9 = badAnswersquestion9[i];
            badAnswerquestion9.addEventListener('change', () => {
            question9.style.backgroundColor = '#f5657d';
            question9.style.color = "white";
            question9.style.transition = 'background-color 0.8s, color 0.85s';
            reponse9Good.disabled = true;
            badAnswersquestion9.forEach(badAnswerquestion9 => badAnswerquestion9.disabled = true);
           const resolveAnswer9 = document.createElement('p');
           resolveAnswer9.setAttribute('class','resolveAnswer');
           resolveAnswer9.textContent = 'La bonne réponse est Marie Petiteau';
           question9.append(resolveAnswer9);
        });    
    }
}
disabledBadAnswer9();

/**
* Gestion of question 10
*/

// Disabled bad answers after user's answer
const disabledBadAnswer10 = () => {
    for (let i = 0; i < badAnswersquestion10.length; i++) {
            const badAnswerquestion10 = badAnswersquestion10[i];
            badAnswerquestion10.addEventListener('change', () => {
            question10.style.backgroundColor = '#f5657d';
            question10.style.color = "white";
            question10.style.transition = 'background-color 0.8s, color 0.85s';
            reponse10Good.disabled = true;
            badAnswersquestion10.forEach(badAnswerquestion10 => badAnswerquestion10.disabled = true);
           const resolveAnswer10 = document.createElement('p');
           resolveAnswer10.setAttribute('class','resolveAnswer');
           resolveAnswer10.textContent = 'La bonne réponse est Pedro Martinez Losa';
           question10.append(resolveAnswer10);
        });    
    }
}
disabledBadAnswer10();

/**
* Gestion of question 11
*/

// Disabled bad answers after user's answer
const disabledBadAnswer11 = () => {
    for (let i = 0; i < badAnswersquestion11.length; i++) {
            const badAnswerquestion11 = badAnswersquestion11[i];
            badAnswerquestion11.addEventListener('change', () => {
            question11.style.backgroundColor = '#f5657d';
            question11.style.color = "white";
            question11.style.transition = 'background-color 0.8s, color 0.85s';
            reponse11Good.disabled = true;
            badAnswersquestion11.forEach(badAnswerquestion11 => badAnswerquestion11.disabled = true);
           const resolveAnswer11 = document.createElement('p');
           resolveAnswer11.setAttribute('class','resolveAnswer');
           resolveAnswer11.textContent = 'La bonne réponse est l\'Olympique de Marseille';
           question11.append(resolveAnswer11);
           
           clearInterval(timer);

           showTheScore.disabled = false;
        });    
    }
}
disabledBadAnswer11();