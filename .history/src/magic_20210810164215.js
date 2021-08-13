   // THIS IS WHERE ALL THE MAJIC HAPPENS

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