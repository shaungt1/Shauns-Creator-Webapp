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
        <div class="container">

     
        <div class="container">
          <div class="row">
            <div class="col">
              
            </div>
            <div class="col">
            <!--Pick your path title-->
            <div id="path" class=""></div>
            </div>
            <div class="col">
              
            </div>
          </div>
        </div>

        <div class="row">
        <div class="g-row">
        <div><small>Check out all the resources </small></div>
        </div>


        <div class="row ">
        <div class="g-row my-5">
        
        <div class="grid">
        <div class=" py-3 px-3 mx-5 card dark-bg" id=""></div>
        <div class=" py-3 px-3 mx-5 card dark-bg" id=""></div>
        <div class=" py-3 px-3 mx-5 card dark-bg" id=""></div>
        <div class=" py-3 px-3 mx-5 card dark-bg" id=""></div>
        </div>
        </div>
        </div>


        <hr/>

        <!-- Live Video Section-->
        <div class="grid-2 text center">
        <!--Left side video call out-->
        <div id="latest-bg" class=""></div>
        <!-- Right side video callout-->
        <div id="ri" class=""><iframe src='https://www.youtube.com/embed/?listType=playlist&list=UU78cpbnaq-eeKGGHIEtUgdw' width="100%" height="auto" padding-top: 100%; frameborder='0' allowfullscreen /></div>
        </div>

      <hr/>

      <div class="grid-2">
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