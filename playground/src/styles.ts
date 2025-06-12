// CSS styles that will be injected into the page
export const PLAYGROUND_STYLES = `
  <style>
    .header {
      height: 60px;
      border-bottom: 1px solid var(--color-border);
      background: var(--color-background);
      padding: 0 20px;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
    }

    .version-badge {
      background: var(--color-primary);
      color: var(--color-background);
      font-size: 10px;
      border-radius: 12px;
      padding: 2px 6px;
    }

    .theme-toggle__input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .theme-toggle__label {
      position: relative;
      display: inline-block;
      width: 40px;
      height: 20px;
      background-color: var(--color-border);
      border-radius: 20px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .theme-toggle__slider {
      position: absolute;
      content: '';
      height: 16px;
      width: 16px;
      left: 2px;
      bottom: 2px;
      background-color: var(--color-background);
      border-radius: 50%;
      transition: transform 0.3s;
      box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    }

    .section-link {
      text-decoration: none;
    }

    .main-content {
      margin-top: 60px;
      flex: 1;
      overflow: auto;
    }
  </style>
`