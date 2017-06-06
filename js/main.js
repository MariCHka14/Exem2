$(document).ready(function(){
  $('.bo-team-slider').slick({
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	autoplaySpeed: 4000,
  	
  });
});

$('.bo-header-nav').on('click', 'a', function(enent){
	enent.preventDefault();
	var link = $(this).attr('href');

	var distanse = $(link).offset().top;
	$('html, body').animate({
		scrollTop: distanse
	}, 500);
})

// $(window).scroll(function(){
// 	var dist = $('#about').offset().top;
// 		if ($(window).scrollTop() >= dist){ 
// 			$('.ch-container-logo').css('background', 'rgba(255, 255, 255, 0.7)');
				
// 		}else{
// 			$('.ch-container-logo').css('background', 'transparent');
// 		}
// });


$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-item-size',
  percentPosition: true,
  horizontalOrder: true,
  gutter: 5
});

var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    columnWidth: '.grid-item-size',
    gutter: 5,
    horizontalOrder: true
  }
})


$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});




