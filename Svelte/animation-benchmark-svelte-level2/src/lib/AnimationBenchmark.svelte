<script>
  import { onMount, onDestroy } from 'svelte'

  let modal = null
  let styleElement = null

  const researchInfo = {
    title: "About This Research",
    content: [
      "This study experimentally compares animation rendering performance across React, Vue.js, Svelte, and Angular frameworks.",
      "A single animated UI element is used under identical controlled conditions to isolate framework-level rendering differences.",
      "Performance metrics are collected using Chrome DevTools including FPS, dropped frames, paint time, compositing cost, CPU usage, and bundle size.",
      "The study aims to provide empirical evidence to guide developers in selecting frameworks for animation-heavy landing pages.",
    ]
  }

  const learnMore = {
    title: "Research Methodology",
    content: [
      "Independent Variable: JavaScript Framework (React, Vue.js, Svelte, Angular)",
      "Dependent Variables: Average FPS, Dropped Frames, Paint Time, Compositing Time, CPU Usage, Bundle Size",
      "Controlled Variables: Same CSS animation, same browser (Chrome), same hardware, same animation duration and easing",
      "Data Collection: Chrome DevTools Performance Panel — minimum 30 recordings per framework",
      "Analysis: Statistical comparison using averages, standard deviation and cross-framework performance ranking",
    ]
  }

  const openResearchModal = () => { modal = researchInfo }
  const openLearnMoreModal = () => { modal = learnMore }
  const closeModal = () => { modal = null }
  const handleOverlayKeydown = (e) => { if (e.key === 'Escape') closeModal() }

  onMount(() => {
    styleElement = document.createElement('style')
    styleElement.id = 'dynamic-animations'
    document.head.appendChild(styleElement)

    styleElement.textContent = `
      @keyframes dotPulse {
        0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
        25% { transform: scale(1.2) rotate(90deg); opacity: 0.8; }
        50% { transform: scale(1.5) rotate(180deg); opacity: 0.6; }
        75% { transform: scale(1.2) rotate(270deg); opacity: 0.8; }
      }
      @keyframes ringPulse {
        0%, 100% { transform: scale(1); opacity: 0.2; }
        50% { transform: scale(1.1); opacity: 0.5; }
      }
      @keyframes logoPulseStagger {
        0%   { transform: rotate(0deg) scale(1); filter: brightness(1); }
        25%  { transform: rotate(90deg) scale(1.15); filter: brightness(1.2); }
        50%  { transform: rotate(180deg) scale(1.3); filter: brightness(1.4); }
        75%  { transform: rotate(270deg) scale(1.15); filter: brightness(1.2); }
        100% { transform: rotate(360deg) scale(1); filter: brightness(1); }
      }
      @keyframes modalSlideUp {
        from { transform: translateY(50px); opacity: 0; }
        to   { transform: translateY(0); opacity: 1; }
      }
      .brand-dot { animation: dotPulse 2s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
      .ring-1 { animation: ringPulse 3s cubic-bezier(0.4, 0, 0.2, 1) infinite 0s; }
      .ring-2 { animation: ringPulse 3s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.5s; }
      .ring-3 { animation: ringPulse 3s cubic-bezier(0.4, 0, 0.2, 1) infinite 1s; }
      .animated-logo { animation: logoPulseStagger 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite; }
      .modal-box { animation: modalSlideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
      .btn-primary { transition: background 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1); }
      .btn-secondary { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
      .nav-links button { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
    `
  })

  onDestroy(() => {
    if (styleElement && styleElement.parentNode) styleElement.remove()
  })
</script>

<div class="page">
  {#if modal}
    <dialog class="modal-overlay" aria-labelledby="modal-title"
      on:click={closeModal} on:keydown={handleOverlayKeydown} open>
      <div class="modal-box" on:click|stopPropagation>
        <div class="modal-header">
          <h2 id="modal-title">{modal.title}</h2>
          <button class="modal-close" on:click={closeModal} aria-label="Close modal">✕</button>
        </div>
        <div class="modal-body">
          {#each modal.content as item, index (index)}
            <div class="modal-item">
              <span class="modal-dot">▸</span>
              <p>{item}</p>
            </div>
          {/each}
        </div>
      </div>
    </dialog>
  {/if}

  <nav class="navbar">
    <div class="brand">
      <span class="brand-dot"></span>
      AnimBench
    </div>
    <div class="level-badge">Level 2 — Staggered + Cubic-bezier</div>
  </nav>

  <section class="hero">
    <div class="hero-left">
      <p class="badge">🔬 Research Project — SUSL</p>
      <h1>Animation <span class="highlight">Performance</span> Benchmark</h1>
      <p class="level-tag">⚙ Level 2: Staggered animations · Cubic-bezier easing · Enhanced hover effects</p>
      <p class="hero-sub">
        A controlled experimental study comparing animation rendering
        performance across React, Vue.js, Svelte and Angular frameworks.
      </p>
      <div class="hero-buttons">
        <button class="btn-primary" on:click={openResearchModal}>View Research</button>
        <button class="btn-secondary" on:click={openLearnMoreModal}>Learn More</button>
      </div>
      <div class="hero-stats">
        <div class="stat"><span class="stat-number">4</span><span class="stat-label">Frameworks</span></div>
        <div class="stat"><span class="stat-number">7</span><span class="stat-label">Metrics</span></div>
        <div class="stat"><span class="stat-number">30+</span><span class="stat-label">Test Runs</span></div>
      </div>
    </div>
    <div class="hero-right">
      <div class="logo-wrapper">
        <div class="ring ring-1"></div>
        <div class="ring ring-2"></div>
        <div class="ring ring-3"></div>
        <div class="animated-logo"></div>
      </div>
      <p class="logo-label">⚡ Animated Test Element</p>
    </div>
  </section>

  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand"><span class="brand-dot"></span>AnimBench</div>
      <p>IS 8101 Research Project in Information Systems</p>
      <p>Department of Computing & Information Systems</p>
      <p>Sabaragamuwa University of Sri Lanka</p>
      <p class="footer-copy">© 2025 S. Niluxshan — 20APC4681</p>
    </div>
  </footer>
</div>

<style>
  .level-tag {
    display: inline-block;
    background: #eff6ff;
    color: #2563eb;
    border: 1px solid #bfdbfe;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 0.83rem;
    font-weight: 600;
    margin-bottom: 18px;
  }
  .level-badge {
    background: #2563eb;
    color: white;
    padding: 6px 18px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 700;
  }
</style>
