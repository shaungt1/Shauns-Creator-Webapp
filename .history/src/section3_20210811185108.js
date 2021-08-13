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
            <h3 style="margin-top:-200px;" class="pb-5 ">Check out my latest creation video here!</h3>
            </div>
            <div class="col-5 mx-1 py-3 card dark-bg"><iframe width="100%" height="450" src='https://www.youtube.com/embed/?listType=playlist&list=UU78cpbnaq-eeKGGHIEtUgdw' ?rel=0 frameborder='0' allowfullscreen ></iframe></div>
        </div>
     </div>

     <!-BANNER SECTION-->
     <div class="row w-100 my-5 text-center justify-content-center">
     <div class="banner"></div>
     </div>


     <!--DISCORD  SECTION-->
     <div class="container">
     <!--Latest video section-->
      <div class="row  my-5 text-center justify-content-center">

          <div class="col-5 mx-1 py-3 card  dark-bg">One of two columns</div>

          <div class="col-5  mx-1 ">
          <div id="discord-t"></div>
          <h3 style="margin-top:-200px;" class="pb-5 ">Join my Dev creator community where we discuss tech, code, AI, and how to take over the world! ...jk</h3>
          </div>
         
      </div>
   </div>


 <!--SLACK  SECTION-->
   <div class="container">
   <!--Latest video section-->
    <div class="row  my-5 text-center justify-content-center">
        <div class="col-5 mx-1 ">
        <div id="slack-t"></div>
        <h3 style="margin-top:-200px;" class="pb-5 ">Join my Slack channel to get help with code projects and courses!</h3>
        </div>
        <div class="col-5 mx-1 py-3 card dark-bg  ">One of two columns</div>
    </div>
 </div>

 <!--CHOOSE YOUR PATH SECTION-->
 <div class="row">
     <div class="col"></div>
     <div class="col">
     <!--Pick your path title-->
     <div id="subscribe" ></div>
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