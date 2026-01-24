<script setup>
import Grid from "../Grid.vue";
import { gymHealthFacts } from "../../utils";

// generate a randome whole integer between 0 and array lenth -1
const randonNumber = Math.floor(Math.random() * gymHealthFacts.length);
const todayFact = gymHealthFacts[randonNumber];
</script>

<template>
  <section id="dashboard">
    <div class="card tip-container">
      <h2>Welcome!</h2>
      <div>
        <p class="tip">
          <strong>Daily tip</strong><br />
          {{ todayFact }}
        </p>
      </div>
      <button>Star Workout</button>
    </div>
    <Grid />
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
  gap: 1.5rem;
}

.card {
  width: 100%;
  max-width: 560px;
  margin: 0 auto;
  padding: 1.25rem;
}

.tip-container {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.tip {
  margin-top: 0.25rem;
}

button {
  margin-top: 0.75rem;
  align-self: start;
}

</style>
