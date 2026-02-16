<script setup>
const trainingTypes = [
  { name: "Strength", icon: "fa-dumbbell", type: "strength" },
  { name: "Leg Day", icon: "fa-drumstick-bite", type: "legs" },
  { name: "Power", icon: "fa-bolt", type: "power" },
  { name: "Metcon", icon: "fa-fire", type: "metcon" }
]
</script>

<template>
  <ul class="legend">
    <li v-for="item in trainingTypes" :key="item.type" class="legend-item">
      <div class="icon-box">
        <i class="fa-solid" :class="item.icon"></i>
      </div>
      <span class="legend-label">{{ item.name }}</span>
    </li>
  </ul>
</template>

<style scoped>
.legend {
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: center;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}


@media (max-width: 640px) {
  .legend {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem 1rem;
  }
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 600;
  font-size: 0.95rem;
  color: #334155;
  justify-content: center;
}

.icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: #f1f5f9;
  font-size: 1.4rem;
  color: #0f172a;
  transition: transform 0.2s ease;
}

.legend-item:hover .icon-box {
  transform: scale(1.1);
}
</style>
