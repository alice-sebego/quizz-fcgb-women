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

/** --------------------------
* Array of bad questions 1
--------------------------- */
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

/** --------------------------------
* Gestion of score for correct answer
--------------------------------- */
const goodAnswers = [];
const addPointOnTheScore =()=>{
    let i = 'ok';
    console.log(i) 
    goodAnswers.push(i);
    let lengthGoodanswer = goodAnswers.length
    lengthGoodanswer ++
    console.log(lengthGoodanswer);
} 

/** --------------------------------
 * Gestion of Correct and bad answer
---------------------------------- */

/**
* Gestion of question 1
*/

// Correct answer
const reponse1Good = document.getElementById("Blanquefort");
// Disabled bad answers after user's answer
const disabledBadAnswer1 = ()=>{
    for (let i = 0; i < badAnswersquestion1.length; i++) {
            const badAnswerquestion1 = badAnswersquestion1[i];
            badAnswerquestion1.addEventListener('change', function(e){
                e.preventDefault();
                question1.style.backgroundColor = '#f5657d';
                question1.style.color = "white";
                question1.style.transition = 'background-color 0.8s, color 0.85s';
                reponse1Good.disabled = true;
                badAnswersquestion1.forEach(badAnswerquestion1 => {
                   badAnswerquestion1.disabled = true;
                });
                if (norepeat == true) {
                    timerID = setInterval('chrono()', 1000);
                    console.log(timerID);
                    norepeat = false;
                }
                const resolveAnswer1 = document.createElement('p');
                resolveAnswer1.setAttribute('class','resolveAnswer');
                resolveAnswer1.textContent = 'La bonne réponse est l\'Entente Sportive Blanquefortaise';
                question1.append(resolveAnswer1);
            });    
    }
}
disabledBadAnswer1();

// Disabled correct answer after user's answer
reponse1Good.addEventListener('change', function(e){
    e.preventDefault();
    if(reponse1Good.checked){
        question1.style.backgroundColor = '#25c725';
        question1.style.color = "white";
        question1.style.transition = 'background-color 0.8s, color 0.85s';
        badAnswersquestion1.forEach(badAnswerquestion1 => {
            badAnswerquestion1.disabled = true;
        });
        addPointOnTheScore();
    }
    
    if (norepeat == true) {
        timerID = setInterval('chrono()', 1000);
        console.log(timerID);
        norepeat = false;
    }
});

/**
* Gestion of question 2
*/

// Correct answer
const reponse2Good = document.getElementById("2015");
// Disabled bad answers after user's answer
const disabledBadAnswer2 = ()=>{
    for (let i = 0; i < badAnswersquestion2.length; i++) {
            const badAnswerquestion2 = badAnswersquestion2[i];
            badAnswerquestion2.addEventListener('change', function(e){
            e.preventDefault();
            question2.style.backgroundColor = '#f5657d';
            question2.style.color = "white";
            question2.style.transition = 'background-color 0.8s, color 0.85s';
            reponse2Good.disabled = true;
            badAnswersquestion2.forEach(badAnswerquestion2 => {
               badAnswerquestion2.disabled = true;
           });
           const resolveAnswer2 = document.createElement('p');
           resolveAnswer2.setAttribute('class','resolveAnswer');
           resolveAnswer2.textContent = 'La bonne réponse est 2015';
           question2.append(resolveAnswer2);
        });   
    }
}
disabledBadAnswer2();

// Disabled correct answer after user's answer
reponse2Good.addEventListener('change', function(e){
e.preventDefault();
    if(reponse2Good.checked){
        question2.style.backgroundColor = '#25c725';
        question2.style.color = "white";
        question2.style.transition = 'background-color 0.8s, color 0.85s';
        badAnswersquestion2.forEach(badAnswerquestion2 => {
            badAnswerquestion2.disabled = true;
        });
        addPointOnTheScore();
    }
});

/**
* Gestion of question 3
*/

// Correct answer
const reponse3Good = document.getElementById("20mars");
// Disabled bad answers after user's answer
const disabledBadAnswer3 = ()=>{
    for (let i = 0; i < badAnswersquestion3.length; i++) {
            const badAnswerquestion3 = badAnswersquestion3[i];
            badAnswerquestion3.addEventListener('change', function(e){
            e.preventDefault();
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

// Disabled correct answer after user's answer
reponse3Good.addEventListener('change', function(e){
e.preventDefault();
    if(reponse3Good.checked){
        question3.style.backgroundColor = '#25c725';
        question3.style.color = "white";
        question3.style.transition = 'background-color 0.8s, color 0.85s';
        badAnswersquestion3.forEach(badAnswerquestion3 => {
            badAnswerquestion3.disabled = true;
        });
        addPointOnTheScore();
    }
});

/**
* Gestion of question 4
*/

// Correct answer
const reponse4Good = document.getElementById("Gilles");
// Disabled bad answers after user's answer
const disabledBadAnswer4 = ()=>{
    for (let i = 0; i < badAnswersquestion4.length; i++) {
            const badAnswerquestion4 = badAnswersquestion4[i];
            badAnswerquestion4.addEventListener('change', function(e){
            e.preventDefault();
            question4.style.backgroundColor = '#f5657d';
            question4.style.color = "white";
            question4.style.transition = 'background-color 0.8s, color 0.85s';
            reponse4Good.disabled = true;
            badAnswersquestion4.forEach(badAnswerquestion4 => {
               badAnswerquestion4.disabled = true;
           });
           const resolveAnswer4 = document.createElement('p');
           resolveAnswer4.setAttribute('class','resolveAnswer');
           resolveAnswer4.textContent = 'La bonne réponse est Vanessa Gilles';
           question4.append(resolveAnswer4);
        });    
    }
}
disabledBadAnswer4();

// Disabled correct answer after user's answer
reponse4Good.addEventListener('change', function(e){
e.preventDefault();
    if(reponse4Good.checked){
        question4.style.backgroundColor = '#25c725';
        question4.style.color = "white";
        question4.style.transition = 'background-color 0.8s, color 0.85s';
        badAnswersquestion4.forEach(badAnswerquestion4 => {
            badAnswerquestion4.disabled = true;
        });
        addPointOnTheScore();
    }
});

/**
* Gestion of question 5
*/

// Correct answer
const reponse5Good = document.getElementById("Sainte-Germaine");
// Disabled bad answers after user's answer
const disabledBadAnswer5 = ()=>{
    for (let i = 0; i < badAnswersquestion5.length; i++) {
            const badAnswerquestion5 = badAnswersquestion5[i];
            badAnswerquestion5.addEventListener('change', function(e){
            e.preventDefault();
            question5.style.backgroundColor = '#f5657d';
            question5.style.color = "white";
            question5.style.transition = 'background-color 0.8s, color 0.85s';
            reponse5Good.disabled = true;
            badAnswersquestion5.forEach(badAnswerquestion5 => {
               badAnswerquestion5.disabled = true;
           });
           const resolveAnswer5 = document.createElement('p');
           resolveAnswer5.setAttribute('class','resolveAnswer');
           resolveAnswer5.textContent = 'La bonne réponse est le stade Sainte-Germaine au Bouscat';
           question5.append(resolveAnswer5);
        });    
    }
}
disabledBadAnswer5();

// Disabled correct answer after user's answer
reponse5Good.addEventListener('change', function(e){
e.preventDefault();
    if(reponse5Good.checked){
        question5.style.backgroundColor = '#25c725';
        question5.style.color = "white";
        question5.style.transition = 'background-color 0.8s, color 0.85s';
        badAnswersquestion5.forEach(badAnswerquestion5 => {
            badAnswerquestion5.disabled = true;
        });
        addPointOnTheScore();
    }
});

/**
* Gestion of question 6
*/

// Correct answer
const reponse6Good = document.getElementById("4eme");
// Disabled bad answers after user's answer
const disabledBadAnswer6 = ()=>{
    for (let i = 0; i < badAnswersquestion6.length; i++) {
            const badAnswerquestion6 = badAnswersquestion6[i];
            badAnswerquestion6.addEventListener('change', function(e){
            e.preventDefault();
            question6.style.backgroundColor = '#f5657d';
            question6.style.color = "white";
            question6.style.transition = 'background-color 0.8s, color 0.85s';
            reponse6Good.disabled = true;
            badAnswersquestion6.forEach(badAnswerquestion6 => {
               badAnswerquestion6.disabled = true;
           });
           const resolveAnswer6 = document.createElement('p');
           resolveAnswer6.setAttribute('class','resolveAnswer');
           resolveAnswer6.textContent = 'La bonne réponse est 4ème au classement de D1';
           question6.append(resolveAnswer6);
        });    
    }
}
disabledBadAnswer6();

// Disabled correct answer after user's answer
reponse6Good.addEventListener('change', function(e){
e.preventDefault();
    if(reponse6Good.checked){
        question6.style.backgroundColor = '#25c725';
        question6.style.color = "white";
        question6.style.transition = 'background-color 0.8s, color 0.85s';
        badAnswersquestion6.forEach(badAnswerquestion6 => {
            badAnswerquestion6.disabled = true;
        });
        addPointOnTheScore();
    }
});

/**
* Gestion of question 7
*/

// Correct answer
const reponse7Good = document.getElementById("00");
// Disabled bad answers after user's answer
const disabledBadAnswer7 = ()=>{
    for (let i = 0; i < badAnswersquestion7.length; i++) {
            const badAnswerquestion7 = badAnswersquestion7[i];
            badAnswerquestion7.addEventListener('change', function(e){
            e.preventDefault();
            question7.style.backgroundColor = '#f5657d';
            question7.style.color = "white";
            question7.style.transition = 'background-color 0.8s, color 0.85s';
            reponse7Good.disabled = true;
            badAnswersquestion7.forEach(badAnswerquestion7 => {
               badAnswerquestion7.disabled = true;
           });
           const resolveAnswer7 = document.createElement('p');
           resolveAnswer7.setAttribute('class','resolveAnswer');
           resolveAnswer7.textContent = 'La bonne réponse est un beau 0-0 contre cette sextuple championne d\'Europe';
           question7.append(resolveAnswer7);
        });    
    }
}
disabledBadAnswer7();
// Disabled correct answer after user's answer
reponse7Good.addEventListener('change', function(e){
e.preventDefault();
    if(reponse7Good.checked){
        question7.style.backgroundColor = '#25c725';
        question7.style.color = "white";
        question7.style.transition = 'background-color 0.8s, color 0.85s';
        badAnswersquestion7.forEach(badAnswerquestion7 => {
            badAnswerquestion7.disabled = true;
        });
        addPointOnTheScore();
    }
});

/**
* Gestion of question 8
*/

// Correct answer
const reponse8Good = document.getElementById("4");
// Disabled bad answers after user's answer
const disabledBadAnswer8 = ()=>{
    for (let i = 0; i < badAnswersquestion8.length; i++) {
            const badAnswerquestion8 = badAnswersquestion8[i];
            badAnswerquestion8.addEventListener('change', function(e){
            e.preventDefault();
            question8.style.backgroundColor = '#f5657d';
            question8.style.color = "white";
            question8.style.transition = 'background-color 0.8s, color 0.85s';
            reponse8Good.disabled = true;
            badAnswersquestion8.forEach(badAnswerquestion8 => {
               badAnswerquestion8.disabled = true;
           });
           const resolveAnswer8 = document.createElement('p');
           resolveAnswer8.setAttribute('class','resolveAnswer');
           resolveAnswer8.textContent = 'La bonne réponse est 4';
           question8.append(resolveAnswer8);
        });    
    }
}
disabledBadAnswer8();

// Disabled correct answer after user's answer
reponse8Good.addEventListener('change', function(e){
e.preventDefault();
    if(reponse8Good.checked){
        question8.style.backgroundColor = '#25c725';
        question8.style.color = "white";
        question8.style.transition = 'background-color 0.8s, color 0.85s';
        badAnswersquestion8.forEach(badAnswerquestion8 => {
            badAnswerquestion8.disabled = true;
        });
        addPointOnTheScore();
    }
});

/**
* Gestion of question 9
*/

// Correct answer
const reponse9Good = document.getElementById("Petiteau");
// Disabled bad answers after user's answer
const disabledBadAnswer9 = ()=>{
    for (let i = 0; i < badAnswersquestion9.length; i++) {
            const badAnswerquestion9 = badAnswersquestion9[i];
            badAnswerquestion9.addEventListener('change', function(e){
            e.preventDefault();
            question9.style.backgroundColor = '#f5657d';
            question9.style.color = "white";
            question9.style.transition = 'background-color 0.8s, color 0.85s';
            reponse9Good.disabled = true;
            badAnswersquestion9.forEach(badAnswerquestion9 => {
               badAnswerquestion9.disabled = true;
           });
           const resolveAnswer9 = document.createElement('p');
           resolveAnswer9.setAttribute('class','resolveAnswer');
           resolveAnswer9.textContent = 'La bonne réponse est Marie Petiteau';
           question9.append(resolveAnswer9);
        });    
    }
}
disabledBadAnswer9();

// Disabled correct answer after user's answer
reponse9Good.addEventListener('change', function(e){
e.preventDefault();
    if(reponse9Good.checked){
        question9.style.backgroundColor = '#25c725';
        question9.style.color = "white";
        question9.style.transition = 'background-color 0.8s, color 0.85s';
        badAnswersquestion9.forEach(badAnswerquestion9 => {
            badAnswerquestion9.disabled = true;
        });
        addPointOnTheScore();
    }
});

/**
* Gestion of question 10
*/

// Correct answer
const reponse10Good = document.getElementById("Losa");
// Disabled bad answers after user's answer
const disabledBadAnswer10 = ()=>{
    for (let i = 0; i < badAnswersquestion10.length; i++) {
            const badAnswerquestion10 = badAnswersquestion10[i];
            badAnswerquestion10.addEventListener('change', function(e){
            e.preventDefault();
            question10.style.backgroundColor = '#f5657d';
            question10.style.color = "white";
            question10.style.transition = 'background-color 0.8s, color 0.85s';
            reponse10Good.disabled = true;
            badAnswersquestion10.forEach(badAnswerquestion10 => {
               badAnswerquestion10.disabled = true;
           });
           const resolveAnswer10 = document.createElement('p');
           resolveAnswer10.setAttribute('class','resolveAnswer');
           resolveAnswer10.textContent = 'La bonne réponse est Pedro Martinez Losa';
           question10.append(resolveAnswer10);
        });    
    }
}
disabledBadAnswer10();

// Disabled correct answer after user's answer
reponse10Good.addEventListener('change', function(e){
e.preventDefault();
    if(reponse10Good.checked){
        question10.style.backgroundColor = '#25c725';
        question10.style.color = "white";
        question10.style.transition = 'background-color 0.8s, color 0.85s';
        badAnswersquestion10.forEach(badAnswerquestion10 => {
            badAnswerquestion10.disabled = true;
        });
        addPointOnTheScore();
    }
});

/**
* Gestion of question 11
*/

// Correct answer
const reponse11Good = document.getElementById("Marseille");
// Disabled bad answers after user's answer
const disabledBadAnswer11 = ()=>{
    for (let i = 0; i < badAnswersquestion11.length; i++) {
            const badAnswerquestion11 = badAnswersquestion11[i];
            badAnswerquestion11.addEventListener('change', function(e){
            e.preventDefault();
            question11.style.backgroundColor = '#f5657d';
            question11.style.color = "white";
            question11.style.transition = 'background-color 0.8s, color 0.85s';
            reponse11Good.disabled = true;
            badAnswersquestion11.forEach(badAnswerquestion11 => {
               badAnswerquestion11.disabled = true;
           });
           const resolveAnswer11 = document.createElement('p');
           resolveAnswer11.setAttribute('class','resolveAnswer');
           resolveAnswer11.textContent = 'La bonne réponse est l\'Olympique de Marseille';
           question11.append(resolveAnswer11);
           stopChrono();
           showTheScore.disabled = false;
        });    
    }
}
disabledBadAnswer11();

// Disabled correct answer after user's answer
reponse11Good.addEventListener('change', function(e){
e.preventDefault();
    if(reponse11Good.checked){
        question11.style.backgroundColor = '#25c725';
        question11.style.color = "white";
        question11.style.transition = 'background-color 0.8s, color 0.85s';
        badAnswersquestion11.forEach(badAnswerquestion11 => {
            badAnswerquestion11.disabled = true;
        });
        addPointOnTheScore();
        stopChrono();
        showTheScore.disabled = false;
    }
});

/**
* Show the user's score
*/
const showScore = ()=>{
    const score = goodAnswers.length;
    console.log(score);
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

showTheScore.addEventListener('click', function(){
    showScore();    
});
    

/**-----------------------
 * Fonction du chronomètre
------------------------ */

// Secondes du chronomètre
let sec = 0;

// Minutes du chronomètre
let min = 0;

let norepeat = true; // Empêche le chrono de se répéter

const chrono = ()=>{ 
	
	if (sec < 59) {
		sec++;
		if (sec < 10) {
			sec = "0" + sec;
		}
	}
	else if (sec = 59) {
		min++;
		sec = "0" + 0;
	} 

	document.getElementById("chrono").innerHTML = '<span class="title-time">Votre chrono</span><br>' + min +' '+ '<span class="time">min</span>'+ ' '+':' +' '+ sec +' '+'<span class="time">sec</span>';
	
	if(sec == 30 && min == 1){
		gameOver();
	}
}

/**
 * Stopper le jeu si dépassement du temps limité
 * puis recharger la page
 */

let timerID = 0;

const gameOver =()=>{
	
	clearInterval(timerID);
	alert("GAME OVER :/ Clique sur OK pour rejouer");
	location.reload();
}

const stopChrono =()=>{
    clearInterval(timerID);
} 