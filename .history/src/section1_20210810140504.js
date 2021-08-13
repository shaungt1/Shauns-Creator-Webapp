class Section1 extends HTMLElement {
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
        <div class="">
        <div class="container1">
            <div class="row-85">
            <!-- Centered text -->
            <div class="text-center">
                <div class="object" data-value="0.85" id="signature"> </div>
            <h2 class="object" data-value="3">Official<br> <span>Creator Site</span></h2>
            <!-- Call to action -->
            <div style="margin-left:30%!important; margin-right:30%!important; " class=" text-center bg-dark card mx-5 px-4 py-4 mt-5 ">
            <a href="#content" alt="shaun pritchard live webapp">
            <button class="btn btn-C1">Check Out New Content & Courses</button>
            </a>
            <br>
            <code  class="typewriter">
            <span class="Mka HomepageAnonHeaderHero_line1-2hbgI">Learn</span>
            <span class="Mkc HomepageAnonHeaderHero_line2-A3_xZ">+</span>
            <span class="Mkd HomepageAnonHeaderHero_line3-2wi52">{</span>
            <span class="Mka HomepageAnonHeaderHero_line4-1uUtl">Code</span>
            <span class="Mkd HomepageAnonHeaderHero_line5-3llzm ">}</span>
            <span class="Mkc HomepageAnonHeaderHero_line5-3llzm ">=</span>
            <span class="">Create</span>
            </code>
            </div>
         

            </div>
            <!--Left Column Section  -->
            <div class="col">
                   <!-- Main-Profile image bottom left -->
                <div id="l1" data-value="-1" class="object"></div>
                <!-- Random Elements -->
                <span id="l-1" data-value="-6" class="object"></span>
                <span id="l0" data-value="-3" class="object"></span>
                <span id="l2" data-value="8" class="object"></span>
                <span id="l3" data-value="-6" class="object"></span>
                <span id="l4" data-value="7" class="object"></span>
                <span id="l5" data-value="9" class="object"></span>
                <span id="l6" data-value="-2" class="object"></span>
                <span id="l7" data-value="3" class="object"></span>
                <span id="l8" data-value="-6.5" class="object"></span>
                <span id="l9" data-value="-1.5" class="object"></span>
                <span id="l10" data-value="6" class="object"></span>
                <span id="l11" data-value="-7" class="object"></span>
                <span id="l12" data-value="2.6" class="object"></span>
                <span id="l13" data-value="-4" class="object"></span>
        </div>
              </div>
        `;
    }

  }
  
  customElements.define('section1-component', Section1);