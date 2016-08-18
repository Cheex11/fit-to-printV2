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
	    offset: '45%'
	  })
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInLeft');
	}, {
		offset: '55%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInRight');
	}, {
		offset: '55%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInLeft');
	}, {
		offset: '55%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInRight');
	}, {
		offset: '55%'
	});
	$('.wp7').waypoint(function() {
		$('.wp7').addClass('animated fadeInUp');
	}, {
		offset: '70%'
	});
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
