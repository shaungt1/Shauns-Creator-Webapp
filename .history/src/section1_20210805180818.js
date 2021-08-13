class Section1 extends HTMLElement {
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
        <div class="bg1">
        <div class="container">
            <div class="row-85">
            <!-- Centered text -->
            <div class="text-center">
                <div class="object" data-value="0.85" id="signature"> </div>
            <h2 class="object" data-value="3"> Welcome <br> <span>Author & Data Scientist</span></h2>
            </div>
            <!--Left Column Section  -->
            <div class="col">
                   <!-- Main-Profile image bottom left -->
                <div id="l1" data-value="-1" class="object"></div>
                <!-- Random Elements -->
                <span id="l-1" data-value="-6" class="object"></span>
                <span id="l0" data-value="-3" class="object"></span>
                <span id="l2" data-value="8" class="object"></span>
                <span id="l3" data-value="-6" class="object"></span>
                <span id="l4" data-value="7" class="object"></span>
                <span id="l5" data-value="9" class="object"></span>
                <span id="l6" data-value="-2" class="object"></span>
                <span id="l7" data-value="3" class="object"></span>
                <span id="l8" data-value="-6.5" class="object"></span>
                <span id="l9" data-value="-1.5" class="object"></span>
                <span id="l10" data-value="6" class="object"></span>
                <span id="l11" data-value="-7" class="object"></span>
                <span id="l12" data-value="2.6" class="object"></span>
                <span id="l13" data-value="-4" class="object"></span>
        </div>
        </div>
        `;
    }

  }
  
  customElements.define('section1-component', Section1);