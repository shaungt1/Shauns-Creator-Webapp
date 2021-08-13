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

<!--CHOOSE YOUR PATH SECTION-->
        <div class="row">
            <div class="col"></div>
            <div class="col">
            <!--Pick your path title-->
            <div id="path" ></div>
            </div>
            <div class="col"></div>
              
            <div class="row text-center">
            <div><small>Check out all the resources </small></div>
            </div>
        </div>

        <!--ICON GRID FOR PATH-->
        <div class="text-center container">
        <div class="row  my-5 py-2 px-3 align-items-center">
       
        <div class="col">
        
        </div>
        <div class="col">
         
        </div>
        <div class="col">
          1
        </div>
        <div class="col">
         2
        </div>
        <div class="col">
          3
        </div><div class="col">
          4
        </div>
        <div class="col">
         
        </div>
        <div class="col">
         
        </div>
        </div>
        </div>
      
      

      <hr/>

      <!--VIDEO SECTION-->
       <div class="container">
       <!--Latest video section-->
        <div class="row  my-5 text-center justify-content-center">
            <div class="col-5 my-5 mx-1 ">
            <div id="latest-t"></div>
            <h3 style="margin-top:-300px;" class="pb-5 ">Check out my latest creation video here!</h3>
            </div>
            <div class="col-5 mx-1 py-3 card dark-bg">One of two columns</div>
        </div>
     </div>

     <!--DISCORD  SECTION-->
     <div class="container">
     <!--Latest video section-->
      <div class="row  my-5 text-center justify-content-center">
          <div class="col-5 card mx-1 ">
          <div id="latest-t"></div>
          </div>
          <div class="col-5 mx-1 py-3 card dark-bg">One of two columns</div>
      </div>
   </div>


 <!--SLACK  SECTION-->
   <div class="container">
   <!--Latest video section-->
    <div class="row  my-5 text-center justify-content-center">
        <div class="col-5 card mx-1 ">
        <div id="latest-t"></div>
        </div>
        <div class="col-5 mx-1 py-3 card dark-bg">One of two columns</div>
    </div>
 </div>

 <!--CHOOSE YOUR PATH SECTION-->
 <div class="row">
     <div class="col"></div>
     <div class="col">
     <!--Pick your path title-->
     <div id="path" ></div>
     </div>
     <div class="col"></div>
           
     <div class="row text-center">
     <div><small>Check out all the resources </small></div>
     </div>
 </div>

 <!--ICON GRID FOR PATH-->
 <div class="text-center container">
 <div class="row  my-5 py-2 px-3 align-items-center">
    
 <div class="col">
     
 </div>
 <div class="col">
      
 </div>
 <div class="col">
   1
 </div>
 <div class="col">
  2
 </div>
 <div class="col">
   3
 </div><div class="col">
   4
 </div>
 <div class="col">
      
 </div>
 <div class="col">
      
 </div>
 </div>
 </div>

 <!--END OF CONTAINER-->
</div>
<!-- End of section 1 -->



        `;
    }

  }
  
  customElements.define('section3-component', Section3);