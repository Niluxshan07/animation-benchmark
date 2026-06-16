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
        0%, 100% { transform: scale(1); opacity: 1; }
        33%  { transform: scale(1.25); opacity: 0.85; }
        66%  { transform: scale(1.4); opacity: 0.7; }
      }
      @keyframes ringPulse {
        0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.2; }
        50% { transform: scale(1.08) rotate(8deg); opacity: 0.45; }
      }
      @keyframes logoPulse {
        0%   { transform: rotate(0deg) scale(1); opacity: 1; }
        30%  { transform: rotate(108deg) scale(1.15); opacity: 0.85; }
        60%  { transform: rotate(216deg) scale(1.3); opacity: 0.65; }
        100% { transform: rotate(360deg) scale(1); opacity: 1; }
      }
      @keyframes modalIn {
        from { transform: scale(0.88) translateY(10px); opacity: 0; }
        60%  { transform: scale(1.02) translateY(-2px); opacity: 1; }
        to   { transform: scale(1) translateY(0); opacity: 1; }
      }
      .brand-dot {
        animation: dotPulse 2s ease-in-out infinite;
        will-change: transform, opacity;
      }
      .ring-1 {
        animation: ringPulse 3.2s ease-in-out infinite 0s;
        will-change: transform, opacity;
      }
      .ring-2 {
        animation: ringPulse 3.2s ease-in-out infinite 0.55s;
        will-change: transform, opacity;
      }
      .ring-3 {
        animation: ringPulse 3.2s ease-in-out infinite 1.1s;
        will-change: transform, opacity;
      }
      .animated-logo {
        animation: logoPulse 2.2s ease-in-out infinite;
        will-change: transform, opacity;
        transition: transform 0.4s ease-in-out;
      }
      .modal-box { animation: modalIn 0.45s ease-out; }
      .btn-primary  { transition: background 0.25s ease, transform 0.2s ease, box-shadow 0.2s ease; }
      .btn-primary:hover  { box-shadow: 0 6px 20px rgba(79,70,229,0.35); }
      .btn-secondary { transition: all 0.25s ease; }
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
    <div class="level-badge">Level 3 — Advanced Transitions</div>
  </nav>

  <section class="hero">
    <div class="hero-left">
      <p class="badge">🔬 Research Project — SUSL</p>
      <h1>Animation <span class="highlight">Performance</span> Benchmark</h1>
      <p class="level-tag">⚙ Level 3: Advanced transitions · will-change hints · Smoother multi-step timing</p>
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
    background: #fefce8;
    color: #a16207;
    border: 1px solid #fde68a;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 0.83rem;
    font-weight: 600;
    margin-bottom: 18px;
  }
  .level-badge {
    background: #d97706;
    color: white;
    padding: 6px 18px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 700;
  }
</style>
