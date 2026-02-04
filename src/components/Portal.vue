<script setup>
const props = defineProps({
  handleCloseModal: {
    type: Function,
    required: true,
  },
})
</script>

<template>
  <Teleport to="body">
    <div class="portal-container">
      <div
        class="portal-underlay"
        role="button"
        tabindex="0"
        aria-label="Close dialog"
        @click="props.handleCloseModal()"
        @keydown.enter="props.handleCloseModal()"
        @keydown.space.prevent="props.handleCloseModal()"
      ></div>

      <div class="portal-content" role="dialog" aria-modal="true" @click.stop>
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.portal-container {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: grid;
  place-items: center;
  padding: 1rem;
}

.portal-underlay {
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  animation: fadeIn 0.2s ease-out;
}

.portal-content {
  position: relative;
  z-index: 10000;
  
  width: 100%;
  max-width: 500px; 
  max-height: 85vh;
  overflow-y: auto;

  
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 1.25rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  
  display: flex;
  flex-direction: column;
  gap: 1rem;
  

  animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}


@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px) scale(0.96); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.portal-content::-webkit-scrollbar {
  width: 6px;
}
.portal-content::-webkit-scrollbar-track {
  background: transparent;
}
.portal-content::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 99px;
}
.portal-content::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>