$(function () {

    // Apply line color to each column
    $('.dash-columns').each(function (i) {
        var cl = "";
        switch (i) {
            case 0:
                cl = 'dash-col-lblue';
                break;
            case 1:
                cl = 'dash-col-lorange';
                break;
            case 2:
                cl = 'dash-col-lred';
                break;
            case 3:
                cl = 'dash-col-lgreen';
                break;
            case 4:
                cl = 'dash-col-lgold';
                break;
            case 5:
                cl = 'dash-col-lpurple';
                break;
            case 6:
                cl = 'dash-col-orange';
                break;
            case 7:
                cl = 'dash-col-tan';
                break;
            case 8:
                cl = 'dash-col-green';
                break;
            case 9:
                cl = 'dash-col-brown';
                break;
            case 10:
                cl = 'dash-col-dpink';
                break;
            case 11:
                cl = 'dash-col-dark';
                break;
            case 12:
                cl = 'dash-col-gray';
                break;
            default:
                cl = 'dash-col-lblue';
        };

        $(this).addClass(cl);
    });
});
