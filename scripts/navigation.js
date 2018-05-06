$(function() {
	$('.dropdown-content').addClass('nav-collapsed');	// by default the ribbon is collapsed
	$('.js-nav-text').hide();	
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
				$('.js-nav-text').show();
			});
			$('.dropdown-content').removeClass('nav-collapsed');
			$('.dropdown-content').addClass('nav-expanded');
		}
		else  // collapse the nav ribbon
		{
			expander_icon.removeClass('fa-angle-double-left');
			expander_icon.addClass('fa-angle-double-right');	
			$('.js-nav-text').hide();		
			$('.sidenav').stop(true).animate({
				width: $('.prop-nav').css('--min-width').trim()
			}, 200);
			$('.dropdown-content').removeClass('nav-expanded');			
			$('.dropdown-content').addClass('nav-collapsed');
		}		
	});  
	
	$('.server-dropdown').click(function()
	{
		var container = $(this.closest('.server-dropdown'));
		container.toggleClass('js-flyout');
		if (container.hasClass('js-flyout'))
			container.children('.server-flyout-content').css('display','block');
		else
			container.children('.server-flyout-content').css('display','none');
	});

	$("body").click
    (
        function(e)
        {
            if(!$(e.target).closest(".server-dropdown").length)
            {
				$('.server-dropdown').removeClass('js-flyout');
				$('.server-flyout-content').css('display','none');
            }
        }
    );
});