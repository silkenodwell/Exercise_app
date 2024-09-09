const exercises = [
    "Jumping Jacks",
    "Push-ups",
    "Sit-ups",
    "Squats",
    "Lunges",
    "Plank",
    "Burpees",
    "Mountain Climbers",
    "High Knees",
    "Butt Kicks"
];

let currentExerciseIndex = 0;

const exerciseDisplay = document.getElementById("exercise-display");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");

// Display the first exercise
exerciseDisplay.textContent = exercises[currentExerciseIndex];

// Event listener for the "Next" button
nextButton.addEventListener("click", () => {
    currentExerciseIndex++;

    if (currentExerciseIndex < exercises.length) {
        // Show the next exercise in the list
        exerciseDisplay.textContent = exercises[currentExerciseIndex];
    } 

    if (currentExerciseIndex === exercises.length - 1) {
        // Hide the "Next" button and show the "Restart" button at the last exercise
        nextButton.style.display = "none";
        restartButton.style.display = "block";
    }
});

// Event listener for the "Restart" button
restartButton.addEventListener("click", () => {
    // Reset to the first exercise
    currentExerciseIndex = 0;
    exerciseDisplay.textContent = exercises[currentExerciseIndex];
    
   
