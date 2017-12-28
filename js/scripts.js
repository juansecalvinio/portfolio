$(document).ready(function(){

  $('.slider').unslider({
    arrows: false,
    autoplay: false
  });

  $('.elementos a').click(function(e){
    e.preventDefault();
    var nombre = $(this).attr('value');
    var element = $('#' + nombre);
    console.log(element);
    $('html, body').animate({
      scrollTop: element.offset().top - 10
    }, 200);
  });

  $('.up').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.up').slideDown(300);
		} else {
			$('.up').slideUp(300);
		}
	});

});
