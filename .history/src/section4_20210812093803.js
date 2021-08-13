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
        <!--SUBSCRIBE SECTION-->
         <div class=" sec3 row">
             <div class="col-lg-4 col-md-12 col-sm-12"></div>
             <div class="col-lg-4 col-md-12 col-sm-12">
             <!--Pick your path title-->
             <div id="subscribe" ></div>
             </div>
             <div class="col-lg-4 col-md-12 col-sm-12"></div>
           
             <div class="row text-center">
             <div><small> Connect with me here!</small></small></div>
             </div>
         </div>

         <!--ICON GRID FOR SOCIAL ICONS-->
         <div class="text-center container">
         <div class="row  my-5 py-2 px-3 align-items-center">
    
         <div class="col">
         </div>

         <div class="col-sm-2">
           <div id="Sc1"></div>
         </div>

         <div class="col-sm-2">
         <div id="Sc2"></div>
         </div>

         <div class="col-sm-2">
         <div id="Sc3"></div>
         </div>
 
         <div class="col-sm-2">
         <div id="Sc4"></div>
         </div>
         <div class="col">
         </div>
         <div class="col">
         </div>
         </div>
         </div>
        `;
    }

  }
  