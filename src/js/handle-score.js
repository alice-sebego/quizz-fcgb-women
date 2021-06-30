/**
 * Add a right answer in a array that collects all right answers
 * @param {Array} goodAnswersArray 
 */
const addPointOnTheScore = (goodAnswersArray) => {
    let good = 'ok'; 
    goodAnswersArray.push(good);
} 


/**
 * Show the user's score
 * @param {Array} goodAnswersArray 
 * @param {HTMLDivElement} informationDiv
 * @param {HTMLButtonElement} showScoreBtn 
 */
const showScore = (goodAnswersArray, informationDiv, showScoreBtn) => {
    const score = goodAnswersArray.length;
    const doneScore = document.createElement('div');
    doneScore.setAttribute('id','donescore');
    informationDiv.prepend(doneScore);
    doneScore.textContent = score + ' / 11';
    showScoreBtn.disabled = true;
    const gifAnime = document.createElement('div');
    informationDiv.prepend(gifAnime);
    
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

export { addPointOnTheScore, showScore } ;