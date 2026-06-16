// FIX 4: Declares *.svelte as importable modules so TypeScript resolves
// `import App from './App.svelte'` in main.js without error TS2307.
// Place this file at src/app.d.ts (or src/global.d.ts).

declare module '*.svelte' {
  import type { ComponentType, SvelteComponent } from 'svelte'
  const component: ComponentType<SvelteComponent>
  export default component
}