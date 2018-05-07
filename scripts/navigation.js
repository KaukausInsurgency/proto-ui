$(function() {
	$('.vnav-dropdown-content').addClass('vnav-collapsed');	// by default the ribbon is collapsed
	$('.js-nav-text').hide();	
	$('.vnav-btn-expander').children('i').addClass($('.prop-vnav').css('--font-arrow-expand').trim());
	$('.vnav-btn-expander').click(function()
	{
		var expander_icon = $('.vnav-btn-expander').children('i');
		var expand_class = $('.prop-vnav').css('--font-arrow-expand').trim();
		var collapse_class = $('.prop-vnav').css('--font-arrow-collapse').trim();
		var fnc_animate = function(width, animComplete)
		{
			$('.vnav').stop(true).animate({
				width: width
			}, 200, animComplete);
		}
		
		if (expander_icon.hasClass(expand_class))	// expand the nav ribbon
		{
			expander_icon.removeClass(expand_class);
			expander_icon.addClass(collapse_class);
			fnc_animate($('.prop-vnav').css('--max-width').trim(), 
				function()
				{
					$('.js-nav-text').show();
				});
			$('.vnav-dropdown-content').removeClass('vnav-collapsed');
			$('.vnav-dropdown-content').addClass('vnav-expanded');
		}
		else  // collapse the nav ribbon
		{
			expander_icon.removeClass(collapse_class);
			expander_icon.addClass(expand_class);	
			$('.js-nav-text').hide();		
			fnc_animate($('.prop-vnav').css('--min-width').trim());
			$('.vnav-dropdown-content').removeClass('vnav-expanded');			
			$('.vnav-dropdown-content').addClass('vnav-collapsed');
		}		
	});  
});