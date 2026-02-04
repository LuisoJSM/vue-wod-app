<script setup>
import { workoutProgram } from '../utils';

const props = defineProps({
  handleSelectedWorkout: Function,
  firstIncompleteWorkoutIndex: Number
})

function isLocked(index) {
  if (props.firstIncompleteWorkoutIndex === -1) return false;
  return index > props.firstIncompleteWorkoutIndex;
}

function isCompleted(index) {
  if (props.firstIncompleteWorkoutIndex === -1) return true;
  return index < props.firstIncompleteWorkoutIndex;
}


function getTheme(title) {
  const t = title.toLowerCase();


  if (t.includes('leg') || t.includes('squat') || t.includes('base') || t.includes('hinge') || t.includes('posterior')) {
    return { icon: 'fa-drumstick-bite', class: 'theme-leg' };
  }

  if (t.includes('press') || t.includes('push') || t.includes('bench') || t.includes('overhead') || t.includes('jerk')) {
    return { icon: 'fa-dumbbell', class: 'theme-push' };
  }

  if (t.includes('pull') || t.includes('row') || t.includes('back')) {
    return { icon: 'fa-weight-hanging', class: 'theme-pull' };
  }

  if (t.includes('clean') || t.includes('snatch') || t.includes('power') || t.includes('fast')) {
    return { icon: 'fa-bolt', class: 'theme-power' };
  }
  return { icon: 'fa-fire', class: 'theme-fire' };
}
</script>

<template>
  <section id="grid">
    <button v-for="(workoutData, key) in workoutProgram" :key="key" :disabled="isLocked(Number(key))"
      @click="() => handleSelectedWorkout(Number(key))" class="workout-card" :class="[
        getTheme(workoutData.title).class,
        {
          'card-completed': isCompleted(Number(key)),
          'card-current': Number(key) === firstIncompleteWorkoutIndex
        }
      ]">
      <div class="card-header">
        <span class="day-label">Day {{ Number(key) + 1 }}</span>

        <div class="icon-wrapper">
          <i class="fa-solid" :class="getTheme(workoutData.title).icon"></i>
        </div>
      </div>

      <div class="card-content">
        <h3 class="workout-title">{{ workoutData.title }}</h3>
      </div>

      <div class="check-icon" v-if="isCompleted(Number(key))">
        <i class="fa-solid fa-circle-check"></i>
      </div>
    </button>
  </section>
</template>

<style scoped>
#grid {
  width: 100%;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

@media (min-width: 640px) {
  #grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 900px) {
  #grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.workout-card {
  position: relative;
  width: 100%;
  text-align: left;
  padding: 1.5rem;
  border-radius: 20px;
  border: 1px solid var(--border-tertiary, #e5e7eb);
  background: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 140px;
  gap: 1rem;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.workout-card:not(:disabled):hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 20px -3px rgba(0, 0, 0, 0.1);
}


.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.day-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 800;
  color: #9ca3af;
}

.card-content {
  margin-top: auto;
}

.workout-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 850;
  line-height: 1.1;
  color: #1f2937;
  letter-spacing: -0.5px;
}


.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 14px;
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.workout-card:not(:disabled):hover .icon-wrapper {
  transform: scale(1.1) rotate(5deg);
}





.theme-leg .icon-wrapper {
  background: #ccfbf1;
  color: #0d9488;
}

.theme-leg:not(:disabled):hover {
  border-color: #0d9488;
}


.theme-push .icon-wrapper {
  background: #dbeafe;
  color: #2563eb;
}

.theme-push:not(:disabled):hover {
  border-color: #2563eb;
}


.theme-pull .icon-wrapper {
  background: #fef3c7;
  color: #d97706;
}

.theme-pull:not(:disabled):hover {
  border-color: #d97706;
}


.theme-power .icon-wrapper {
  background: #f3e8ff;
  color: #9333ea;
}

.theme-power:not(:disabled):hover {
  border-color: #9333ea;
}


.theme-fire .icon-wrapper {
  background: #fee2e2;
  color: #dc2626;
}

.theme-fire:not(:disabled):hover {
  border-color: #dc2626;
}



.card-completed {
  background: linear-gradient(145deg, #ecfdf5, #d1fae5) !important;
  border-color: #10b981 !important;
}

.card-completed .day-label {
  color: #059669;
}

.card-completed .workout-title {
  color: #064e3b;
}

.card-completed .icon-wrapper {
  background: rgba(255, 255, 255, 0.6);
  color: #059669;
}

.check-icon {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  color: #10b981;
  opacity: 0.3;
}


.card-current {
  background: white;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.4);
  border-color: #3b82f6 !important;
}


.workout-card:disabled {
  cursor: not-allowed;
  opacity: 0.5;
  background: #f3f4f6;
  border-color: transparent;
  filter: grayscale(1);
}
</style>