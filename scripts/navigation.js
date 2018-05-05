$(function() {
	$('.dropdown-content').addClass('nav-expanded');	// by default the ribbon is nav-expanded
	$('body').addClass('nav-expanded');
	
	$('.nav-expander').click(function()
	{
		var expander_icon = $('.js-expander-icon');
		if (expander_icon.hasClass('fa-angle-double-right'))	// expand the nav ribbon
		{
			expander_icon.removeClass('fa-angle-double-right');
			expander_icon.addClass('fa-angle-double-left');
			$('.sidenav').stop(true).animate({
				width: $('.prop-nav').css('--max-width').trim()
			}, 200, function()
			{
				$('.nav-text').show();
			});
			$('.dropdown-content').removeClass('nav-collapsed');
			$('.dropdown-content').addClass('nav-expanded');
			$('body').removeClass('nav-collapsed');
			$('body').addClass('nav-expanded');
		}
		else  // collapse the nav ribbon
		{
			expander_icon.removeClass('fa-angle-double-left');
			expander_icon.addClass('fa-angle-double-right');	
			$('.nav-text').hide();		
			$('.sidenav').stop(true).animate({
				width: $('.prop-nav').css('--min-width').trim()
			}, 200);
			$('.dropdown-content').removeClass('nav-expanded');			
			$('.dropdown-content').addClass('nav-collapsed');
			$('body').removeClass('nav-expanded');
			$('body').addClass('nav-collapsed');
		}		
	});   
});