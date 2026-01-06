<script setup>
// Data
const highlights = [
  { title: "Strength + Skill", desc: "Weightlifting & calisthenics foundations.", icon: "💪" },
  { title: "Simple Tracking", desc: "Log weights and movement quality, hassle-free.", icon: "📈" },
  { title: "Progressive Plan", desc: "Clear structure to advance every single week.", icon: "🚀" },
]

const stats = [
  { label: "Total workouts", value: "29" },
  { label: "Weeks", value: "4–6" },
  { label: "Sessions / week", value: "4–5" },
]
</script>

<template>
  <section id="welcome" class="welcome">
    <div class="welcome__container">
      <div class="bento-grid">
        <!-- MAIN CARD -->
        <article class="bento-card main-card">
          <div class="badge-container">
            <span class="badge">WOD-ready program</span>
          </div>

          <h1 class="hero-title">
            29 Workouts.<br />
            One clear plan.<br />
            <span class="text-gradient">Better every week.</span>
          </h1>

          <p class="hero-subtitle">
            The perfect mix of strength, calisthenics, and weightlifting.
            Don’t overthink — just show up and train.
          </p>

          <div class="hero-actions">
            <button class="btn btn--primary" type="button">
              Start Now
              <span class="btn-glow" aria-hidden="true"></span>
            </button>

            <button class="btn btn--ghost" type="button">View Program</button>
          </div>

          <div class="stats-row">
            <div v-for="s in stats" :key="s.label" class="stat-item">
              <span class="stat-value">{{ s.value }}</span>
              <span class="stat-label">{{ s.label }}</span>
            </div>
          </div>
        </article>

        <!-- VISUAL CARD -->
        <article class="bento-card visual-card" aria-hidden="true">
          <div class="glow-bg"></div>

          <div class="phone-mockup">
            <div class="phone-header">
              <div class="dot red"></div>
              <div class="dot yellow"></div>
              <span class="phone-title">Session 01</span>
            </div>

            <div class="phone-body">
              <div class="workout-row">
                <div class="row-left">
                  <span class="tag tag--green">Warm-up</span>
                  <p>Mobility + Activation</p>
                </div>
                <div class="check-circle"></div>
              </div>

              <div class="workout-row">
                <div class="row-left">
                  <span class="tag tag--blue">Strength</span>
                  <p>Front Squat 5×3 <span class="sub-text">@ 75%</span></p>
                </div>
                <div class="check-circle"></div>
              </div>

              <div class="workout-row active">
                <div class="row-left">
                  <span class="tag tag--orange">Metcon</span>
                  <p>8-min AMRAP</p>
                </div>
                <div class="check-circle active"></div>
              </div>
            </div>
          </div>
        </article>

        <!-- GOALS -->
        <article class="bento-card info-card">
          <h2 class="card-title">Program Goals</h2>

          <ul class="benefits-list">
            <li>
              <svg
                class="icon-check"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Follow a plan with proven structure.</span>
            </li>

            <li>
              <svg
                class="icon-check"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Feel athletic, strong, and healthy.</span>
            </li>

            <li>
              <svg
                class="icon-check"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Mix barbell work with gymnastics skills.</span>
            </li>
          </ul>
        </article>

        <!-- HIGHLIGHTS -->
        <article class="bento-card info-card">
          <h2 class="card-title">What You'll Train</h2>

          <div class="highlights-grid">
            <div v-for="h in highlights" :key="h.title" class="highlight-item">
              <div class="highlight-icon">{{ h.icon }}</div>
              <div>
                <h3 class="highlight-title">{{ h.title }}</h3>
                <p class="highlight-desc">{{ h.desc }}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.welcome {
  /* Local aliases */
  --p-color: var(--color-primary);
  --s-color: var(--color-secondary);
  --accent: var(--color-link);

  --bg-card: var(--background-secondary);
  --border: var(--border-primary);
  --card-shadow: var(--shadow-light);

  padding: 2rem 1rem;
  font-family: inherit;
}

.welcome__container {
  max-width: 1100px;
  margin: 0 auto;
}

/* --- BENTO GRID --- */
.bento-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;
  }

  .visual-card {
    grid-column: 2;
    grid-row: 1;
  }

  .main-card {
    grid-column: 1;
    grid-row: 1;
  }
}

@media (min-width: 900px) {
  .bento-grid {
    grid-template-columns: 1.2fr 0.8fr;
  }
}

/* --- CARDS BASE --- */
.bento-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--border-radius-large, 1rem);
  padding: 2rem;
  position: relative;
  overflow: hidden;
  box-shadow: var(--card-shadow);
}

/* --- 1) MAIN CARD --- */
.main-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.badge {
  background: var(--background-accent, #eff6ff);
  color: var(--color-accent, #2563eb);
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  border: 1px solid var(--border-highlight);
  letter-spacing: 0.5px;
}

.hero-title {
  font-size: 2.5rem;
  line-height: 1.08;
  font-weight: 850;
  color: var(--p-color);
  margin: 1.5rem 0 1rem;
  letter-spacing: -0.02em;
}

.text-gradient {
  background: var(--color-gradient, linear-gradient(135deg, var(--gradient-start), var(--gradient-end)));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.125rem;
  color: var(--s-color);
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 45ch;
}

/* Buttons */
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
}

.btn {
  padding: 0.85rem 1.5rem;
  border-radius: var(--border-radius-small, 0.75rem);
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.btn--primary {
  position: relative;
  overflow: hidden;
  color: #ffffff;
  background: var(--accent);
  border: 1px solid color-mix(in srgb, var(--accent) 65%, #000);
}

.btn--primary:hover {
  transform: translateY(-1px);
  opacity: 0.95;
}

.btn-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.22), transparent);
  transform: translateX(-100%);
  transition: transform 0.5s ease;
}

.btn--primary:hover .btn-glow {
  transform: translateX(100%);
}

.btn--ghost {
  background: transparent;
  color: var(--p-color);
  border: 1px solid var(--border);
  box-shadow: none;
}

.btn--ghost:hover {
  opacity: 0.9;
}

/* Stats */
.stats-row {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
}

.stat-value {
  display: block;
  font-size: 1.5rem;
  font-weight: 850;
  color: var(--p-color);
}

.stat-label {
  font-size: 0.85rem;
  color: var(--s-color);
  font-weight: 600;
}

/* --- 2) VISUAL CARD --- */
.visual-card {
  background: var(--background-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
}

.glow-bg {
  position: absolute;
  inset: -30%;
  background: radial-gradient(circle at 50% 50%, var(--border-highlight), transparent 60%);
  opacity: 0.28;
  z-index: 0;
  animation: pulse 8s ease-in-out infinite alternate;
}

@keyframes pulse {
  0% { transform: scale(1); }
  100% { transform: scale(1.08); }
}

.phone-mockup {
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 1.25rem;
  padding: 1.25rem;
  width: 100%;
  max-width: 320px;
  box-shadow: var(--shadow-dark);
  transform: rotateY(-5deg) rotateX(2deg);
  transition: transform 0.4s ease;
}

.visual-card:hover .phone-mockup {
  transform: rotateY(0) rotateX(0) translateY(-5px);
}

@media (prefers-color-scheme: dark) {
  .phone-mockup {
    background: rgba(15, 23, 42, 0.7);
    border-color: rgba(255, 255, 255, 0.12);
  }
  .workout-row {
    background: color-mix(in srgb, var(--background-primary) 70%, #0b1220) !important;
    border-color: var(--border-primary) !important;
  }
  .row-left p {
    color: var(--color-primary) !important;
  }
}

.phone-header {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 1.5rem;
}

.dot { width: 10px; height: 10px; border-radius: 50%; }
.red { background: var(--color-error, #ef4444); }
.yellow { background: var(--color-warning, #f59e0b); }
.phone-title {
  margin-left: auto;
  font-size: 0.75rem;
  font-weight: 800;
  color: var(--color-muted, #64748b);
  text-transform: uppercase;
}

.workout-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  padding: 0.75rem;
  margin-bottom: 0.75rem;
  border-radius: 0.75rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.03);
  border: 1px solid var(--border-tertiary);
}

.workout-row.active {
  border-color: var(--accent);
  box-shadow: var(--shadow-light);
}

.row-left p {
  margin: 0;
  font-weight: 700;
  font-size: 0.9rem;
  color: #111827;
  margin-top: 0.25rem;
}

.sub-text {
  color: var(--color-muted, #64748b);
  font-weight: 600;
  font-size: 0.8rem;
}

.tag {
  font-size: 0.65rem;
  font-weight: 800;
  padding: 2px 6px;
  border-radius: 6px;
  text-transform: uppercase;
}

.tag--green { background: #dcfce7; color: #166534; }
.tag--blue  { background: #dbeafe; color: #1e40af; }
.tag--orange { background: #ffedd5; color: #9a3412; }

.check-circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid var(--color-muted, #94a3b8);
  opacity: 0.5;
}

.check-circle.active {
  border-color: var(--accent);
  background: var(--accent);
  opacity: 1;
  position: relative;
}

.check-circle.active::after {
  content: "";
  position: absolute;
  width: 6px;
  height: 6px;
  background: white;
  border-radius: 50%;
  top: 5px;
  left: 5px;
}

/* --- 3 & 4) INFO CARDS --- */
.card-title {
  font-size: 1.25rem;
  font-weight: 800;
  margin-bottom: 1.25rem;
  color: var(--p-color);
}

.benefits-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1rem;
}

.benefits-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--s-color);
  font-size: 0.95rem;
  font-weight: 600;
}

.icon-check {
  color: var(--accent);
  flex-shrink: 0;
}

/* Highlights */
.highlights-grid {
  display: grid;
  gap: 1.25rem;
}

.highlight-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.highlight-icon {
  background: var(--background-muted);
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  font-size: 1.2rem;
  border: 1px solid var(--border);
  color: var(--p-color);
}

.highlight-title {
  font-size: 0.95rem;
  font-weight: 800;
  margin: 0;
  color: var(--p-color);
}

.highlight-desc {
  margin: 0.2rem 0 0 0;
  font-size: 0.85rem;
  color: var(--s-color);
  line-height: 1.45;
}

@media (min-width: 768px) {
  .hero-title { font-size: 3rem; }
  .bento-card { padding: 2.5rem; }
}
</style>
