class Section3 extends HTMLElement {
    constructor() {
      super();

      document.addEventListener("mousemove", parallax);
      function parallax(e){
          document.querySelectorAll(".object").forEach(function(move){

              var moving_value = move.getAttribute("data-value");
              var x = (e.clientX * moving_value) / 50;
              var y = (e.clientY * moving_value) / 50;

              move.style.transform = "translateX(" + x +"px) translateY("+ y +"px)";
          });
      }
    }
    connectedCallback() {
        this.innerHTML = `
        <div class="bg3">
        <!--Choose your path -->
        <div id="path" class="g-col-12"></div>
        <small>Select the</small>
        <div class="grid">
        <div class="g-col-6 g-col-md-4"><span id="P1"></span></div>
        <div class="g-col-6 g-col-md-4"><span id="P1"></span></div>
        <div class="g-col-6 g-col-md-4"><span id="P1"></span></div>
        <div class="g-col-6 g-col-md-4"><span id="P1"></span></div>
        </div>

        <hr/>>



        </div>
        `;
    }

  }
  
  customElements.define('section3-component', Section3);