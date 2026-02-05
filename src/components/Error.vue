<template>
  <div class="alert">
    <i class="fa-solid fa-triangle-exclamation"></i>
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<style scoped>
.alert {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  padding: 0.85rem 1rem;
  margin-bottom: 1rem;
  margin-top:2rem;

  border-radius: 0.75rem;
  border: 1px solid #fecaca;

  background: #fee2e2;
  color: #991b1b;

  font-weight: 800;
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-align: center;

  box-shadow: 0 6px 14px rgba(220, 38, 38, 0.15);

  /* 🔑 transiciones suaves */
  transition: opacity 0.35s ease;
  animation: alert-in 0.25s ease;
}

.alert i {
  font-size: 1rem;
}

/* Entrada */
@keyframes alert-in {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
