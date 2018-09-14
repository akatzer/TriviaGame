$(".trivia-score").hide();

var state = {
    questions: [
        {
            question: "You can buy Jack Daniel's by the barrel",
            choices: ["True", "False"],
            correctAnswer: "True"
        },
        {
            question: "What was Jack Daniel's Real Name?",
            choices: ["Jackson Michael Daniel", "Jim Beam Daniel", "Jasper Newton Daniel", "Evan Williams Daniel"],
            correctAnswer: "Jasper Newton Daniel"
        },
        {
            question: "Roughly how many gallons of whiseky are kept at the Jack Daniel's distillery?",
            choices: ["One Million", "One Billion", "500,000", "100,00"],
            correctAnswer: "One Billion"
        },
        {
            question: "What year was the Jack Daniel Distillery officially established?",
            choices: ["1866", "1875", "1850", "1904"],
            correctAnswer: "1866"
        },
        {
            question: "Jack Daniel's is sold in a square shaped bottle?",
            choices: ["True", "False"],
            correctAnswer: "True"
        },
        {
            question: "Jack Daniel's is not aged for a specific amount of time, instead it is deemed ready for bottling when it tastes ready.",
            choices: ["True", "False"],
            correctAnswer: "True"
        },
        {
            question: "After Jack Daniel's is done with their whiskey barrels, they sell them to:",
            choices: ["Hot Sauce Makers", "Beer Brewers", "Scotch Whisky Distillers", "All of the above"],
            correctAnswer: "All of the above"
        },
        {
            question: "One well known singer was buried with a bottle of Jack. Who was it?",
            choices: ["Elvis Presley", "Ray Charles", "Dean Martin", "Frank Sinatra"],
            correctAnswer: "Frank Sinatra"
        },
        {
            question: "What kind of wood is used to make the charcoal Jack Daniel's uses in their filtering process",
            choices: ["Oak", "Hickory", "Sugar Maple", "Apple"],
            correctAnswer: "Sugar Maple"
        },
        {
            question: "Jack Daniel's is referred to as...",
            choices: ["Jack's Best", "Old No. 7", "Better Evan Williams", "Cheaper Maker's Mark"],
            correctAnswer: "Old No. 7"
        }

    ],
    questionCounter: 0,
    correct: 0,
    incorrect: 0,
    notAnswered: 0,
}

function generateQuestion() {
    if (state.questionCounter < state.questions.length) {
        $(".trivia-block").append("<div class='question'>" + state.questions[state.questionCounter].question + "</div><hr>");
        generateChoices();
    }
    else {
        stop();
        $(".trivia-score").show();
        $(".timer").hide();
        $("#start-button").show();
        $("#start-button").text("Click to start the game over")
        $("#num-correct").text(state.correct);
        $("#num-incorrect").text(state.incorrect);
        $("#not-answered").text(state.notAnswered);
    }
}

function generateChoices() {
    var currentChoices = state.questions[state.questionCounter].choices;
    for (var i = 0; i < currentChoices.length; i++) {
        $(".trivia-block").append(`<button type="button" class="btn btn-primary btn-lg btn-block choices" value="${currentChoices[i]}">${currentChoices[i]}</button>`);
        
    }

}

function resetGame() {
    state.notAnswered = 0;
    state.incorrect = 0;
    state.questionCounter = 0;
    state.correct = 0;
    $("#start-button").hide();
    $(".timer").show();
}

var number = 10;
var intervalId;

// on-click to Start the timer
$("#start-button").on("click", function(){
    resetGame();
    run();
    
    
})

// start the time and show the trivia
function run() {
    $(".trivia-score").hide();
    clearInterval(intervalId);
    number = 10;
    intervalId = setInterval(decrement, 1000);
    generateQuestion();
    $(".timer").html("<p>Time Remaining: 10</p>");
    
    
}

// runs the decrement function that actually counts down
function decrement() {
    number--;
    $(".timer").html("<p>Time Remaining: " + number + "</p>");
   
  
    if (number == 0) {
        stop();
        $(".trivia-block").html("")
        $(".timer").html("<p>Time Remaining: 10</p>");
        state.notAnswered++;
        state.incorrect++;
        state.questionCounter++;
        run();
        
    
    }
}


// stops the time after it reaches zero. resets the interval, timer and button text
function stop() {    
    clearInterval(intervalId);
    number = 10;
    $(".timer").html("");
    
}

$(document).on("click", ".choices", function () {

    $(".trivia-block").html("")
    var answer = $(this).val()
    if (answer === state.questions[state.questionCounter].correctAnswer) {
        state.correct++;
        state.questionCounter++
        $(".trivia-block").append("You are correct!")
        setTimeout(function(){
            $(".trivia-block").html("")
            run();
        }, 3000);
        stop();
    }
    else {
        state.incorrect++;
        state.questionCounter++
        $(".trivia-block").append("That was incorrect.")
        setTimeout(function(){
            $(".trivia-block").html("")
            run();
        }, 3000);
        stop();
    }
    

    
})


























































































