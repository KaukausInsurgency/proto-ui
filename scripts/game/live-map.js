livemap = (function () {
    var self = this;
    var icon_span = $('<span class="fa-stack fa-lg"></span>');
    var icon_border = $('<i class="fa fa-circle fa-stack-2x"></i>');
    var icon_capture_point = $('<i class="far fa-flag fa-stack-1x icon-color"></i>');

    function set_side_class(side) { // this function not available outside your module
        if (side === 0)
            return 'redfor-bg-icon';
        else if (side === 1)
            return 'blufor-bg-icon';
        else
            return 'neutral-bg-icon';
    }

    return {
        create_capture_point: function (side) {
            var icon_clone = icon_span.clone();
            var icon_border_clone = icon_border.clone();
            icon_border_clone.addClass(set_side_class(side));
            icon_clone.append(icon_border_clone);
            icon_clone.append(icon_capture_point);
            
            return icon_clone.prop('outerHTML');
        },
        b_func: function () {
            alert(my_var); // this function can also access my_var
        }
    };

})();


$(function () {
    (function ($) {
        $.fn.notif = function () {
            var obj = this;
            return {
                set: function (content) {
                    var span = $(obj).children('span.live-map-footer-item');
                    if (!span.children('a').length)
                        span.append("<a class='notification'>" + content + "</a>");
                    else
                        span.children('a').html(content);
                },
                remove: function () {
                    var span = $(obj).children('span.live-map-footer-item');
                    span.children('a').remove('');
                }
            }
        };
    })(jQuery);

    $("#viewport").mapbox(
        {
            mousewheel: true,
            defaultX: 0,
            defaultY: 0,
            afterZoom: function (level, layer, xcoord, ycoord, totalWidth, totalHeight, viewport) {
                // xcoord and ycoord are the new left/top coordinates of the current image
                $(".mrk").each(function (i) {
                    var x = 0;
                    var y = 0;
                    if (totalHeight === null || totalHeight === undefined) {
                        x = parseInt($(this).attr("originleft"));
                        y = parseInt($(this).attr("origintop"));
                    }
                    else {
                        var ratio = totalHeight / viewport.offsetHeight;
                        x = parseInt($(this).attr("originleft")) * ratio;
                        y = parseInt($(this).attr("origintop")) * ratio;
                    }


                    //var x = parseInt($(this).css("left").replace("px", ""))
                    //var y = parseInt($(this).css("top").replace("px", ""))

                    $(this).css({
                        position: 'absolute',
                        left: x + "px",
                        top: y + "px"
                    });

                });


            }
        });
    $(".map-control a").click(function () { //control panel 
        var viewport = $("#viewport");
        // this.className is same as method to be called 
        if (this.className === "zoom" || this.className === "back") {
            viewport.mapbox(this.className, 2);//step twice 
        }
        else {
            viewport.mapbox(this.className);
        }
        return false;
    });
});