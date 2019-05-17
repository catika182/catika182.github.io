$(document).ready(function(){

	// alert('hello');
// images layout using Masory layout libraries.
$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: 120,
  horizontalOrder: true
});


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

// -----------------FancyBox---------------
// for images on gallery
$('data-fancybox="gallery"').fancybox({
  buttons : [
    'share',
    'fullScreen',
    'close'
  ],
  thumbs : {
    autoStart : true
  }
});
$().fancybox({
    selector : '.imglist a:visible'
// });

// ----------------StickyHeader------------
// stickyheader
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};


