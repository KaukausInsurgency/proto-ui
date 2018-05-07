$(function() {
    (function( $ ){
        $.fn.notif = function() {
          var obj = this;
          return {
              set: function(content)
              {
                var span = $(obj).children('span.live-map-footer-item');
                if (!span.children('a').length)
                    span.append("<a class='notification'>" + content + "</a>");
                else
                    span.children('a').html(content);
              },
              remove: function()
              {
                var span = $(obj).children('span.live-map-footer-item');
                span.children('a').remove('');
              }
          }
        };
      })( jQuery );

});