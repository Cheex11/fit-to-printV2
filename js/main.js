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
	$('.wp8').waypoint(function() {
		$('.wp8').addClass('animated fadeInLeft');
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

jQuery(document).ready(function ($) {

    var jssor_1_options = {
      $AutoPlay: true,
      $Idle: 0,
      $AutoPlaySteps: 4000000,
      $SlideDuration: 1600,
      $SlideEasing: $Jease$.$Linear,
      $PauseOnHover: 4,
      $SlideWidth: 180,
      $Cols: 7,
    };

    var jssor_2_options = {
      $AutoPlay: true,
      $Idle: 0,
      $AutoPlaySteps: 4000000,
      $SlideDuration: 1600,
      $SlideEasing: $Jease$.$Linear,
      $PauseOnHover: 4,
      $SlideWidth: 200,
      $Cols: 7,
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
    var jssor_2_slider = new $JssorSlider$("jssor_2", jssor_2_options);

    //responsive code begin
    //you can remove responsive code if you don't want the slider scales while window resizing
    function ScaleSlider() {
        var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
        var divSize = refSize


        if (refSize < 725) {
        	refSize = 725
        }

        if (refSize) {
            refSize = Math.min(refSize, 809);
            jssor_1_slider.$ScaleWidth(refSize);
            jssor_2_slider.$ScaleWidth(refSize);
            $('#jssor_1').width(divSize);
            $('#jssor_2').width(divSize);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }
    ScaleSlider();
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    //responsive code end
});
