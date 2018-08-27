$(document).ready(function(){

	// alert('hello');
// images layout using Masory layout libraries.
$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});

// Get value of class of more to show hidden text.
// on click get value of hidden text to slideDown().else
// on click less return paragraph to be hidden.
	$('.readmore a').click(function(){
		event.preventDefault();
		$('#show-this-on-click').slideDown();

		$('.readmore').hide();
		$('.readless').show();
	})

	$('.readless a').click(function(){
		event.preventDefault();
		$('#show-this-on-click').slideUp();

		$('.readless').hide();
		$('.readmore').show();
	});
// ---------------------------------------------------
// Get value of class of more to show hidden text.
// on click get value of hidden text to slideDown().else
// on click less return paragraph to be hidden.

// -------------------------------
	$('.more a').click(function(){
		event.preventDefault();
		$('#campsite').slideDown();
		
		$('.more').hide();
		$('.less').show();
	});

	$('.less a').click(function(){
		event.preventDefault();

		$('#campsite').slideUp();

		$('.less').hide();
		$('.more').show();
	});
});	