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
<!--Row 1 pick your path section-->
        <div class="row">
            <div class="col"></div>
            <div class="col">
            <!--Pick your path title-->
            <div id="path" class=""></div>
            </div>
            <div class="col"></div>
              
            <div class="row text-center">
            <div><small>Check out all the resources </small></div>
            </div>
        </div>

        <!--Grid icon section for path-->
        <div class="text-center container">
        <div class="row align-items-center">
        <div class="col">
          One of three columns
        </div>
        <div class="col">
          One of three columns
        </div>
        <div class="col">
          One of three columns
        </div>
        <div class="col">
          One of three columns
        </div>
        <div class="col">
          One of three columns
        </div><div class="col">
          One of three columns
        </div>
        <div class="col">
          One of three columns
        </div>
        <div class="col">
          One of three columns
        </div>
      </div>
        </div>
        </div>


        <hr/>

        <!--Live Video Section-->
        <div class="row text-center my-4">
            <!--Left side video call out-->
            <div  class="col-lg-6 col-sm-12 my-2 ">
            <!--left image-->
            <div id="latest-bg"></div>
            <!--text-->
            <div><p>Check out the latest video here!</p></div>

            </div>



            <!-- Right side video callout-->
            <div class="col-lg-6 col-sm-12 my-2 card dark-bg ><iframe src='https://www.youtube.com/embed/?listType=playlist&list=UU78cpbnaq-eeKGGHIEtUgdw' frameborder='0' allowfullscreen /></div>
        </div>


      <hr/>


     
</div>
        `;
    }

  }
  
  customElements.define('section3-component', Section3);