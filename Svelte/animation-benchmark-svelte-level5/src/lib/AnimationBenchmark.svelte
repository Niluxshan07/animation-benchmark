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
      @keyframes dotPulseCinematic {
        0%, 100% {
          transform: scale(1);
          opacity: 1;
          filter: drop-shadow(0 0 0px #4f46e5);
        }
        50% {
          transform: scale(1.6);
          opacity: 0.5;
          filter: drop-shadow(0 0 20px #4f46e5);
        }
      }
      @keyframes ringPulseCinematic {
        0%, 100% { transform: scale(1); opacity: 0.2; filter: blur(0px); }
        50%       { transform: scale(1.15); opacity: 0.6; filter: blur(1px); }
      }
      @keyframes logoPulseCinematic {
        0%   { transform: rotate(0deg) scale(1); filter: drop-shadow(0 0 10px rgba(79,70,229,0.4)); }
        25%  { transform: rotate(90deg) scale(1.2); filter: drop-shadow(0 0 20px rgba(79,70,229,0.6)); }
        50%  { transform: rotate(180deg) scale(1.5); filter: drop-shadow(0 0 35px rgba(79,70,229,0.8)); }
        75%  { transform: rotate(270deg) scale(1.2); filter: drop-shadow(0 0 20px rgba(79,70,229,0.6)); }
        100% { transform: rotate(360deg) scale(1); filter: drop-shadow(0 0 10px rgba(79,70,229,0.4)); }
      }
      @keyframes modalCinematic {
        0%   { transform: scale(0.7) rotate(-5deg); opacity: 0; filter: blur(6px); }
        60%  { transform: scale(1.03) rotate(1deg); opacity: 1; filter: blur(0); }
        100% { transform: scale(1) rotate(0deg); opacity: 1; filter: blur(0); }
      }
      @keyframes navGlow {
        0%, 100% { box-shadow: 0 2px 20px rgba(0,0,0,0.3); }
        50%       { box-shadow: 0 2px 30px rgba(79,70,229,0.25); }
      }
      .brand-dot {
        animation: dotPulseCinematic 2s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
        will-change: transform, filter;
      }
      .ring-1 { animation: ringPulseCinematic 3s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite 0s; will-change: transform, filter; }
      .ring-2 { animation: ringPulseCinematic 3s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite 0.5s; will-change: transform, filter; }
      .ring-3 { animation: ringPulseCinematic 3s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite 1s; will-change: transform, filter; }
      .animated-logo {
        animation: logoPulseCinematic 2s ease-in-out infinite;
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        will-change: transform, filter;
      }
      .animated-logo:hover {
        transform: scale(1.1) rotate(5deg) !important;
        filter: drop-shadow(0 0 30px rgba(79, 70, 229, 0.9)) !important;
        animation-play-state: paused;
      }
      .modal-box { animation: modalCinematic 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); }
      .navbar { animation: navGlow 4s ease-in-out infinite; }
      .btn-primary {
        transition: background 0.3s, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s;
        box-shadow: 0 4px 14px rgba(79,70,229,0.3);
      }
      .btn-primary:hover {
        transform: translateY(-3px) scale(1.04);
        box-shadow: 0 8px 28px rgba(79,70,229,0.5);
      }
      .btn-secondary {
        transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      .btn-secondary:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 14px rgba(79,70,229,0.25);
      }
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
    <div class="level-badge">Level 5 — Cinematic</div>
  </nav>

  <section class="hero">
    <div class="hero-left">
      <p class="badge">🔬 Research Project — SUSL</p>
      <h1>Animation <span class="highlight">Performance</span> Benchmark</h1>
      <p class="level-tag">🎬 Level 5: Cinematic effects · Drop shadows · Blur · Smooth GPU transitions</p>
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
    background: #fdf4ff;
    color: #7c3aed;
    border: 1px solid #e9d5ff;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 0.83rem;
    font-weight: 600;
    margin-bottom: 18px;
  }
  .level-badge {
    background: linear-gradient(135deg, #7c3aed, #4f46e5);
    color: white;
    padding: 6px 18px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 700;
    box-shadow: 0 2px 12px rgba(124,58,237,0.4);
  }
</style>
