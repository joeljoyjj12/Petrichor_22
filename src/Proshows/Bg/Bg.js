import './Bg.scss';
import $ from 'jquery';
import React from "react";
import ReactTypingEffect from 'react-typing-effect';

import "./Bg.css"

export default function Bg() {
    // function getperc(x, y) {
    //     var perc = (x / y) * 100;
    //     return perc;
    //   }
    //   $(function () {
    //     $(document).mousemove((event) => {
    //       var px = event.pageX;
    //       var py = event.pageY;
    //       var dw = $(document).width();
    //       var dh = $(document).height();
    //       var vperc = 50 + (getperc(px, dw) / 2) * -1;
    //       var hperc = 50 + (getperc(py, dh) / 2) * -1;
    //       vperc = vperc.toFixed(0) * -1;
    //       hperc = hperc.toFixed(0) * -1;
    //       var newtransform = "translateX(" + vperc + "%) translateY(" + hperc + "%)";
    //       console.log(newtransform);
    //       $(".ayush_cover-bg").css("transform", newtransform);
    //     });
    //   });
    $(document).on("click mousemove","body",function(e){ 
      var x = e.clientX;
      var y = e.clientY;
      var scrollPos = $(window).scrollTop();
      console.log(scrollPos);
      var newposX = x - 108;
      var newposY = y - 108 + scrollPos; 
      $(".circle").css("transform","translate3d("+newposX+"px,"+newposY+"px,0px)");
      });



  return (
    <div className="jerry_bg_wrapper">
      <div class="circle"></div>
          <div>
      </div>

      <div className="jerry_cmg_soon neon_text">
        <ReactTypingEffect 
            speed={220}
            cursor=' '
            typingDelay={100}
            eraseDelay={1000000000}
            text={["Coming Soon"]}
        />
      </div>
      <div class="ayush_hexagon"></div>  
    </div>
  );
}


