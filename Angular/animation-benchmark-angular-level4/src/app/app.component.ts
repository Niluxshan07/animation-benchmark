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

  levelBadgeText = 'Level 4 — Spring Physics';
  levelBadgeStyle = { background: '#ea580c', color: 'white', padding: '6px 18px', 'border-radius': '20px', 'font-size': '0.85rem', 'font-weight': '700' };
  levelTagText = '⚙ Level 4: Spring physics · Bounce effects · Elastic animations';
  levelTagStyle = { background: '#fff7ed', color: '#c2410c', border: '1px solid #fed7aa', padding: '6px 14px', 'border-radius': '20px', 'font-size': '0.83rem', 'font-weight': '600', 'margin-bottom': '18px' };

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
      @keyframes dotPulseSpring {
        0%, 100% { transform: scale(1); opacity: 1; }
        40%  { transform: scale(1.6); opacity: 0.55; }
        60%  { transform: scale(1.45); opacity: 0.65; }
        80%  { transform: scale(1.55); opacity: 0.58; }
      }
      @keyframes ringPulseSpring {
        0%, 100% { transform: scale(1); opacity: 0.2; }
        40%  { transform: scale(1.14); opacity: 0.55; }
        65%  { transform: scale(1.09); opacity: 0.45; }
        80%  { transform: scale(1.12); opacity: 0.5; }
      }
      @keyframes logoPulseSpring {
        0%   { transform: rotate(0deg) scale(1) translateY(0); }
        25%  { transform: rotate(90deg) scale(1.2) translateY(-10px); }
        50%  { transform: rotate(180deg) scale(1.4) translateY(0); }
        75%  { transform: rotate(270deg) scale(1.2) translateY(10px); }
        100% { transform: rotate(360deg) scale(1) translateY(0); }
      }
      @keyframes modalSpring {
        0%   { transform: scale(0.8) translateY(-50px); opacity: 0; }
        55%  { transform: scale(1.06) translateY(4px); opacity: 1; }
        75%  { transform: scale(0.97) translateY(-2px); }
        90%  { transform: scale(1.02) translateY(1px); }
        100% { transform: scale(1) translateY(0); opacity: 1; }
      }
      .brand-dot { animation: dotPulseSpring 2s cubic-bezier(0.68,-0.55,0.265,1.55) infinite; will-change: transform; }
      .ring-1 { animation: ringPulseSpring 3s cubic-bezier(0.68,-0.55,0.265,1.55) infinite 0s; will-change: transform; }
      .ring-2 { animation: ringPulseSpring 3s cubic-bezier(0.68,-0.55,0.265,1.55) infinite 0.5s; will-change: transform; }
      .ring-3 { animation: ringPulseSpring 3s cubic-bezier(0.68,-0.55,0.265,1.55) infinite 1s; will-change: transform; }
      .animated-logo {
        animation: logoPulseSpring 2s cubic-bezier(0.34,1.56,0.64,1) infinite;
        will-change: transform;
        transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
      }
      .animated-logo:hover { transform: scale(1.15) rotate(10deg); }
      .modal-box { animation: modalSpring 0.5s cubic-bezier(0.34,1.56,0.64,1); }
      .btn-primary { transition: background 0.3s, transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s; }
      .btn-primary:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 8px 24px rgba(79,70,229,0.4); }
      .btn-secondary { transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1); }
      .btn-secondary:hover { transform: translateY(-2px); }
    `;
  }

  ngOnDestroy() {
    if (this.styleElement) this.styleElement.remove();
  }

  openResearchModal() { this.modal = this.researchInfo; }
  openLearnMoreModal() { this.modal = this.learnMore; }
  closeModal() { this.modal = null; }
}
