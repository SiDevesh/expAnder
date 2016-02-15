/* ---------------------------------------
   * Text area expandable fields plugins: expReset() and expToggle()
 * by Swapnil Devesh (sid.swapnildevesh@gmail.com)
 * Copyright (c) Swapnil Devesh
 * Licensed under the MIT
 * this makes all properly formatted <p> or other text areaas into expandable fields,
   with a button to expand field if it crosses 3 lines height.

   FORMAT:
    <div class="row expandblP desc">
      <h3>Description</h3>
      <div class="dontdisp3test" style="height:3em;display:none;"></div>
      <p class="dontdisp" style="display:none;"><%= @course.description %></p>
      <p class="expArea"><%= @course.description %></p>
      <div class="row expRow" style="display:none;">
        <a href="javascript:void(0)" class="btn center-block expButton">Read More</a>
      </div>
    </div>
--------------------------------------- */
(function( $ ) {
    $.fn.expReset = function() {
      this.each( function() {
        if ( $(this).find('.dontdisp').height() > $(this).find('.dontdisp3test').height() ) {
          $(this).find('.expArea').addClass("ellip-3");
          $(this).find('.expRow').css("display", "initial");
          $(this).find('.expRow').find('.expButton').text("Read More");
        }
        else {
          $(this).find('.expArea').removeClass("ellip-3");
          $(this).find('.expRow').css("display", "none");
          $(this).find('.expRow').find('.expButton').text("Read More");
        }
      });
        return this;
    };
}( jQuery ));


(function( $ ) {
    $.fn.expToggle = function() {
      this.each( function() {
        if ( $(this).find('.expArea').hasClass("ellip-3") ) {
          $(this).find('.expArea').removeClass("ellip-3");
          $(this).find('.expRow').find('.expButton').text("Read Less");
        }
        else {
          $(this).find('.expArea').addClass("ellip-3");
          $(this).find('.expRow').find('.expButton').text("Read More");
        }
      });
        return this;
    };
}( jQuery ));
