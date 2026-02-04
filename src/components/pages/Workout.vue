<script setup>
import { ref, computed } from "vue";
import Portal from "../Portal.vue";
import { workoutProgram, exerciseDescriptions } from "../../utils";

const props = defineProps({
  data: Object,
  selectedWorkout: Number,
  handleSaveWorkout: Function,
  isWorkoutCompleted: Boolean,
});

const workout = computed(() => workoutProgram?.[props.selectedWorkout] || null);
const selectedExercise = ref(null);

const exerciseDescription = computed(() => {
  const key = selectedExercise.value;
  return key ? exerciseDescriptions?.[key] || "No description available yet." : "";
});

function openExercise(name) {
  selectedExercise.value = name;
}

function handleCloseModal() {
  selectedExercise.value = null;
}

function keyFor(sectionId, movementId) {
  return `${sectionId}__${movementId}`;
}

// Pequeña ayuda para formatear tipos como "FOR_TIME"
function formatType(t) {
  return t ? t.replace(/_/g, " ") : "Workout";
}
</script>

<template>
  <Portal :handleCloseModal="handleCloseModal" v-if="selectedExercise">
    <div class="exercise-modal">
      <div class="modal-header">
        <h4>{{ selectedExercise }}</h4>
        <button class="btn-icon-close" @click="handleCloseModal">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="modal-body">
        <span class="modal-label">COACH CUE</span>
        <p>{{ exerciseDescription }}</p>
      </div>
      <button class="btn btn--primary btn--full" @click="handleCloseModal">Got it</button>
    </div>
  </Portal>

  <section id="workout-view" v-if="workout">

    <header class="header-section">
      <div class="badge-container">
        <span class="badge">Session {{ props.selectedWorkout + 1 }}</span>
      </div>
      <h1 class="hero-title">{{ workout.title }}</h1>
      <p class="hero-subtitle" v-if="workout.coachTip">
        <i class="fa-solid fa-quote-left icon-quote"></i> {{ workout.coachTip }}
      </p>
    </header>

    <div class="bento-stack">

      <article class="bento-card" v-if="workout.warmup?.length">
        <div class="card-header">
          <span class="tag tag--green">Warm-up</span>
          <h3 class="card-title-text">Mobility & Prep</h3>
        </div>

        <div class="rows-container">
          <div class="workout-row" v-for="(m, idx) in workout.warmup" :key="'wu-' + idx">
            <div class="row-content">
              <div class="row-header">
                <span class="row-name">{{ m.name }}</span>
                <button class="btn-info" @click="openExercise(m.name)">
                  <i class="fa-regular fa-circle-question"></i>
                </button>
              </div>
              <div class="row-meta">
                <span class="meta-pill">{{ m.sets }} sets</span>
                <span class="meta-pill">{{ m.reps }} reps</span>
              </div>
            </div>
            <div class="check-circle"></div>
          </div>
        </div>
      </article>

      <article class="bento-card" v-if="workout.strength?.length">
        <div class="card-header">
          <span class="tag tag--blue">Strength</span>
          <h3 class="card-title-text">Primary Lifts</h3>
        </div>

        <div class="rows-container">
          <div class="grid-headers desktop-only">
            <span>MOVEMENT</span>
            <div class="headers-right">
              <span>SETS</span>
              <span>REPS</span>
              <span>LOAD (KG)</span>
            </div>
          </div>

          <div class="workout-row strength-row" v-for="(m, idx) in workout.strength" :key="'st-' + idx">
            <div class="row-content">
              <div class="row-header">
                <span class="row-name">{{ m.name }}</span>
                <button class="btn-info" @click="openExercise(m.name)">
                  <i class="fa-regular fa-circle-question"></i>
                </button>
              </div>
            </div>

            <div class="strength-inputs">
              <div class="stat-group">
                <span class="stat-val">{{ m.sets }}</span>
                <span class="stat-lbl mobile-only">Sets</span>
              </div>
              <div class="stat-group">
                <span class="stat-val">{{ m.reps }}</span>
                <span class="stat-lbl mobile-only">Reps</span>
              </div>

              <div class="input-container">
                <input type="text" inputmode="decimal" placeholder="-"
                  v-model="props.data[props.selectedWorkout][keyFor('strength', m.id)]" />
                <span class="unit">kg</span>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article class="bento-card" v-if="workout.training">
        <div class="card-header">
          <span class="tag tag--orange">Metcon</span>
          <div class="header-right">
            <h3 class="card-title-text">{{ formatType(workout.training.type) }}</h3>
            <span class="cap-badge" v-if="workout.training.timeCapMin">
              {{ workout.training.timeCapMin }}' Cap
            </span>
          </div>
        </div>

        <div class="rows-container">
          <div class="workout-row" v-for="(mv, idx) in workout.training.movements" :key="'tr-' + idx">
            <div class="metcon-content">
              <span class="reps-big">{{ mv.reps }}</span>
              <span class="row-name">{{ mv.name }}</span>
            </div>
            <button class="btn-info" @click="openExercise(mv.name)">
              <i class="fa-regular fa-circle-question"></i>
            </button>
          </div>

          <div class="note-box" v-if="workout.training.note">
            <i class="fa-solid fa-circle-info"></i> {{ workout.training.note }}
          </div>
        </div>
      </article>

      <article class="bento-card">
        <h3 class="card-title-text" style="margin-bottom: 1rem;">Session Notes</h3>
        <textarea class="notes-area" placeholder="How did it feel? Log RPE or modifications..."
          v-model="props.data[props.selectedWorkout].observaciones" rows="3"></textarea>
      </article>

    </div>

    <div class="actions-row">
      <button class="btn btn--ghost" @click="handleSaveWorkout">
        Save Progress
      </button>

      <button class="btn btn--primary" :disabled="!isWorkoutCompleted" @click="handleSaveWorkout">
        Complete Session
        <span class="btn-glow"></span>
      </button>
    </div>

  </section>
</template>

<style scoped>
#workout-view {
  --p-color: var(--color-primary);
  --s-color: var(--color-secondary);
  --accent: var(--color-link);
  --bg-card: var(--background-secondary);
  --border: var(--border-primary);
  --card-shadow: var(--shadow-light);

  --bg-input: #f8fafc;
  --border-radius: 1rem;

  font-family: inherit;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  padding-bottom: 5rem;
  color: var(--p-color);
}

/* --- HEADER --- */
.header-section {
  margin-bottom: 2rem;
  text-align: center;
}

.badge-container {
  display: flex;
  justify-content: center;
  margin-bottom: 0.8rem;
}

.badge {
  background: var(--background-accent, #eff6ff);
  color: var(--color-accent, #2563eb);
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  letter-spacing: 0.5px;
  border: 1px solid var(--border-highlight);
}

.hero-title {
  font-size: 2.2rem;
  font-weight: 850;
  color: var(--p-color);
  margin: 0 0 0.5rem;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 1rem;
  color: var(--s-color);
  line-height: 1.5;
  max-width: 600px;
  margin: 0 auto;
  font-style: italic;
}

.icon-quote {
  color: var(--color-tertiary);
  margin-right: 4px;
}

/* --- BENTO STACK --- */
.bento-stack {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.bento-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  box-shadow: var(--card-shadow);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.card-title-text {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--p-color);
}

.header-right {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.cap-badge {
  font-size: 0.75rem;
  font-weight: 700;
  color: #ea580c;
  background: #fff7ed;
  padding: 2px 6px;
  border-radius: 4px;
}

/* TAGS */
.tag {
  font-size: 0.7rem;
  font-weight: 800;
  padding: 4px 8px;
  border-radius: 6px;
  text-transform: uppercase;
}

.tag--green {
  background: #dcfce7;
  color: #166534;
}

.tag--blue {
  background: #dbeafe;
  color: #1e40af;
}

.tag--orange {
  background: #ffedd5;
  color: #9a3412;
}


.rows-container {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.workout-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  padding: 0.85rem;
  border-radius: 0.75rem;
  border: 1px solid var(--border-tertiary);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
  transition: border-color 0.2s;
}

.workout-row:focus-within {
  border-color: var(--accent);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.1);
}

.row-content {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.row-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.row-name {
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--p-color);
}

.btn-info {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: var(--color-tertiary);
  font-size: 1rem;
  transition: color 0.2s;
}

.btn-info:hover {
  color: var(--accent);
}

.row-meta {
  display: flex;
  gap: 0.5rem;
}

.meta-pill {
  font-size: 0.75rem;
  color: var(--s-color);
  background: #f1f5f9;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: 600;
}


.check-circle {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #cbd5e1;
  opacity: 0.6;
}

/* --- STRENGTH SPECIFIC --- */
.desktop-only {
  display: none;
}


.strength-inputs {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.stat-group {
  text-align: center;
  min-width: 35px;
}

.stat-val {
  font-weight: 800;
  font-size: 1.1rem;
  color: var(--p-color);
}

.stat-lbl {
  font-size: 0.6rem;
  color: var(--s-color);
  text-transform: uppercase;
  display: block;
}

.input-container {
  position: relative;
  width: 90px;
}

.input-container input {
  width: 100%;
  padding: 0.5rem 1.8rem 0.5rem 0.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--accent);
  text-align: center;
  border: 1px solid var(--border);
  border-radius: 8px;
  outline: none;
  background: var(--bg-input);
  transition: all 0.2s;
}

.input-container input:focus {
  background: #ffffff;
  border-color: var(--accent);
}

.unit {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--s-color);
}

@media (min-width: 768px) {
  .desktop-only {
    display: flex;
  }

  .grid-headers {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem 0.5rem;
    border-bottom: 2px solid #f1f5f9;
    margin-bottom: 0.5rem;
    font-size: 0.7rem;
    font-weight: 800;
    color: var(--s-color);
    letter-spacing: 0.5px;
  }

  .headers-right {
    display: grid;
    grid-template-columns: 50px 50px 100px;
    gap: 1rem;
    text-align: center;
  }

  .strength-inputs {
    display: grid !important;
    grid-template-columns: 50px 50px 100px;
    gap: 1rem;
    align-items: center;
    justify-content: flex-end;
  }

  .mobile-only {
    display: none;
  }
}

@media (max-width: 767px) {
  .strength-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }

  .strength-inputs {
    width: 100%;
    justify-content: space-between;
    background: #f8fafc;
    padding: 0.6rem;
    border-radius: 8px;
  }

  .input-container input {
    background: #ffffff;
  }
}

/* --- METCON CONTENT --- */
.metcon-content {
  display: flex;
  align-items: baseline;
  gap: 0.8rem;
}

.reps-big {
  font-size: 1.1rem;
  font-weight: 800;
  color: #c2410c;
  min-width: 25px;
}

.note-box {
  margin-top: 0.5rem;
  padding: 0.75rem;
  background: #fff7ed;
  border-radius: 8px;
  font-size: 0.85rem;
  color: #9a3412;
  font-weight: 500;
}


.notes-area {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  background: var(--bg-input);
  font-family: inherit;
  resize: vertical;
}

.notes-area:focus {
  outline: none;
  border-color: var(--color-tertiary);
  background: #fff;
}


.actions-row {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.btn {
  padding: 0.85rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  flex: 1;
  transition: transform 0.2s;
  border: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn--ghost {
  background: transparent;
  color: var(--p-color);
  border: 1px solid var(--border);
}


.btn--primary {
  position: relative;
  overflow: hidden;
  color: #ffffff;
  background: var(--color-link, #2563eb);
}

.btn--primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: #94a3b8;
}

.btn-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.25), transparent);
  transform: translateX(-100%);
  transition: transform 0.5s ease;
}

.btn--primary:hover:not(:disabled) .btn-glow {
  transform: translateX(100%);
}


.exercise-modal {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h4 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 850;
}

.btn-icon-close {
  background: #f1f5f9;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
}

.modal-label {
  font-size: 0.7rem;
  font-weight: 800;
  color: var(--accent);
  letter-spacing: 1px;
}

.btn--full {
  width: 100%;
}



.exercise-modal {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 100%;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.modal-header h4 {
  margin: 0;
  font-size: 1.4rem;
  font-weight: 800;
  color: #0f172a;
  text-transform: capitalize;
}

.btn-icon-close {
  background: #f1f5f9;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  color: #64748b;
  display: grid;
  place-items: center;
}

.modal-body {
  flex: 1;
}

.modal-label {
  font-size: 0.75rem;
  font-weight: 900;
  color: #2563eb;
  letter-spacing: 1px;
  text-transform: uppercase;
  display: block;
  margin-bottom: 0.5rem;
}

.modal-body p {
  font-size: 1rem;
  line-height: 1.6;
  color: #334155;
}


.btn-modal-action {
  width: 100%;
  background: #0f172a;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 0.75rem;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  margin-top: auto;
}

.btn-modal-action:hover {
  background: #1e293b;
}
</style>