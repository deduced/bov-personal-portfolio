//@TODO -- use a loop

$(document).ready(function() {

  //set first slider button/item to active

  $('#slider-1 .c-slider__bullet').first().addClass('c-slider__bullet--active');
  $('#slider-1 .c-slider__item').first().addClass('c-slider__item--active');

  //slider 1 click function
  $('#slider-1 .c-slider__bullet').click( function(){
    var $this = $(this);
    var $siblings = $this.parent().children();
    var position = $siblings.index($this);

    $('#slider-1 .c-slider__item').removeClass('c-slider__item--active').eq(position).addClass('c-slider__item--active');
    $('#slider-1 .c-slider__bullet').removeClass('c-slider__bullet--active').eq(position).addClass('c-slider__bullet--active');
  });

  //set second slider button/item to active

  $('#slider-2 .c-slider__bullet').first().addClass('c-slider__bullet--active');
  $('#slider-2 .c-slider__item').first().addClass('c-slider__item--active');

  //slider 2 click function
  $('#slider-2 .c-slider__bullet').click( function(){
    var $this = $(this);
    var $siblings = $this.parent().children();
    var position = $siblings.index($this);

    $('#slider-2 .c-slider__item').removeClass('c-slider__item--active').eq(position).addClass('c-slider__item--active');
    $('#slider-2 .c-slider__bullet').removeClass('c-slider__bullet--active').eq(position).addClass('c-slider__bullet--active');
  });

  //set 3rd slider button/item to active

  $('#slider-3 .c-slider__bullet').first().addClass('c-slider__bullet--active');
  $('#slider-3 .c-slider__item').first().addClass('c-slider__item--active');

  //slider 3 click function
  $('#slider-3 .c-slider__bullet').click( function(){
    var $this = $(this);
    var $siblings = $this.parent().children();
    var position = $siblings.index($this);

    $('#slider-3 .c-slider__item').removeClass('c-slider__item--active').eq(position).addClass('c-slider__item--active');
    $('#slider-3 .c-slider__bullet').removeClass('c-slider__bullet--active').eq(position).addClass('c-slider__bullet--active');
  });

  //set 4th slider button/item to active

  $('#slider-4 .c-slider__bullet').first().addClass('c-slider__bullet--active');
  $('#slider-2 .c-slider__item').first().addClass('c-slider__item--active');

  //slider 4 click function
  $('#slider-4 .c-slider__bullet').click( function(){
    var $this = $(this);
    var $siblings = $this.parent().children();
    var position = $siblings.index($this);

    $('#slider-4 .c-slider__item').removeClass('c-slider__item--active').eq(position).addClass('c-slider__item--active');
    $('#slider-4 .c-slider__bullet').removeClass('c-slider__bullet--active').eq(position).addClass('c-slider__bullet--active');
  });

  //set 5th slider button/item to active

  $('#slider-6 .c-slider__bullet').first().addClass('c-slider__bullet--active');
  $('#slider-2 .c-slider__item').first().addClass('c-slider__item--active');

  //slider 5 click function
  $('#slider-6 .c-slider__bullet').click( function(){
    var $this = $(this);
    var $siblings = $this.parent().children();
    var position = $siblings.index($this);

    $('#slider-6 .c-slider__item').removeClass('c-slider__item--active').eq(position).addClass('c-slider__item--active');
    $('#slider-6 .c-slider__bullet').removeClass('c-slider__bullet--active').eq(position).addClass('c-slider__bullet--active');
  });

});
