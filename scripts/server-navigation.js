$(function() {  
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