// CSS styles that will be injected into the page
export const PLAYGROUND_STYLES = `
  <style>
    /* Base styles */
    .header {
      height: 50px;
      border-bottom: 1px solid var(--color-border);
      background: var(--color-background);
      padding: 0 15px;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
    }

    .main-content {
      margin-top: 50px;
      flex: 1;
      overflow: auto;
      padding: 10px;
    }

    .version-badge {
      background: var(--color-primary);
      color: var(--color-background);
      font-size: 10px;
      border-radius: 12px;
      padding: 2px 6px;
    }

    .section-link {
      text-decoration: none;
    }

    /* Theme selector components */
    .theme-selector {
      position: relative;
      display: inline-block;
    }

    .theme-selector-trigger {
      display: flex;
      align-items: center;
      gap: 6px;
      background-color: var(--color-background);
      border: 1px solid var(--color-border);
      border-radius: 6px;
      padding: 4px 8px;
      font-size: 12px;
      color: var(--color-body);
      cursor: pointer;
      transition: all 0.2s;
      outline: none;
      min-width: 100px;
      user-select: none;
    }

    .theme-selector-trigger:hover,
    .theme-selector-trigger:focus {
      border-color: var(--color-primary);
    }

    .theme-selector-trigger:focus {
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 20%, transparent);
    }

    .theme-selector-arrow {
      margin-left: auto;
      transition: transform 0.2s;
      color: var(--color-muted);
    }

    .theme-selector-trigger[aria-expanded="true"] .theme-selector-arrow {
      transform: rotate(180deg);
    }

    .theme-selector-dropdown {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      right: 0;
      background-color: var(--color-background);
      border: 1px solid var(--color-border);
      border-radius: 6px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      opacity: 0;
      visibility: hidden;
      transform: translateY(-4px);
      transition: all 0.2s;
      z-index: 1000;
      overflow: hidden;
      max-height: 300px;
      overflow-y: auto;
    }

    .theme-selector-dropdown.show {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .theme-option {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 8px;
      cursor: pointer;
      transition: background-color 0.15s;
      font-size: 12px;
    }

    .theme-option:hover {
      background-color: color-mix(in srgb, var(--color-primary) 10%, transparent);
    }

    .theme-option.selected {
      background-color: color-mix(in srgb, var(--color-primary) 15%, transparent);
    }

    .color-preview {
      display: flex;
      gap: 4px;
      align-items: center;
    }

    .color-dot {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
    }

    .theme-name {
      font-weight: 500;
    }

    /* Responsive styles - consolidated */
    @media (min-width: 576px) {
      .header {
        height: 60px;
        padding: 0 20px;
      }

      .main-content {
        margin-top: 60px;
        padding: 25px;
      }

      .theme-selector-trigger {
        gap: 8px;
        padding: 6px 12px;
        font-size: 14px;
      }

      .theme-option {
        gap: 8px;
        padding: 8px 12px;
        font-size: 14px;
      }
    }
  </style>
`
