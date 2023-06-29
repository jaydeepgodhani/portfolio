const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <script src="./actions.js"></script>
  <link rel="stylesheet" href="./style.css">

  <header class="nav">
  <span><a href="/index.html" id="time-header"></a></span>
  <span class="right-aligned"><a href="/projects.html" class="ngc">Projects</a>&nbsp;
    <button title="Toggles light &amp; dark" aria-label="light" aria-live="polite" class="theme-toggle"
  id="theme-toggle"><svg viewBox="0 0 24 24" aria-hidden="true" class="sun-and-moon" height="22" width="22">
    <mask class="moon" id="moon-mask">
      <rect fill="white" height="100%" width="100%" x="0" y="0"></rect>
      <circle cx="24" cy="10" fill="black" r="6"></circle>
    </mask>
    <circle class="sun" cx="12" cy="12" fill="currentColor" mask="url(#moon-mask)" r="6"></circle>
    <g class="sun-beams" stroke="currentColor">
      <line x1="12" x2="12" y1="1" y2="3"></line>
      <line x1="12" x2="12" y1="21" y2="23"></line>
      <line x1="4.22" x2="5.64" y1="4.22" y2="5.64"></line>
      <line x1="18.36" x2="19.78" y1="18.36" y2="19.78"></line>
      <line x1="1" x2="3" y1="12" y2="12"></line>
      <line x1="21" x2="23" y1="12" y2="12"></line>
      <line x1="4.22" x2="5.64" y1="19.78" y2="18.36"></line>
      <line x1="18.36" x2="19.78" y1="5.64" y2="4.22"></line>
    </g>
  </svg></button>
  </span>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);