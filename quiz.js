// 1. Quiz Questions Array
// Storing questions and answers in an array of objects [cite: 27, 28]
const quizQuestions = [
    { question: "What is the capital of France?", answer: "paris" },
    { question: "Which planet is known as the Red Planet?", answer: "mars" },
    { question: "What is 5 + 7?", answer: "12" },
    { question: "Who is the President of Russia?", answer: "vladimir putin" },
    { question: "Which language is used for web development?", answer: "javascript" }
];

// 2. Function to Run the Quiz [cite: 32]
function runQuiz() {
    // 3. Score Initialization 
    let score = 0;

    // 4. Loop Through Questions 
    for (let i = 0; i < quizQuestions.length; i++) {
        
        // 5. Prompt for User Input [cite: 42]
        // asking the question via prompt()
        let userAnswer = prompt(quizQuestions[i].question);

        // Safety check: if user hits 'Cancel', stop the function
        if (userAnswer === null) {
            alert("Quiz cancelled.");
            return;
        }

        // 6. Normalize the Input 
        // converting to lowercase and removing whitespace
        let processedInput = userAnswer.toLowerCase().trim();
        let correctParams = quizQuestions[i].answer.toLowerCase().trim();

        // 7. Check the Answer & 8. Provide Immediate Feedback [cite: 48, 51]
        if (processedInput === correctParams) {
            alert("Correct!");
            score++; // Increment score [cite: 49]
        } else {
            // Show the correct answer if they get it wrong [cite: 52]
            alert("Wrong! The correct answer is: " + quizQuestions[i].answer);
        }
    }

    // 9. Display the Final Score [cite: 54]
    alert("Quiz Over! Your final score is " + score + " out of " + quizQuestions.length);
}

// Start the game automatically
runQuiz();