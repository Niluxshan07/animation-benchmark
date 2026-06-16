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

  levelBadgeText = 'Level 1 — Basic CSS Transitions';
  levelBadgeStyle = { background: '#16a34a', color: 'white', padding: '6px 18px', 'border-radius': '20px', 'font-size': '0.85rem', 'font-weight': '700' };
  levelTagText = '⚙ Level 1: Basic CSS transitions · Minimal GPU usage · Simple keyframe animations';
  levelTagStyle = { background: '#f0fdf4', color: '#16a34a', border: '1px solid #bbf7d0', padding: '6px 14px', 'border-radius': '20px', 'font-size': '0.83rem', 'font-weight': '600', 'margin-bottom': '18px' };

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
        50% { transform: scale(1.4); opacity: 0.7; }
      }
      @keyframes ringPulse {
        0%, 100% { transform: scale(1); opacity: 0.2; }
        50% { transform: scale(1.05); opacity: 0.4; }
      }
      @keyframes logoPulse {
        0%   { transform: rotate(0deg) scale(1); opacity: 1; }
        50%  { transform: rotate(180deg) scale(1.3); opacity: 0.6; }
        100% { transform: rotate(360deg) scale(1); opacity: 1; }
      }
      @keyframes modalIn {
        from { transform: scale(0.9); opacity: 0; }
        to   { transform: scale(1); opacity: 1; }
      }
      .brand-dot { animation: dotPulse 2s ease-in-out infinite; }
      .ring-1 { animation: ringPulse 3s ease-in-out infinite 0s; }
      .ring-2 { animation: ringPulse 3s ease-in-out infinite 0.5s; }
      .ring-3 { animation: ringPulse 3s ease-in-out infinite 1s; }
      .animated-logo { animation: logoPulse 2s ease-in-out infinite; }
      .modal-box { animation: modalIn 0.3s ease; }
    `;
  }

  ngOnDestroy() {
    if (this.styleElement) this.styleElement.remove();
  }

  openResearchModal() { this.modal = this.researchInfo; }
  openLearnMoreModal() { this.modal = this.learnMore; }
  closeModal() { this.modal = null; }
}
