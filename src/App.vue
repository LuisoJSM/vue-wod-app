<script setup>
import Layout from './components/layouts/Layout.vue';
import Welcome from './components/pages/Welcome.vue';
import Dashboard from './components/pages/Dashboard.vue';
import Workout from './components/pages/Workout.vue';
import { ref, computed } from 'vue';
import { workoutProgram } from './utils';


const defaultData = {}
for (let workoutIdx in workoutProgram) {
  const workoutData = workoutProgram[workoutIdx]
  defaultData[workoutIdx] = {}


  for (let e of workoutData.workout) {
    defaultData[workoutIdx][e.name] = ''
  }

}

const selectedDisplay = ref(1)
const data = ref(defaultData) // {1...30: {excercise_name:'_',....}} 
const selectedWorkout = ref(-1)

const isWorkoutCompleted = computed(() => {
  const currWorkout = data.value?.[selectedWorkout.value]
  if (!currWorkout) { return false }

  const isCompleteCheck = Object.values(currWorkout).every(ex => !!ex)
  console.log('ISCOMPLETED: ', isCompleteCheck)
  return isCompleteCheck
})

const firstIncompleteWorkoutIndex = computed(() => {
  const allWorkouts = data.value
  if (!allWorkouts) { return -1 }
  // loop over every key value pair, and check if the workout is complete or not
  for (const [index, workout] of Object.entries(allWorkouts)) {
    const isComplete = Object.values(workout).every(ex => !!ex)
    if (!isComplete) {
      return parseInt(index)
    }
  }
  return -1 //all are completed
})

function handleChangeDisplay(idx) {
  selectedDisplay.value = idx
}

function handleSelectedWorkout(idx) {
  selectedDisplay.value = 3
  selectedWorkout.value = idx
}

function handleSaveWorkout() {
  // save the current data snapshot to localSotorage so we can retrieve next time
  localStorage.setItem('workouts', JSON.stringify(data.value))

  // show the dashboard
  selectedDisplay.value = 2

  selectedWorkout.value = -1
}



</script>

<template>

  <Layout>
    <!--Page 1-->
    <Welcome :handleChangeDisplay="handleChangeDisplay" v-if="selectedDisplay == 1" />
    <!--Page 2-->
    <Dashboard :firstIncompleteWorkoutIndex="firstIncompleteWorkoutIndex" :handleSelectedWorkout="handleSelectedWorkout" v-if="selectedDisplay == 2" />
    <!--Page 3-->
    <Workout :handleSaveWorkout="handleSaveWorkout" :isWorkoutCompleted="isWorkoutCompleted" :data="data" :selectedWorkout="selectedWorkout" v-if="workoutProgram?.[selectedWorkout]" />
  </Layout>


</template>

<style scoped></style>
