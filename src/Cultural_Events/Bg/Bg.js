import './Bg.scss';
import $ from 'jquery';
import React from "react";

export default function Bg() {
    function getperc(x, y) {
        var perc = (x / y) * 100;
        return perc;
      }
      $(function () {
        $(document).mousemove((event) => {
          var px = event.pageX;
          var py = event.pageY;
          var dw = $(document).width();
          var dh = $(document).height();
          var vperc = 50 + (getperc(px, dw) / 2) * -1;
          var hperc = 50 + (getperc(py, dh) / 2) * -1;
          vperc = vperc.toFixed(0) * -1;
          hperc = hperc.toFixed(0) * -1;
          var newtransform = "translateX(" + vperc + "%) translateY(" + hperc + "%)";
          console.log(newtransform);
          $(".ayush_cover-bg").css("transform", newtransform);
        });
      });



  return (
    <div className="ayush_body_comb">
  <div class="ayush_cover">
    <div class="ayush_cover-bg"></div>
  </div>
  <div class="ayush_hexagon"></div>
</div>
  );
}


