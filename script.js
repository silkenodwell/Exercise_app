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

// Ensure DOM elements are fetched after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const exerciseDisplay = document.getElementById("exercise-display");
    const nextButton = document.getElementById("next-button");
    const restartButton = document.getElementById("restart-button");

    // Display the first exercise on page load
    exerciseDisplay.textContent = exercises[currentExerciseIndex];

    // Event listener for the "Next" button
    nextButton.addEventListener("click", () => {
        currentExerciseIndex++;

        if (currentExerciseIndex < exercises.length) {
            // Show the next exercise
            exerciseDisplay.textContent = exercises[currentExerciseIndex];
        }

        // When the last exercise is reached, hide the "Next" button and show the "Restart" button
        if (currentExerciseIndex === exercises.length - 1) {
            nextButton.style.display = "none";
            restartButton.style.display = "block";
        }
    });

    // Event listener for the "Restart" button
    restartButton.addEventListener("click", () => {
        // Reset to the first exercise
        currentExerciseIndex = 0;
        exerciseDisplay.textContent = exercises[currentExerciseIndex];

        // Show the "Next" button again and hide the "Restart" button
        nextButton.style.display = "block";
        restartButton.style.display = "none";
    });
});
