iconBuilder = (function () {
    var self = this;
    var iconSpan = $('<span class="fa-stack fa-lg"></span>');
    var iconBorder = $('<i class="fa fa-circle fa-stack-2x"></i>');
    var iconCapturePoint = $('<i class="far fa-flag fa-stack-1x icon-color"></i>');
    var iconDepot = $('<i class="fas fa-warehouse fa-stack-1x icon-color"></i>');
    var iconAirport = $('<i class="fas fa-plane fa-rotate-45 fa-stack-1x icon-color"></i>')
    var iconFARP = $('<i class="fas fa-hospital-symbol fa-stack-1x icon-color"></i>')

    function setSideClass(side) { // this function not available outside your module
        if (side === 0)
            return 'redfor-bg-icon';
        else if (side === 1)
            return 'blufor-bg-icon';
        else
            return 'neutral-bg-icon';
    }

    function createIconBase(side) {
        var iconClone = iconSpan.clone();
        var iconBorderClone = iconBorder.clone();
        iconBorderClone.addClass(setSideClass(side));
        iconClone.append(iconBorderClone);
        return iconClone;
    }

    function create(side, type) {
        var icon = createIconBase(side);
        switch (String(type)) {
            case "AIRPORT":
                icon.append(iconAirport);   
            break;
            case "DEPOT":
                icon.append(iconDepot);  
            break;
            case "CAPTUREPOINT":
                icon.append(iconCapturePoint);   
            break;
            case "FARP":
                icon.append(iconFARP);  
            break;
            default:

            break;
        }

        return icon.prop('outerHTML');
    }

    return {
        capturePoint: function (side) { 
            return create(side, "CAPTUREPOINT");
        },
        depot: function(side) {
            return create(side, "DEPOT");
        },
        airport: function(side) {
            return create(side, "AIRPORT");
        },
        farp: function(side) {
            return create(side, "FARP");
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