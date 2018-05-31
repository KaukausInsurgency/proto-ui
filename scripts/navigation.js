$(function () {

	var width = $(window).width();
	if (width > 450) {
		$('.vnav-dropdown-content').addClass('vnav-expanded');	// by default the ribbon is expanded
		$('.vnav-btn-expander').children('i').addClass($('.prop-vnav').css('--font-arrow-collapse').trim());
		$('.vnav').addClass('vnav-expanded');
		$('.vnav').css('width', $('.prop-vnav').css('--max-width').trim());
	}
	else {
		$('.vnav-dropdown-content').addClass('vnav-collapsed');	// by default the ribbon is collapsed
		$('.js-nav-text').hide();
		$('.vnav').addClass('vnav-collapsed');
		$('.vnav-btn-expander').children('i').addClass($('.prop-vnav').css('--font-arrow-expand').trim());
	}

	$('.vnav-btn-expander').click(function () {
		var expander_icon = $(this).children('i');
		var expand_class = $('.prop-vnav').css('--font-arrow-expand').trim();
		var collapse_class = $('.prop-vnav').css('--font-arrow-collapse').trim();
		var fnc_animate = function (width, animComplete) {
			$('.vnav').stop(true).animate({
				width: width
			}, 200, animComplete);
		}

		if (expander_icon.hasClass(expand_class))	// expand the nav ribbon
		{
			expander_icon.removeClass(expand_class);
			expander_icon.addClass(collapse_class);
			fnc_animate($('.prop-vnav').css('--max-width').trim(),
				function () {
					$('.js-nav-text').show();
				});
			$('.vnav-dropdown-content').removeClass('vnav-collapsed');
			$('.vnav-dropdown-content').addClass('vnav-expanded');
			$('.vnav').removeClass('vnav-collapsed');
			$('.vnav').addClass('vnav-expanded');
		}
		else  // collapse the nav ribbon
		{
			expander_icon.removeClass(collapse_class);
			expander_icon.addClass(expand_class);
			$('.js-nav-text').hide();
			fnc_animate($('.prop-vnav').css('--min-width').trim());
			$('.vnav-dropdown-content').removeClass('vnav-expanded');
			$('.vnav-dropdown-content').addClass('vnav-collapsed');
			$('.vnav').removeClass('vnav-expanded');
			$('.vnav').addClass('vnav-collapsed');
		}
	});


	$('.vnav a').hover(function (e) {
		// only animate if the nav bar is collapsed
		if ($('.vnav').hasClass('vnav-collapsed')) {
			$(this).stop(true).animate({
				width: $('.prop-vnav').css('--max-width').trim()
			}, 200,
				function () {
					$(this).children('.js-nav-text').show();
				});
		}
	}, function (e) {
		// only animate if the nav bar is collapsed
		if ($('.vnav').hasClass('vnav-collapsed')) {
			$(this).children('.js-nav-text').hide();
			$(this).stop(true).animate({
				width: '100%'
			}, 200);
		}
	});
});