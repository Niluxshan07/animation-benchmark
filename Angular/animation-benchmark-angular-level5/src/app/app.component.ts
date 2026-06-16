import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgStyle],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  modal: { title: string; content: string[] } | null = null;
  private styleElement: HTMLStyleElement | null = null;

  levelBadgeText = 'Level 5 — Cinematic';
  levelBadgeStyle = { background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', color: 'white', padding: '6px 18px', 'border-radius': '20px', 'font-size': '0.85rem', 'font-weight': '700', 'box-shadow': '0 2px 12px rgba(124,58,237,0.4)' };
  levelTagText = '🎬 Level 5: Cinematic effects · Drop shadows · Blur · Smooth GPU transitions';
  levelTagStyle = { background: '#fdf4ff', color: '#7c3aed', border: '1px solid #e9d5ff', padding: '6px 14px', 'border-radius': '20px', 'font-size': '0.83rem', 'font-weight': '600', 'margin-bottom': '18px' };

  researchInfo = {
    title: 'About This Research',
    content: [
      'This study experimentally compares animation rendering performance across React, Vue.js, Svelte, and Angular frameworks.',
      'A single animated UI element is used under identical controlled conditions to isolate framework-level rendering differences.',
      'Performance metrics are collected using Chrome DevTools including FPS, dropped frames, paint time, compositing cost, CPU usage, and bundle size.',
      'The study aims to provide empirical evidence to guide developers in selecting frameworks for animation-heavy landing pages.',
    ]
  };

  learnMore = {
    title: 'Research Methodology',
    content: [
      'Independent Variable: JavaScript Framework (React, Vue.js, Svelte, Angular)',
      'Dependent Variables: Average FPS, Dropped Frames, Paint Time, Compositing Time, CPU Usage, Bundle Size',
      'Controlled Variables: Same CSS animation, same browser (Chrome), same hardware, same animation duration and easing',
      'Data Collection: Chrome DevTools Performance Panel — minimum 30 recordings per framework',
      'Analysis: Statistical comparison using averages, standard deviation and cross-framework performance ranking',
    ]
  };

  ngOnInit() {
    this.styleElement = document.createElement('style');
    this.styleElement.id = 'dynamic-animations';
    document.head.appendChild(this.styleElement);
    this.styleElement.textContent = `
      @keyframes dotPulseCinematic {
        0%, 100% { transform: scale(1); opacity: 1; filter: drop-shadow(0 0 0px #4f46e5); }
        50% { transform: scale(1.6); opacity: 0.5; filter: drop-shadow(0 0 20px #4f46e5); }
      }
      @keyframes ringPulseCinematic {
        0%, 100% { transform: scale(1); opacity: 0.2; filter: blur(0px); }
        50% { transform: scale(1.15); opacity: 0.6; filter: blur(1px); }
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
      .brand-dot { animation: dotPulseCinematic 2s cubic-bezier(0.34,1.56,0.64,1) infinite; will-change: transform, filter; }
      .ring-1 { animation: ringPulseCinematic 3s cubic-bezier(0.68,-0.55,0.265,1.55) infinite 0s; will-change: transform, filter; }
      .ring-2 { animation: ringPulseCinematic 3s cubic-bezier(0.68,-0.55,0.265,1.55) infinite 0.5s; will-change: transform, filter; }
      .ring-3 { animation: ringPulseCinematic 3s cubic-bezier(0.68,-0.55,0.265,1.55) infinite 1s; will-change: transform, filter; }
      .animated-logo {
        animation: logoPulseCinematic 2s ease-in-out infinite;
        transition: all 0.3s cubic-bezier(0.68,-0.55,0.265,1.55);
        will-change: transform, filter;
      }
      .animated-logo:hover {
        transform: scale(1.1) rotate(5deg) !important;
        filter: drop-shadow(0 0 30px rgba(79,70,229,0.9)) !important;
        animation-play-state: paused;
      }
      .navbar { animation: navGlow 4s ease-in-out infinite; }
      .modal-box { animation: modalCinematic 0.5s cubic-bezier(0.34,1.56,0.64,1); }
      .btn-primary {
        transition: background 0.3s, transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s;
        box-shadow: 0 4px 14px rgba(79,70,229,0.3);
      }
      .btn-primary:hover { transform: translateY(-3px) scale(1.04); box-shadow: 0 8px 28px rgba(79,70,229,0.5); }
      .btn-secondary { transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1); }
      .btn-secondary:hover { transform: translateY(-2px); box-shadow: 0 4px 14px rgba(79,70,229,0.25); }
    `;
  }

  ngOnDestroy() {
    if (this.styleElement) this.styleElement.remove();
  }

  openResearchModal() { this.modal = this.researchInfo; }
  openLearnMoreModal() { this.modal = this.learnMore; }
  closeModal() { this.modal = null; }
}
