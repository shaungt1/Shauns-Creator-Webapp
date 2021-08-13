class Section1 extends HTMLElement {
    constructor() {
      super();
        // THIS IS WHERE ALL THE MAGIC HAPPENS

        document.addEventListener("mousemove", parallax);
        document.addEventListener("touchstart", touch2Mouse, true);
        document.addEventListener("touchmove", touch2Mouse, true);
        document.addEventListener("touchend", touch2Mouse, true);
        function parallax(e) {
          document.querySelectorAll(".object").forEach(function (move) {
            var moving_value = move.getAttribute("data-value");
            var x = (e.clientX * moving_value) / 50;
            var y = (e.clientY * moving_value) / 50;

            move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
          });
        }



        function touch2Mouse(e) {
          var theTouch = e.changedTouches[0];
          var mouseEv;

          switch (e.type) {
            case "touchstart":
              mouseEv = "mousedown";
              break;
            case "touchend":
              mouseEv = "mouseup";
              break;
            case "touchmove":
              mouseEv = "mousemove";
              break;
            default:
              return;
          }

          var mouseEvent = document.createEvent("MouseEvent");

          mouseEvent.initMouseEvent(
            mouseEv,
            true,
            true,
            window,
            1,
            theTouch.screenX,
            theTouch.screenY,
            theTouch.clientX,
            theTouch.clientY,
            false,
            false,
            false,
            false,
            0,
            null
          );

          theTouch.target.dispatchEvent(mouseEvent);

          document.querySelectorAll(".object").forEach(function (mouseEvent) {
            var moving_value = mouseEvent.getAttribute("data-value");
            var x = (e.theTouch.clientX * moving_value) / 50;
            var y = (e.theTouch.clientX * moving_value) / 50;

            mouseEvent.style.transform =
              "translateX(" + x + "px) translateY(" + y + "px)";
          });

          e.preventDefault();
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
            <h2 class="object" data-value="3">Develop<br> <span>Your {Code} Skills</span></h2>
            <!-- Call to action -->
            <div style="margin-left:30%!important; margin-right:30%!important; " class=" text-center dark-bg shadow-lg shadow card mx-5 px-4 py-4 mt-5 ">
            <!-- text highlight-->
            <h4 class="text-white">Whether you want to become a software engineer, a hacker, data scientist or just want to know how to get started in Code and AI, you’ve come to the right place.</h4>
         
            <br>
            <header class="text-center"><svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 6.675l-1.8-.6c-.2-.1-.3-.3-.2-.4l.9-1.7c.6-1.2-.7-2.5-1.9-1.9l-1.7.9c-.1.1-.3 0-.4-.2l-.6-1.8c-.4-1.3-2.2-1.3-2.6 0l-.6 1.8c-.1.2-.3.3-.4.2l-1.7-.9c-1.2-.6-2.5.7-1.9 1.9l.9 1.7c.1.1 0 .3-.2.4l-1.8.6c-1.3.4-1.3 2.3 0 2.7l1.8.6c.2 0 .3.2.2.3l-.9 1.7c-.6 1.2.7 2.5 1.9 1.9l1.7-.9c.2-.1.4 0 .4.2l.6 1.8c.4 1.3 2.3 1.3 2.7 0l.6-1.8c.1-.2.3-.3.4-.2l1.7.9c1.2.6 2.5-.7 1.9-1.9l-1-1.7c-.1-.2 0-.4.2-.4l1.8-.6c1.3-.4 1.3-2.2 0-2.6zm-7 3.7c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z" fill="#4C4F5A"></path></svg>
            <small class="mb-5 text-secondary">JS</small></header>
            <code class="typewriter">
            
            <span>
            <b class="Mka ">Learn</b>
            <b class="Mkc">+</b>
            <b class="Mkd">{</b>
            <b class="Mka">Code</b>
            <b class="Mkd">}</b>
            <b class="Mkc">=</b>
            <b class="">Create</b>
            </span>
            </code>
 
            <br>
            <a href="#content" alt="shaun pritchard live webapp">
            <button class="btn btn-C1">Check Out New Content & Courses</button>
            </a>

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