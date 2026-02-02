<script setup>
import { workoutProgram } from '../utils';


const props = defineProps({
  handleSelectedWorkout: Function
})

const workoutTypes = ["Push", "Pull", "Leg"];
</script>

<template>
    <section id="grid">
        <button disabled="" @click="() => handleSelectedWorkout(workoutIdx)"
            v-for="(workout, workoutIdx) in Object.keys(workoutProgram)" 
            :key="workoutIdx"
            class="workout-card"
        >
            <div class="card-header">
                <span class="day-label">Day {{ workoutIdx + 1 }}</span>
                
                <div class="icon-wrapper">
                    <i class="fa-solid fa-dumbbell" v-if="workoutIdx % 3 === 0"></i>
                    <i class="fa-solid fa-weight-hanging" v-if="workoutIdx % 3 === 1"></i>
                    <i class="fa-solid fa-bolt" v-if="workoutIdx % 3 === 2"></i>
                </div>
            </div>

            <h3 class="workout-title">{{ workoutTypes[workoutIdx % 3] }}</h3>
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
    #grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (min-width: 900px) {
    #grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}

.workout-card {
    position: relative;
    width: 100%;
    text-align: left;
    padding: 1.25rem;
    border-radius: 16px;
    border: 1px solid var(--border-tertiary, #e5e7eb);
    

    background: linear-gradient(145deg, var(--background-secondary, #fff), var(--background-muted, #f9fafb));
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}


.workout-card:hover {
    transform: translateY(-4px);
    border-color: var(--color-primary, #3b82f6);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}


.card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.day-label {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    color: var(--color-secondary, #6b7280);
    opacity: 0.8;
}


.icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--background-muted, #f3f4f6);
    color: var(--color-primary, #3b82f6);
    font-size: 1.1rem;
    transition: background-color 0.2s ease, transform 0.2s ease;
}

.workout-card:hover .icon-wrapper {
    background-color: var(--color-primary, #3b82f6);
    color: white;
    transform: rotate(15deg);
}

.workout-title {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--color-heading, #111827);
    letter-spacing: -0.5px;
}


.workout-card:disabled {
  cursor: not-allowed;
  opacity: 0.55;
  filter: grayscale(0.6);
  box-shadow: none;
  transform: none;
  border-color: var(--border-tertiary);
}


.workout-card:disabled:hover {
  transform: none;
  border-color: var(--border-tertiary);
  box-shadow: none;
}


.workout-card:disabled .icon-wrapper {
  background-color: var(--background-muted);
  color: var(--color-tertiary);
  transform: none;
}

</style>