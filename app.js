const workoutPlan = [
  { name: "Jumping Jacks", time: 30 },
  { name: "Push Ups", time: 40 },
  { name: "Rest", time: 20 },
  { name: "Squats", time: 40 },
  { name: "Rest", time: 20 },
  { name: "Plank", time: 40 },
];

let current = 0;
let timer;
let secondsLeft;

function startWorkout() {
  current = 0;
  nextExercise();
}

function nextExercise() {
  if (current >= workoutPlan.length) {
    document.getElementById("exercise").innerText = "Workout Complete!";
    document.getElementById("timer").innerText = "Done";
    return;
  }

  const exercise = workoutPlan[current];
  secondsLeft = exercise.time;
  document.getElementById("exercise").innerText = exercise.name;
  updateTimer();

  timer = setInterval(() => {
    secondsLeft--;
    updateTimer();
    if (secondsLeft <= 0) {
      clearInterval(timer);
      current++;
      setTimeout(nextExercise, 1000);
    }
  }, 1000);
}

function updateTimer() {
  document.getElementById("timer").innerText = secondsLeft + "s";
}
