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
        <div class="bg2 w-100">
        <div class="container  ">
        <div class="row mb-5">

          <div class="col">
            <div  class="card shadow-lg rounded mx-5  text-white shadow dark-bg ">
            <!--Add Icon -->
              <div class="card-body">
                <div id="signup" class="mx-2 mb-5"></div>
                <br>
                <br>
                <br>
                <br>
                <code class="py-4 card-text"><span class="Mkd"><</span><span class="Mkd">div</span><span class="Mkd">></span></code>
               
                <code class="typewriter">
                <span>Don't miss out any of the cool stuff.......................................................................................</span> Get latest releases of free courses, code, hackathons, contest, videos, and Free stuff sign up below.
                If you would like to contribute and help me grow check out my Patreon and get Early release episodes, discount codes and priority access to VIP content, live streams and much more.
             </span>
                </code>
                <code><span class="Mkd"><</span><span class="Mkd">/</span><span class="Mkd">div</span><span class="Mkd">></span></code>

                <!-- Button row-->
                    <div class="row py-5 text-center">
                        <div class="col-sm-6">
                        <span class="col-lg-6 col-md-12 col-sm-12 d-flex d-flex justify-content-center text-center">Subscribe to Shaun's Newsletter</span>
                        <span class="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center text-center">Dev Tutorials and News Delivered to</span>
                        <div role="form" class="wpcf7" id="wpcf7-f279-p33-o1" lang="en-US" dir="ltr">
                        <div class="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true"></p> <ul></ul></div>
                        <form action="/contact/#wpcf7-f279-p33-o1" method="post" class=" justify-content-start d-flex wpcf7-form init" novalidate="novalidate" data-status="init">
                        <div style="display: none;">
                        <input type="hidden" name="_wpcf7" value="279">
                        <input type="hidden" name="_wpcf7_version" value="5.4.2">
                        <input type="hidden" name="_wpcf7_locale" value="en_US">
                        <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f279-p33-o1">
                        <input type="hidden" name="_wpcf7_container_post" value="33">
                        <input type="hidden" name="_wpcf7_posted_data_hash" value="">
                        </div>
                        <p><label> Your email<br>
                            <span class=" wpcf7-form-control-wrap your-email"><input type="email" name="your-email" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false"></span> </label></p>
                        <p><input type="submit" value="Submit" class=" mt-5 mx-4 justify-content-end btn-C1 btn wpcf7-form-control wpcf7-submit"><span class="ajax-loader"></span></p>
                        <div class="wpcf7-response-output" aria-hidden="true"></div></form></div>
                        </div>
                        <div class="col-sm-6 text-center"> <small>Join the Patreon channel here!</small> <a href="https://shaunp.live/sign-up"class=""><div class="rounded mx-auto d-block" id="patreon"></div></a></div> 
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