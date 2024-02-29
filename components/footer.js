const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <link rel="stylesheet" href="./style.css">
  <footer class="padding-content">
  <div class="semibold-font">Contact</div>
  <p>Feel free to reach me at <a class="ngc" href="mailto:jaydeepgodhani16@gmail.com">jaydeepgodhani16@gmail.com</a>
  </p>
  <p>You can also find me on <a class="ngc" href="https://www.twitter.com/jaydeepgodhani">Twitter</a>, <a class="ngc" href="https://www.linkedin.com/jaydeepgodhani">LinkedIn</a>, and <a class="ngc" href="https://www.leetcode.com/jaydeepgodhani">LeetCode</a></p>
  </br>
  </br>
  </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);