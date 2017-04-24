$(document).ready(function() {

  $('#slider-1 .c-slider__bullet').first().addClass('c-slider__bullet--active');
  $('#slider-1 .c-slider__item').first().addClass('c-slider__item--active');

  $('#slider-1 .c-slider__bullet').click( function(){
    var $this = $(this);
    var $siblings = $this.parent().children();
    var position = $siblings.index($this);

    $('#slider-1 .c-slider__item').removeClass('c-slider__item--active').eq(position).addClass('c-slider__item--active');
    $('#slider-1 .c-slider__bullet').removeClass('c-slider__bullet--active').eq(position).addClass('c-slider__bullet--active');
  });

  $('#slider-2 .c-slider__bullet').first().addClass('c-slider__bullet--active');
  $('#slider-2 .c-slider__item').first().addClass('c-slider__item--active');

  $('#slider-2 .c-slider__bullet').click( function(){
    var $this = $(this);
    var $siblings = $this.parent().children();
    var position = $siblings.index($this);

    $('#slider-2 .c-slider__item').removeClass('c-slider__item--active').eq(position).addClass('c-slider__item--active');
    $('#slider-2 .c-slider__bullet').removeClass('c-slider__bullet--active').eq(position).addClass('c-slider__bullet--active');
  });

  $('#slider-3 .c-slider__bullet').first().addClass('c-slider__bullet--active');
  $('#slider-3 .c-slider__item').first().addClass('c-slider__item--active');

  $('#slider-3 .c-slider__bullet').click( function(){
    var $this = $(this);
    var $siblings = $this.parent().children();
    var position = $siblings.index($this);

    $('#slider-3 .c-slider__item').removeClass('c-slider__item--active').eq(position).addClass('c-slider__item--active');
    $('#slider-3 .c-slider__bullet').removeClass('c-slider__bullet--active').eq(position).addClass('c-slider__bullet--active');
  });

  $('#slider-4 .c-slider__bullet').first().addClass('c-slider__bullet--active');
  $('#slider-2 .c-slider__item').first().addClass('c-slider__item--active');

  $('#slider-4 .c-slider__bullet').click( function(){
    var $this = $(this);
    var $siblings = $this.parent().children();
    var position = $siblings.index($this);

    $('#slider-4 .c-slider__item').removeClass('c-slider__item--active').eq(position).addClass('c-slider__item--active');
    $('#slider-4 .c-slider__bullet').removeClass('c-slider__bullet--active').eq(position).addClass('c-slider__bullet--active');
  });

  $('#slider-6 .c-slider__bullet').first().addClass('c-slider__bullet--active');
  $('#slider-2 .c-slider__item').first().addClass('c-slider__item--active');

  $('#slider-6 .c-slider__bullet').click( function(){
    var $this = $(this);
    var $siblings = $this.parent().children();
    var position = $siblings.index($this);

    $('#slider-6 .c-slider__item').removeClass('c-slider__item--active').eq(position).addClass('c-slider__item--active');
    $('#slider-6 .c-slider__bullet').removeClass('c-slider__bullet--active').eq(position).addClass('c-slider__bullet--active');
  });

});
