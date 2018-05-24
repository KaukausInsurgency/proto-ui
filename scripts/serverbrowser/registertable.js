function RegisterTable(tablesel, onClick)
{
    function RegisterHandlers() {
        $(tablesel + ' .js-clickable').click(onClick);
    };

    $(tablesel).dynatable({
        writers: {
            _rowWriter: myRowWriter,
            _cellWriter: myCellWriter
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

        return '<tr class="js-clickable">' + tr + '</tr>';
    };

    function myCellWriter(column, record) {
        var html = column.attributeWriter(record);
        return '<td>' + html + '</td>';
      };

    RegisterHandlers();
}