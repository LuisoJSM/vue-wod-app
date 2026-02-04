<script setup>
import Layout from "./components/layouts/Layout.vue";
import Welcome from "./components/pages/Welcome.vue";
import Dashboard from "./components/pages/Dashboard.vue";
import Workout from "./components/pages/Workout.vue";
import { ref, computed, onMounted } from "vue";
import { workoutProgram } from "./utils";


function keyFor(sectionId, movementId) {
  return `${sectionId}__${movementId}`;
}


const defaultData = {};
for (const workoutIdx in workoutProgram) {
  const workoutData = workoutProgram[workoutIdx];
  defaultData[workoutIdx] = {};

  
  if (Array.isArray(workoutData.strength)) {
    for (const m of workoutData.strength) {
      defaultData[workoutIdx][keyFor("strength", m.id)] = "";
    }
  }

  defaultData[workoutIdx].observaciones = "";
}




const saved = localStorage.getItem("workouts");
const initialData = saved ? JSON.parse(saved) : defaultData;


const data = ref(initialData);
const selectedDisplay = ref(1);
const selectedWorkout = ref(-1);



const isWorkoutCompleted = computed(() => {

  const currWorkout = data.value?.[selectedWorkout.value];
  if (!currWorkout) return false;

  const strengthEntries = Object.entries(currWorkout).filter(([k]) =>
    k.startsWith("strength__")
  );

  if (strengthEntries.length === 0) return true;

  return strengthEntries.every(([, v]) => !!String(v || "").trim());
});

const firstIncompleteWorkoutIndex = computed(() => {
  const allWorkouts = data.value;
  if (!allWorkouts) return -1;

  
  for (const index in allWorkouts) {
    const workout = allWorkouts[index];
    const strengthEntries = Object.entries(workout).filter(([k]) =>
      k.startsWith("strength__")
    );

    const isComplete =
      strengthEntries.length === 0
        ? true
        : strengthEntries.every(([, v]) => !!String(v || "").trim());

    if (!isComplete) return parseInt(index);
  }

  return -1;
});



function handleChangeDisplay(idx) {
  selectedDisplay.value = idx;
}

function handleSelectedWorkout(idx) {
  selectedDisplay.value = 3;
  selectedWorkout.value = idx;
}

function handleSaveWorkout() {
  localStorage.setItem("workouts", JSON.stringify(data.value));
  selectedDisplay.value = 2;
  selectedWorkout.value = -1;
}
</script>

<template>
  <Layout>
    <Welcome :handleChangeDisplay="handleChangeDisplay" v-if="selectedDisplay == 1" />
    <Dashboard
      :firstIncompleteWorkoutIndex="firstIncompleteWorkoutIndex"
      :handleSelectedWorkout="handleSelectedWorkout"
      v-if="selectedDisplay == 2"
    />
    <Workout
      :handleSaveWorkout="handleSaveWorkout"
      :isWorkoutCompleted="isWorkoutCompleted"
      :data="data"
      :selectedWorkout="selectedWorkout"
      v-if="workoutProgram?.[selectedWorkout]"
    />
  </Layout>
</template>

<style scoped></style>
