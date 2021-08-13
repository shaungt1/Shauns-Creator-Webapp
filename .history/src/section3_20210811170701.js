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


        <div class="row mx-5">
        <div class="col-lg-3 col-sm-12 card dark-bg" id="P1"></div>
        <div class="col-lg-3 col-sm-12 card dark-bg" id="P1"></div>
        <div class="col-lg-3 col-sm-12 card dark-bg" id="P1"></div>
        <div class="col-lg-3 col-sm-12 card dark-bg" id="P1"></div>
        </div>
    


        <hr/>

        <!-- Live Video Section-->
        <div class="row text-center my-4">
        <!--Left side video call out-->
        <div  class="col-lg-6 col-sm-12 my-2  ">
        <div id="latest-bg"></div>
        <div><p>Check out the latest video here!</p></div>
        </div>
        <!-- Right side video callout-->
        <div class="col-lg-6 col-sm-12 my-2 card dark-bg ><iframe src='https://www.youtube.com/embed/?listType=playlist&list=UU78cpbnaq-eeKGGHIEtUgdw' frameborder='0' allowfullscreen /></div>
        </div>


      <hr/>


      <!--Discord Section Section-->
        
      <div class="row text-center my-4">
  
      <!--Left side video call out-->

      <div class="col-lg-6 col-sm-12 my-2 card dark-bg ></div>

      <!-- Right side video callout-->
      <div  class="col-lg-6 col-sm-12 my-2  ">
      <div id="latest-bg"></div>
      <div><p>Check out the latest video here!</p></div>
      </div>
   
      
      </div>

     <hr/>



      <!--Slack Section Section-->
        
      <div class="row text-center my-4">
  
      <!--Left side video call out-->
      <div  class="col-lg-6 col-sm-12 my-2  ">
      <div id="latest-bg"></div>
      <div><p>Check out the latest video here!</p></div>
      </div>
   
      <!-- Right side video callout-->
      <div class="col-lg-6 col-sm-12 my-2 card dark-bg ></div>
      </div>

     <hr/>

     <!--Social Media callout-->
        <div>
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