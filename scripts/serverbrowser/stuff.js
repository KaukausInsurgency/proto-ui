$(document).ready(function () {
    RegisterTable('#servers-table', function () {
        var serverIDDiv = $(this).closest('tr').find('.ServerID');
        var id = parseInt(serverIDDiv.text());
        var url = '@Url.Action("Game", "Servers")' + "?serverID=" + id;
        window.location.href = url;
        return false;
    });

    $('.clickable-img').hover(function () {
        $(this).css('cursor', 'pointer');
        $(this).css('background-color', '#B5B5B5');
    }, function () {
        $(this).css('background-color', '');
    });

    $('.clickable-img').click(function () {
        var serverIDDiv = $(this).closest('tr').find('.ServerID');
        var id = parseInt(serverIDDiv.text());
        var url = '@Url.Action("ServerStats", "Statistics")' + "?serverID=" + id;
        window.location.href = url;
        return false;
    });

    $('.clickable-img').tooltipster({
        theme: 'tooltipster-noir'
    });   
});