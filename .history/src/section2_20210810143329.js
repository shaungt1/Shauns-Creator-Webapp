class Section2 extends HTMLElement {
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
        <div class="bg2">
        <div class="container">
        <div class="row mb-5">

          <div class="col">
            <div class="card text-white bg-dark ">
            <!--Add Icon -->
              <div class="card-body">
                <h5 class="card-title">Sign up & Contribute</h5>
                <p class="card-text">Don't miss out any of the latest releases of free courses, code, videos, and Free stuff sign up below. 
                If you would like to contribute and help me grow check out my Patreon and get full episode, discount codes and priority access to VIP content, live streams and much more.</p>
                <!-- Button row-->
                    <div class="row">
                        <div class="col"> <button class="btn btn-C1">Check Out New Content & Courses</button></div>
                        <div class="col"> <button class="btn btn-C1"><div id="patreon"></div></button></div>
                    </div>
              </div>
            </div>
          </div>






        </div>
      </div>
        </div>
        `;
    }

  }
  
  customElements.define('section2-component', Section2);