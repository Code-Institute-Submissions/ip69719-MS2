// Create questions for the quiz
let questions = [{
    imgSrc : "assets/images/lexus.png",
    optionA : "Lexus",
    optionB : "Lamborghini",
    optionC : "Lotus",
    correct : "optionA"
},{
    imgSrc : "assets/images/mercedes.png",
    optionA : "Mazda",
    optionB : "Mercedes",
    optionC : "McLaren",
    correct : "optionB"
},{
    imgSrc : "assets/images/toyota.png",
    optionA : "Tesla",
    optionB : "Tata",
    optionC : "Toyota",
    correct : "optionC"
}];


//Declare variables to keep truck of:
let currentQuestion = 0; //current question and
let score = 0;//score

//Get/display total number of questions in the quiz
let  totalQuestions = document.getElementById("total-questions");
totalQuestions.innerHTML = questions.length;


//Display question function
function displayQuestion() {

    //get and modify user score
    let userScore = document.getElementById("user-score");
    userScore.innerHTML = score;

    //display logo image
    let questionImg = document.getElementById("question-img");
    questionImg.innerHTML = "<img src="+ questions[currentQuestion].imgSrc +">";
    
    //display alternative answers
    let optionA = document.getElementById("optionA");
    optionA.innerHTML = questions[currentQuestion].optionA;

    let optionB = document.getElementById("optionB");
    optionB.innerHTML = questions[currentQuestion].optionB;

    let optionC = document.getElementById("optionC");
    optionC.innerHTML = questions[currentQuestion].optionC;
}

displayQuestion();


/**
 * function to check user answer against the correct answer
 * increment user score if the answer is correct.
 * display next question
 */
function checkAnswer(userAnswer){

    if (userAnswer == questions[currentQuestion].correct) {
        alert("That is Correct Answer! Well Done!");
        score++;

    } else {
        alert("This is Incorrect :-( !" );
    }
    currentQuestion++;
    displayQuestion();
}
