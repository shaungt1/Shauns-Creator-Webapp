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
        <div id="path" class="--bs-columns: 18; --bs-gap: .5rem;"></div>
        <div id="path" class="py-3 px-3"></div>
        </div>
        <small>Check out all the resources </small>
        <div class="grid">
       
        <div class="g-col-6 g-col-md-4"><span id="P1"></span></div>
        <div class="g-col-6 g-col-md-4"><span id="P1"></span></div>
        <div class="g-col-6 g-col-md-4"><span id="P1"></span></div>
        <div class="g-col-6 g-col-md-4"><span id="P1"></span></div>
        </div>

        <hr/>>

        <!-- Live Video Section-->
        <div class="grid text center">
        <!--Left side video call out-->
        <div class="g-col-6"><div id="latest" class="py-2 px-2"></div></div>
        <!-- Right side video callout-->
        <div class="g-col-6"><div id="latest-bg" class="card dark-bg"></div></div>
      </div>

      <hr/>

      <div class="grid">
      <!-- Discord Section -->
      <div class="g-col-6">.g-col-6</div>
      <div class="g-col-6">.g-col-6</div>
      <!-- Slack Channel Section -->
      <div class="g-col-6">.g-col-6</div>
      <div class="g-col-6">.g-col-6</div>
      </div>

     <hr/>

     <!--Social Media callout-->
     <div class="grid" style="--bs-columns: 12;">
     <div id="social" class="text-center"></div>
    </div>
    <!--Social media icons-->
    <div class="grid" style="--bs-columns: 3;">
      <div>
       
        <div class="grid">
          <div id="Sc1" class="g-col-4 --bs-gap"></div>
          <div id="Sc2" class="g-col-4 --bs-gap"></div>
          <div id="Sc3" class="g-col-4 --bs-gap"></div>
          <div id="Sc4" class="g-col-4 --bs-gap "></div>
        </div>
      </div>
      <div>
</div>
        `;
    }

  }
  
  customElements.define('section3-component', Section3);