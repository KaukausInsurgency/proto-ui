function RegisterTable(tablesel, onClick)
{
    function RegisterHandlers() {
        $(tablesel + ' .clickable-row').click(onClick);
    };

    $(tablesel).dynatable({
        writers: {
            _rowWriter: myRowWriter
        }
    }).bind('dynatable:afterUpdate', processingComplete);

    function processingComplete(a) {
        RegisterHandlers();
    };

    function myRowWriter(rowIndex, record, columns, cellWriter) {
        var tr = '';

        // grab the record's attribute for each column
        for (var i = 0, len = columns.length; i < len; i++) {
            tr += cellWriter(columns[i], record);
        }

        return '<tr class="clickable-row">' + tr + '</tr>';
    };

    RegisterHandlers();
}