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

  levelBadgeText = 'Level 2 — Staggered + Cubic-bezier';
  levelBadgeStyle = { background: '#2563eb', color: 'white', padding: '6px 18px', 'border-radius': '20px', 'font-size': '0.85rem', 'font-weight': '700' };
  levelTagText = '⚙ Level 2: Staggered animations · Cubic-bezier easing · Enhanced hover effects';
  levelTagStyle = { background: '#eff6ff', color: '#2563eb', border: '1px solid #bfdbfe', padding: '6px 14px', 'border-radius': '20px', 'font-size': '0.83rem', 'font-weight': '600', 'margin-bottom': '18px' };

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
      .btn-primary { transition: background 0.3s cubic-bezier(0.4,0,0.2,1), transform 0.2s cubic-bezier(0.4,0,0.2,1); }
      .btn-secondary { transition: all 0.3s cubic-bezier(0.4,0,0.2,1); }
    `;
  }

  ngOnDestroy() {
    if (this.styleElement) this.styleElement.remove();
  }

  openResearchModal() { this.modal = this.researchInfo; }
  openLearnMoreModal() { this.modal = this.learnMore; }
  closeModal() { this.modal = null; }
}
