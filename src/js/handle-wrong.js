const disabledBadAnswer = (arrayWrong, arrayQuestion, answersGood, resolveAnswers) => {
    for (let i = 0; i < arrayWrong.length; i++) {
            
        arrayWrong[i].addEventListener('change', () => {
            
            if(arrayWrong[i].checked){

                arrayQuestion.style.backgroundColor = '#f5657d';
                arrayQuestion.style.color = "white";
                arrayQuestion.style.transition = 'background-color 0.8s, color 0.85s';
                answersGood.disabled = true;
                arrayWrong.forEach(badAnswerquestion => {
                    badAnswerquestion.disabled = true;
                });

                const resolveAnswer = document.createElement('p');
                resolveAnswer.setAttribute('class','resolveAnswer');
                resolveAnswer.textContent = resolveAnswers;
                arrayQuestion.append(resolveAnswer);
            }
        });    
    }
}

export { disabledBadAnswer };