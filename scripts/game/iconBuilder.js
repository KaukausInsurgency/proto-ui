var iconBuilder = (function () {
    var self = this;
    var iconSpan = $('<span class="fa-stack fa-lg"></span>');
    var iconBorder = $('<i class="fa fa-circle fa-stack-2x"></i>');
    var iconCapturePoint = $('<i class="far fa-flag fa-stack-1x icon-color"></i>');
    var iconDepot = $('<i class="fas fa-warehouse fa-stack-1x icon-color"></i>');
    var iconAirport = $('<i class="fas fa-plane fa-rotate-45 fa-stack-1x icon-color"></i>')
    var iconFARP = $('<i class="fas fa-hospital-symbol fa-stack-1x icon-color"></i>')

    function getSideClass(side) { // this function not available outside your module
        switch (side) {
            case 1:
                return 'redfor-bg-icon';
                break;
            case 2:
                return 'blufor-bg-icon';
                break;
            default:
                return 'neutral-bg-icon';
                break;
        }
    }

    function createIconBase(side) {
        var iconClone = iconSpan.clone();
        var iconBorderClone = iconBorder.clone();
        iconBorderClone.addClass(getSideClass(side));
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
        create: create,
        capturePoint: function (side) {
            return create(side, "CAPTUREPOINT");
        },
        depot: function (side) {
            return create(side, "DEPOT");
        },
        airport: function (side) {
            return create(side, "AIRPORT");
        },
        farp: function (side) {
            return create(side, "FARP");
        }
    };

})();