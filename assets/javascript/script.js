var questionFirst = {
    question: "The best advise is:",
    rightAnswer: "Practise is 80% of Learning, make small projects",
    wrongAsnwers: [
        "Listening is 40% of Learning, so listen to teacher", "Viewing is 70% of Learning, overview teacher's material"
    ]
}

var questionSecond = {
    question: "When started the second World War?",
    rightAnswer: "1939",
    wrongAsnwers: [
        "1918", "1941"
    ]
}
var questionThird = {
    question: "Where is happiness?",
    rightAnswer: "I don't know",
    wrongAsnwers: ["Nowhere", "In silence"]
}

var questionFourth = {
    question: "Which of These galaxies is the nearest to Milky Way?",
    rightAnswer: "Andromeda",
    wrongAsnwers: ["Small Carlic", "Black Purl"]
}

var questions = [questionFirst, questionSecond, questionThird,questionFourth];
// End of questions



var period = 0;
var trueAnswers = 0;

function nextQuestion(){
    document.querySelectorAll('section').forEach(function(e){
        e.style.display = 'flex';
    })
    document.querySelector('#addQuestion').style.display = "none";
    document.querySelector('#addNewQuestion').style.display = "none";

    document.querySelector('#statistics').style.display = "none";
    
    document.querySelector('#button').style.display ="none";
    document.querySelector('#question .p').innerHTML = `${questions[period].question}`

    var randomNumber = Math.floor(Math.random()*6);


    if(randomNumber == 1){
        document.querySelector('#answers').innerHTML = `
        <div class="answer">
            <p>
                ${questions[period].rightAnswer}
            </p>
        </div>
        <div class="answer">
            <p>
                ${questions[period].wrongAsnwers[0]}
            </p>
        </div>
        <div class="answer">
            <p>
                ${questions[period].wrongAsnwers[1]}
            </p>
        </div>
        `    
    }else if(randomNumber == 2){
        document.querySelector('#answers').innerHTML = `
        <div class="answer">
            <p>
                ${questions[period].wrongAsnwers[0]}
            </p>
        </div>
        <div class="answer">
            <p>
                ${questions[period].rightAnswer}
            </p>
        </div>
        <div class="answer">
            <p>
                ${questions[period].wrongAsnwers[1]}
            </p>
        </div>
        `    
    }else if(randomNumber == 3){
        document.querySelector('#answers').innerHTML = `
        <div class="answer">
            <p>
                ${questions[period].wrongAsnwers[1]}
            </p>
        </div>
        <div class="answer">
            <p>
                ${questions[period].rightAnswer}
            </p>
        </div>
        <div class="answer">
            <p>
                ${questions[period].wrongAsnwers[0]}
            </p>
        </div>
        `    
    }
    else if(randomNumber == 4){
        document.querySelector('#answers').innerHTML = `
        <div class="answer">
            <p>
                ${questions[period].wrongAsnwers[1]}
            </p>
        </div>
        <div class="answer">
            <p>
                ${questions[period].wrongAsnwers[0]}
            </p>
        </div>
        <div class="answer">
            <p>
                ${questions[period].rightAnswer}
            </p>
        </div>
        `    
    }else if(randomNumber == 5){
        document.querySelector('#answers').innerHTML = `
        <div class="answer">
            <p>
                ${questions[period].wrongAsnwers[1]}
            </p>
        </div>
        <div class="answer">
            <p>
                ${questions[period].rightAnswer}
            </p>
        </div>
        <div class="answer">
            <p>
                ${questions[period].wrongAsnwers[0]}
            </p>
        </div>
        `    
    }else{
        document.querySelector('#answers').innerHTML = `
        <div class="answer">
            <p>
                ${questions[period].wrongAsnwers[0]}
            </p>
        </div>
        <div class="answer">
            <p>
                ${questions[period].wrongAsnwers[1]}
            </p>
        </div>
        <div class="answer">
            <p>
                ${questions[period].rightAnswer}
            </p>
        </div>
        `
    }
    
    period++;
    yoxla();
}

function findPercent(){
    console.log(period)
    percent = 100 * period/questions.length;
    document.querySelector('#progress_secondary').style.width = percent + "%";
}

function yoxla(){
    document.querySelectorAll(".answer")
        .forEach(function(answer){
        
            answer.onclick = function(){
                var currentQuestion = document.querySelector('.p');
                var valueOfAnswer = answer.querySelector('p');
                findPercent();
                for(let i = 0; i < questions.length; i++){

                    if(questions[i].question == currentQuestion.innerHTML.trim() && valueOfAnswer.innerHTML.trim() == questions[i].rightAnswer){
                        trueAnswers++;
                    }
                }

                if(period != questions.length){
                    nextQuestion();
                }else{
                    document.querySelectorAll('section').forEach(function(e){
                        e.style.display = 'none';
                    })
                    document.querySelector('#statistics').style.display = "flex"
                    document.querySelector('#statistics').innerHTML = `
                        <p>You answered correct ${trueAnswers} times</p>
                        <p>You answered false ${questions.length - trueAnswers} times</p>
                        <p>Your percentage is ${(100 * trueAnswers/questions.length).toFixed(0)}%</p>
                    `
                    document.querySelector('#button').style.display = 'flex';    
                    document.querySelector('#button').innerHTML = 'Restart';    
                    period = 0;
                    trueAnswers = 0;
                }
            }
        })
}


document.querySelector('#button').onclick = function(){
    document.querySelector('#progress_secondary').style.width = "0";
    setTimeout(nextQuestion, 1000)
}




// Adding question

var addNewQuestion = document.querySelector('#addNewQuestion');
var textarea = document.querySelector('#textarea');
var firstAnswer = document.querySelector('#firstAnswer');
var secondAnswer = document.querySelector('#secondAnswer');
var thirdAnswer = document.querySelector('#thirdAnswer');
var addQuestion = document.querySelector('#addQuestion')
var newSubmit = document.querySelector('#newSubmit')

function showAddingPanel(){
    document.querySelector('#button').style.bottom = "100px"
    document.querySelector('#button').style.position = "absolute";

    document.querySelector('#progress_bar').style.display = "none";
    document.querySelector('#question').style.display = "none";
    document.querySelector('#answers').style.display = "none";
    addQuestion.style.display = "flex";


    newSubmit.addEventListener('click', function(){
        document.querySelector('#addNewQuestion').style.display = "none";

        if(textarea.value, firstAnswer.value, secondAnswer.value, thirdAnswer.value){
            questions.push(
                {
                    question: textarea.value,
                    rightAnswer: firstAnswer.value,
                    wrongAsnwers: [
                        secondAnswer.value, thirdAnswer.value
                    ]
                }
            )

            document.querySelector('article').style.display = "flex";
            document.querySelector('main').style.filter = "blur(10px)";



            document.querySelector('#yesWant').addEventListener('click', function(){
                document.querySelector("#addQuestion").style.height = "80%"
                document.querySelector('article').style.display = "none";
                document.querySelector('main').style.filter = "blur(0px)";
                document.querySelector('#button').style.display = "none";
            })

            document.querySelector('#noWant').addEventListener('click', function(){
                document.querySelector('article').style.display = "none";
                document.querySelector('main').style.filter = "blur(0px)";
                document.querySelectorAll('section').forEach(function(e){
                    e.style.display = 'flex';
                })
                document.querySelector('#statistics').style.display = "none"
                document.querySelector('#button').style.display = "flex";

                addQuestion.style.display = "none";
            })


        }else{
            alert("Please fill the prompts")
        }


        textarea.value = "";
        firstAnswer.value = "";
        secondAnswer.value = "";
        thirdAnswer.value = "";
    })

    



}

addNewQuestion.addEventListener('click', showAddingPanel)