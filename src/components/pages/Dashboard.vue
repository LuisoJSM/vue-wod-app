<script setup>
import Grid from "../Grid.vue";
import { gymHealthFacts } from "../../utils";

const props = defineProps({
  handleSelectedWorkout: Function,
  firstIncompleteWorkoutIndex: Number
})


const randomNumber = Math.floor(Math.random() * gymHealthFacts.length);
const todayFact = gymHealthFacts[randomNumber];
</script>

<template>
  <section id="dashboard">
    <div class="dashboard-card welcome-container">
      <div class="header-row">
        <h2>Welcome back!</h2>
        <i class="fa-solid fa-hand-sparkles icon-wave"></i>
      </div>

      <div class="tip-box">
        <div class="tip-header">
          <i class="fa-regular fa-lightbulb"></i>
          <span>DAILY TIP</span>
        </div>
        <p class="tip-text">{{ todayFact }}</p>
      </div>

      <button class="btn-start"
        @click="() => handleSelectedWorkout(firstIncompleteWorkoutIndex < 0 ? 0 : firstIncompleteWorkoutIndex)">
        Start Workout <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>

    <Grid v-bind="props" />
  </section>
</template>

<style scoped>
#dashboard {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-family: inherit;
}


.dashboard-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
}

.header-row {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.header-row h2 {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 850;
  color: #0f172a;
  letter-spacing: -0.5px;
}

.icon-wave {
  color: #f59e0b;
  font-size: 1.5rem;
}


.tip-box {
  background: #fffbeb;
  border: 1px solid #fcd34d;
  padding: 1rem 1.25rem;
  border-radius: 0.75rem;
  position: relative;
}

.tip-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: 800;
  color: #b45309;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
}

.tip-text {
  margin: 0;
  font-size: 1rem;
  color: #78350f;
  line-height: 1.5;
  font-weight: 500;
}


.btn-start {
  align-self: flex-start;
  background: #0f172a;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-start:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  background: #1e293b;
}


@media (max-width: 640px) {
  .dashboard-card {
    padding: 1.5rem;
  }

  .btn-start {
    width: 100%;
    justify-content: center;
  }
}
</style>