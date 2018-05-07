$(function() {
    $('.chat-layout').click(function()
    {
        $(this).children('.chat-window').css('display','block');
    });

    $("body").click
    (
        function(e)
        {
            if(!$(e.target).closest(".chat-layout").length)
            {
                $(".chat-window").css('display','');
            }
        }
    );

    (function( $ ){
        $.fn.ki = function() {
          var obj = this;
          return {
              add: function(username, side, text)
              {
                  var chat_faction = "chat-neutral";
                  if (side == 0)
                    chat_faction = "chat-redfor";
                  else if (side == 1)
                    chat_faction = "chat-blufor";

                obj.append("<div class='chat-message'><span class='chat-username " + 
                    chat_faction + "'>" + username + "</span><span class='chat-body'> : " +
                    text + "</span></div>");

                obj.animate({ scrollTop: obj.prop("scrollHeight")}, 1000);
              }
          }
        };
      })( jQuery );

});