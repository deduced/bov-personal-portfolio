
$(document).ready(function() {

  //grab slider components to minimize dom calls
  var $sliders = $(".c-slider");

  //loop through to set active for item/bullet on click
  $sliders.each(function(index) {
    var $sliderBullets = $(this).find(".c-slider__bullet");
    var $sliderItems = $(this).find(".c-slider__item");

    $sliderBullets.on('click', function() {

      var $siblings = $(this).parent().children();
      var position = $siblings.index($(this));

      $sliderBullets.removeClass("c-slider__bullet--active").eq(position).addClass("c-slider__bullet--active");
      $sliderItems.removeClass("c-slider__item--active").eq(position).addClass("c-slider__item--active");
    });
  });
});
