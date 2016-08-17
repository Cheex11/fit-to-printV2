$( document ).ready(function() {
	var waypoints = $('.wp1').waypoint({
	  handler: function(direction) {
	    $('.wp1').addClass('animated fadeInLeft')
	  },
	    offset: '60%'
	  })

	$('.wp2').waypoint({
	  handler: function(direction) {
	    $('.wp2').addClass('animated fadeInUp')
	  },
	    offset: '60%'
	  })

});


$( document ).ready(function() {
	$( ".img-responsive" ).mouseover(function() {
		// console.log($(this).attr("src"));
		// console.log($(this).closest('.portfolio_section').find('.hovered-selection'));
		img = $(this).attr("src");
		console.log(img);
		$(this).closest('.portfolio_section').find('.portfolio_square_show').css('background-image','url(' + img + ')');
	});
});
