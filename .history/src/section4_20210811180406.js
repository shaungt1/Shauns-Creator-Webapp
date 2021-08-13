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
        
        <div class="row  my-5 text-center justify-content-center">
        <div class="col-5 card dark-bg mx-1 ">
        <span id="latest"></span>
          One of two columns
        </div>
        <div class="col-5 mx-1 card dark-bg">
          One of two columns
        </div>
      </div>



        </div>
        `;
    }

  }
  