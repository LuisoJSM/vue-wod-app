<script setup>
const props = defineProps({
  handleCloseModal: {
    type: Function,
    required: true,
  },
})
</script>

<template>
  <Teleport to="#portal">
    <div class="portal-container">
      <!-- Underlay: cierra -->
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
  z-index: 1001;

  display: grid;
  place-items: center;

  padding: 1rem; 
}

.portal-underlay {
  position: absolute;
  inset: 0;

  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}


.portal-content {
  position: absolute;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 600px;
  max-width: 90vw;
  max-height: 80vh;

  overflow: auto;

  padding: 2rem 1.25rem 1.25rem;

  border-radius: var(--border-radius-large);
  border: 1px solid var(--border-primary);

  background: linear-gradient(180deg, var(--background-secondary), var(--background-muted));
  box-shadow: var(--shadow-dark);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}


.portal-content::-webkit-scrollbar {
  width: 10px;
}
.portal-content::-webkit-scrollbar-thumb {
  background: color-mix(in srgb, var(--border-primary), transparent 45%);
  border-radius: 999px;
}

</style>
