// Simple demo script for playground
import '../dist/grab.css'

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app')
  if (app) {
    app.innerHTML = `
      <div class="d-flex flex-direction-column align-items-center justify-content-center" style="min-height: 100vh;">
        <h1 class="fs-4xl fw-bold text-primary mb-lg">grabcss Playground</h1>
        <p class="fs-lg text-muted mb-xl">A minimal, utility-first CSS framework</p>

        <div class="d-grid grid-template-cols-3 g-md mb-xl" style="max-width: 600px;">
          <div class="bg-primary text-white p-md text-align-center">Flexbox</div>
          <div class="bg-secondary text-white p-md text-align-center">Grid</div>
          <div class="bg-primary text-white p-md text-align-center">Utilities</div>
        </div>

        <div class="d-flex g-sm">
          <button class="bg-primary text-white p-sm px-md">Primary</button>
          <button class="bg-secondary text-white p-sm px-md">Secondary</button>
        </div>
      </div>
    `
  }
})
