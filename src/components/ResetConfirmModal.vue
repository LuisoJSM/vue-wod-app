<script setup>
const props = defineProps({
  title: { type: String, default: 'Reset program?' },
  message: {
    type: String,
    default: 'This will delete your saved progress. This action cannot be undone.'
  },
  confirmText: { type: String, default: 'Yes, reset' },
  cancelText: { type: String, default: 'Cancel' },
  onConfirm: Function,
  onCancel: Function
})
</script>

<template>
  <div class="modal-overlay" @click.self="props.onCancel && props.onCancel()">
    <div class="modal-card" role="dialog" aria-modal="true" aria-label="Reset confirmation">
      <h3 class="modal-title">{{ title }}</h3>
      <p class="modal-message">{{ message }}</p>

      <div class="modal-actions">
        <button class="btn btn--ghost" @click="props.onCancel && props.onCancel()">
          {{ cancelText }}
        </button>

        <button class="btn btn--danger" @click="props.onConfirm && props.onConfirm()">
          {{ confirmText }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 1.25rem;
  background: rgba(15, 23, 42, 0.55);
  backdrop-filter: blur(6px);
  z-index: 999;
}

.modal-card {
  width: 100%;
  max-width: 520px;
  background: #ffffff;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 18px;
  box-shadow: 0 18px 40px rgba(0,0,0,0.25);
  padding: 1.25rem 1.25rem 1rem;
  transform-origin: center;
}

.modal-title {
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: #0f172a;
}

.modal-message {
  margin: 0 0 1rem;
  color: #475569;
  line-height: 1.5;
  font-weight: 600;
}

.modal-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
}

.btn {
  border: none;
  border-radius: 999px;
  padding: 0.65rem 1rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 0.78rem;
  cursor: pointer;
  transition: transform 140ms ease, box-shadow 140ms ease, opacity 140ms ease;
}

.btn:active {
  transform: translateY(0);
}

.btn--ghost {
  background: #f1f5f9;
  color: #0f172a;
}

.btn--ghost:hover {
  opacity: 0.95;
  transform: translateY(-1px);
  box-shadow: 0 10px 22px rgba(0,0,0,0.12);
}

.btn--danger {
  background: #dc2626;
  color: #f9fafb;
}

.btn--danger:hover {
  opacity: 0.95;
  transform: translateY(-1px);
  box-shadow: 0 12px 26px rgba(220,38,38,0.35);
}
</style>
