class Section2 extends HTMLElement {
    constructor() {
      super();

    // Add script and logic here

    connectedCallback() {
        // HTML template
        this.innerHTML = `
        
        `;
    }

  }
  
  customElements.define('section2-component', Section2);