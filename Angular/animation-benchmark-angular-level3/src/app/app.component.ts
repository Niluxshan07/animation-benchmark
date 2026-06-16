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

  levelBadgeText = 'Level 3 — Advanced Transitions';
  levelBadgeStyle = { background: '#d97706', color: 'white', padding: '6px 18px', 'border-radius': '20px', 'font-size': '0.85rem', 'font-weight': '700' };
  levelTagText = '⚙ Level 3: Advanced transitions · will-change hints · Smoother multi-step timing';
  levelTagStyle = { background: '#fefce8', color: '#a16207', border: '1px solid #fde68a', padding: '6px 14px', 'border-radius': '20px', 'font-size': '0.83rem', 'font-weight': '600', 'margin-bottom': '18px' };

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
      .brand-dot { animation: dotPulse 2s ease-in-out infinite; will-change: transform, opacity; }
      .ring-1 { animation: ringPulse 3.2s ease-in-out infinite 0s; will-change: transform, opacity; }
      .ring-2 { animation: ringPulse 3.2s ease-in-out infinite 0.55s; will-change: transform, opacity; }
      .ring-3 { animation: ringPulse 3.2s ease-in-out infinite 1.1s; will-change: transform, opacity; }
      .animated-logo { animation: logoPulse 2.2s ease-in-out infinite; will-change: transform, opacity; transition: transform 0.4s ease-in-out; }
      .modal-box { animation: modalIn 0.45s ease-out; }
      .btn-primary { transition: background 0.25s ease, transform 0.2s ease, box-shadow 0.2s ease; }
      .btn-primary:hover { box-shadow: 0 6px 20px rgba(79,70,229,0.35); }
      .btn-secondary { transition: all 0.25s ease; }
    `;
  }

  ngOnDestroy() {
    if (this.styleElement) this.styleElement.remove();
  }

  openResearchModal() { this.modal = this.researchInfo; }
  openLearnMoreModal() { this.modal = this.learnMore; }
  closeModal() { this.modal = null; }
}
