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

nextButton.addEventListener("click", () => {
    if (currentExerciseIndex < exercises.length) {
        exerciseDisplay.textContent = exercises[currentExerciseIndex];
        currentExerciseIndex++;
    } else {
        exerciseDisplay.textContent = "Workout Complete!";
        nextButton.disabled = true;
    }
});
