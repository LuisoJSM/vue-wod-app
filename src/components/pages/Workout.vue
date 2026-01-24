<script setup>
import { workoutProgram } from '../../utils'

const selectedWorkout = 4
const { workout, warmup } = workoutProgram[selectedWorkout]
</script>

<template>
  <section id="workout-card">
    <div class="plan-card">
      <div class="card-header">
        <span class="day-badge">Day {{ selectedWorkout < 9 ? '0' + selectedWorkout : selectedWorkout }}</span>
        <div class="icon-bg">
          <i class="fa-solid fa-dumbbell"></i>
        </div>
      </div>
      <h2 class="workout-title">{{ 'Push' }} Workout</h2>
    </div>

    <div class="exercises-container">
      <!-- WARMUP -->
      <h4 class="grid-header-main span-full">Warmup</h4>

      <h6 class="grid-header align-left">Exercise</h6>
      <h6 class="grid-header">Sets</h6>
      <h6 class="grid-header">Reps</h6>
      <h6 class="grid-header">Weight</h6>

      <div class="exercise-row" v-for="(w, wIdx) in warmup" :key="'warmup-' + wIdx">
        <div class="exercise-name">
          <p>{{ w.name }}</p>
          <button class="help-btn"><i class="fa-regular fa-circle-question"></i></button>
        </div>

        <p class="stat-pill sets-pill">{{ w.sets }}</p>
        <p class="stat-pill reps-pill">{{ w.reps }}</p>

        <div class="input-wrapper">
          <input class="weight-input" placeholder="0" type="text" />
          <span class="unit">kg</span>
        </div>
      </div>

      <div class="divider span-full"></div>

      <!-- MAIN WORKOUT -->
      <h4 class="grid-header-main span-full">Main Workout</h4>

      <h6 class="grid-header align-left">Exercise</h6>
      <h6 class="grid-header">Sets</h6>
      <h6 class="grid-header">Reps</h6>
      <h6 class="grid-header">Weight</h6>

      <div class="exercise-row" v-for="(w, wIdx) in workout" :key="'workout-' + wIdx">
        <div class="exercise-name">
          <p>{{ w.name }}</p>
          <button class="help-btn"><i class="fa-regular fa-circle-question"></i></button>
        </div>

        <p class="stat-pill sets-pill">{{ w.sets }}</p>
        <p class="stat-pill reps-pill">{{ w.reps }}</p>

        <div class="input-wrapper">
          <input class="weight-input" placeholder="0" type="text" />
          <span class="unit">kg</span>
        </div>
      </div>
    </div>
    <div class="actions-card">
  <button class="btn-secondary">
    <i class="fa-solid fa-floppy-disk"></i>
    <span>Save and exit</span>
  </button>

  <button class="btn-primary">
    <span>Complete</span>
    <i class="fa-solid fa-check"></i>
  </button>
</div>

  </section>
</template>

<style scoped>
#workout-card {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 820px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* =========================
   HEADER
   ========================= */
.plan-card {
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  color: var(--background-primary);
  padding: 1.4rem;
  border-radius: 16px;
  box-shadow: var(--shadow-light);
  border: 1px solid color-mix(in srgb, var(--border-highlight), transparent 35%);

  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.day-badge {
  background: color-mix(in srgb, var(--background-primary), transparent 80%);
  border: 1px solid color-mix(in srgb, var(--border-primary), transparent 30%);
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 800;
  backdrop-filter: blur(6px);
}

.icon-bg {
  width: 42px;
  height: 42px;
  background: color-mix(in srgb, var(--background-primary), transparent 82%);
  border: 1px solid color-mix(in srgb, var(--border-primary), transparent 30%);
  border-radius: 999px;
  display: grid;
  place-items: center;
}

.workout-title {
  margin: 0;
  font-size: 1.9rem;
  font-weight: 900;
  letter-spacing: -0.4px;
}

/* =========================
   EXERCISES GRID CARD
   ========================= */
.exercises-container {
  background: linear-gradient(180deg, var(--background-secondary), var(--background-muted));
  border: 1px solid var(--border-primary);
  border-radius: 16px;
  box-shadow: var(--shadow-light);
  padding: 1rem;

  display: grid;
  grid-template-columns: 3fr 0.6fr 0.6fr 1.2fr;
  gap: 0.7rem 0.9rem;
  align-items: center;
}

.span-full {
  grid-column: 1 / -1;
}

/* Warmup / Main Workout */
.grid-header-main {
  font-size: 1.05rem;
  font-weight: 900;
  color: var(--color-primary);
  margin: 0.55rem 0 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Column headers */
.grid-header {
  font-size: 0.72rem;
  text-transform: uppercase;
  color: var(--color-tertiary);
  text-align: center;
  margin: 0;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.grid-header.align-left {
  text-align: left;
  padding-left: 0.65rem;
}

/* Divider */
.divider {
  height: 1px;
  width: 100%;
  background: var(--border-tertiary);
  margin: 0.8rem 0 0.4rem;
}

/* =========================
   ROWS
   ========================= */
.exercise-row {
  display: contents;
}

.exercise-name {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;

  padding: 0.55rem 0.65rem;
  border-radius: 12px;
  border: 1px solid var(--border-tertiary);
  background: color-mix(in srgb, var(--background-primary), transparent 86%);

  font-weight: 700;
  color: var(--color-primary);
}

.exercise-name p {
  margin: 0;
  color: var(--color-primary);
}

/* Stat pills */
.stat-pill {
  text-align: center;
  background: color-mix(in srgb, var(--background-primary), transparent 86%);
  border: 1px solid var(--border-tertiary);
  padding: 0.35rem 0.5rem;
  border-radius: 999px;
  font-weight: 900;
  margin: 0;
  font-size: 0.95rem;
  color: var(--color-primary);
}

/* Weight input */
.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.weight-input {
  width: 100%;
  height: 38px;
  padding: 0.55rem 2rem 0.55rem 0.6rem;
  border: 1px solid var(--border-secondary);
  border-radius: 12px;
  font-weight: 800;
  outline: none;
  transition: border-color 140ms ease, box-shadow 140ms ease;

  background: color-mix(in srgb, var(--background-primary), transparent 82%);
  color: var(--color-primary);
  text-align: center;
}

.weight-input:focus {
  border-color: var(--border-highlight);
  box-shadow: 0 0 0 3px var(--color-link-transparent);
}

.unit {
  position: absolute;
  right: 10px;
  font-size: 0.8rem;
  color: var(--color-tertiary);
  pointer-events: none;
}

/* Help button */
.help-btn {
  width: 32px;
  height: 32px;
  padding: 0;
  border-radius: 10px;

  border: 1px solid var(--border-tertiary);
  background: color-mix(in srgb, var(--background-primary), transparent 86%);
  color: var(--color-tertiary);

  display: grid;
  place-items: center;

  cursor: pointer;
  box-shadow: none;
  transition: transform 140ms ease, color 140ms ease, border-color 140ms ease;
}

.help-btn:hover {
  transform: translateY(-1px);
  color: var(--color-link);
  border-color: var(--border-secondary);
}

/* =========================
   ACTIONS (bottom buttons)
   ========================= */
.actions-card {
  background: linear-gradient(180deg, var(--background-secondary), var(--background-muted));
  border: 1px solid var(--border-primary);
  border-radius: 16px;
  box-shadow: var(--shadow-light);
  padding: 1rem;

  display: flex;
  gap: 0.75rem;
  justify-content: space-between;
  align-items: center;
}

.actions-card button {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  white-space: nowrap;
}

/* Botón principal */
.btn-primary {
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  color: var(--background-primary);
}

/* Botón secundario (no tan llamativo) */
.btn-secondary {
  background: color-mix(in srgb, var(--background-primary), transparent 88%);
  color: var(--color-primary);
  border: 1px solid var(--border-secondary);
  box-shadow: none;
}

.btn-secondary:hover {
  box-shadow: var(--shadow-light);
}

/* Mobile: apilar */
@media (max-width: 640px) {
  .actions-card {
    flex-direction: column;
    align-items: stretch;
  }

  .actions-card button {
    width: 100%;
  }
}


/* =========================
   MOBILE
   ========================= */
@media (max-width: 640px) {
  .grid-header {
    display: none;
  }

  .exercises-container {
    grid-template-columns: 1fr;
    gap: 0.85rem;
    padding: 0.95rem;
  }

  .grid-header-main {
    margin-top: 1rem;
    font-size: 1.15rem;
  }

  .divider {
    margin: 1.1rem 0 0.35rem;
  }

  .exercise-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1.5fr;
    grid-template-areas:
      "name name name"
      "sets reps input";
    gap: 0.75rem;

    padding: 0.95rem;
    border-radius: 14px;
    border: 1px solid var(--border-tertiary);
    background: color-mix(in srgb, var(--background-primary), transparent 86%);
    box-shadow: none;
  }

  .exercise-name {
    grid-area: name;
    padding: 0.65rem 0.7rem;
  }

  .sets-pill::after {
    content: " sets";
    font-size: 0.7em;
    opacity: 0.65;
    font-weight: 600;
  }

  .reps-pill::after {
    content: " reps";
    font-size: 0.7em;
    opacity: 0.65;
    font-weight: 600;
  }

  .stat-pill {
    background: color-mix(in srgb, var(--background-primary), transparent 88%);
    border: 1px solid var(--border-tertiary);
  }

  .input-wrapper {
    grid-area: input;
  }

  .weight-input {
    height: 44px;
    font-size: 1rem;
  }
}
</style>
