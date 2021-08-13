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
      
      

      <hr/>
       <div class="container">
       <!--Latest video section-->
        <div class="row  my-5 text-center justify-content-center">
            <div class="col-5 card dark-bg mx-1 ">
            <div id="latest-t "></div>
            <div class="col-5 mx-1 py-3 card dark-bg">One of two columns</div>
        </div>
     </div>

     <div class="container">
     <!--Latest video section-->
      <div class="row  my-5 text-center justify-content-center">
          <div class="col-5 card dark-bg mx-1 ">
          
          <div class="col-5 mx-1 py-3 card dark-bg">One of two columns</div>
      </div>
   </div>

   <div class="container">
   <!--Latest video section-->
    <div class="row  my-5 text-center justify-content-center">
        <div class="col-5 card dark-bg mx-1 ">
        
        <div class="col-5 mx-1 py-3 card dark-bg">One of two columns</div>
    </div>
 </div>


</div>
<!-- End of section 1 -->



        `;
    }

  }
  
  customElements.define('section3-component', Section3);