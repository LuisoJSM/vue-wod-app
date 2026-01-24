<script setup>

</script>

<template>
  <div class="layout-wrapper">

    <header class="layout-header">
      <div class="header-inner">
        <div class="logo">
          ⚡ WOD APP
        </div>
      </div>
    </header>

    <main class="layout-main">
      <slot />
    </main>

    <footer class="layout-footer">
      <div class="footer-git">
        <a href="https://github.com/luisojsm" target="_blank" rel="noopener noreferrer"
          aria-label="GitHub de Luis Soriano">
          <i class="fa-brands fa-github"></i>
          <span>Made by Luis J. Soriano</span>
        </a>
      </div>

      <p>WOD Program v1.0</p>
    </footer>


  </div>
</template>

<style scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--background-primary);
  color: var(--color-primary);
}

.layout-header {
  position: sticky;
  top: 0;
  z-index: 50;
  height: 60px;
  background: color-mix(in srgb, var(--background-primary), transparent 15%);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-primary);
}

.header-inner {
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;
  padding: 0 1.25rem;
  display: flex;
  align-items: center;
}

.logo {
  font-weight: 800;
  font-size: 1.1rem;
  letter-spacing: -0.5px;
  font-family: 'Manrope', sans-serif;
}

.layout-main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.layout-footer {
  padding: 2rem;
  text-align: center;
  font-size: 0.8rem;
  color: var(--color-tertiary);
  border-top: 1px solid var(--border-tertiary);
}

.footer-git {
  margin-bottom: 0.5rem;
}

.footer-git a {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-git a:hover {
  color: var(--color-primary);
}

.footer-git i {
  font-size: 1rem;
}

</style>