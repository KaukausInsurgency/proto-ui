$(document).ready(function () {
    var dayMonthYearFormat = '%e %b %Y';
    var hourMinuteSecondsFormat = '%H:%M:%S';

    var gaugesTooltipRender = function(sel) {
        var chart = $(sel).highcharts(),
        point = chart.series[0].points[0];
        point.onMouseOver(); // Show the hover marker
        chart.tooltip.refresh(point); // Show the tooltip
        chart.tooltip.hide = function () { console.log() };
    }

    var responsivePie = {
        rules: [{
            condition: {
                maxWidth: 196
            },
            chartOptions: {
                title: {
                    style: {
                        fontSize: '1.2em'
                    },
                },
            }
        }]
    }

    var responsiveGauges = {
        rules: [{
            condition: { minWidth: 136 },
            chartOptions: {
                title: {
                    style: {
                        fontSize: '1.5em'
                    },
                    y: 165
                },

                tooltip: {
                    enabled: true,
                    style: {
                        fontSize: '0.8em'
                    },
                    
                    pointFormat: '{series.name}<br><span style="font-size:1.7em; color: {point.color}; font-weight: bold">{point.y}%</span>',
                    positioner: function (labelWidth) {
                        return {
                            x: (this.chart.chartWidth - labelWidth) / 2,
                            y: (this.chart.plotHeight / 2) - 25
                        };
                    },
                    
                },

                pane: {
                    size: 130,
                },

                plotOptions: {
                    solidgauge: {
                        borderWidth: '16px',
                    }
                },
            }
        }, {
            condition: {
                maxWidth: 135
            },
            chartOptions: {
                title: {
                    style: {
                        fontSize: '1.2em'
                    },
                    y: 165
                },

                tooltip: {
                    enabled: true,
                    style: {
                        fontSize: '0.8em'
                    },
                   
                    pointFormat: '{series.name}<br><span style="font-size:1.5em; color: {point.color}; font-weight: bold">{point.y}%</span>',
                    positioner: function (labelWidth) {
                        return {
                            x: (this.chart.chartWidth - labelWidth) / 2,
                            y: (this.chart.plotHeight / 2) - 25
                        };
                    },    
                },

                pane: {
                    size: 100,
                },

                plotOptions: {
                    solidgauge: {
                        borderWidth: '12px',
                    }
                },
            }
        }]
    }


    // workaround to graphical glitches in highcharts line graphs that add negative fill color when mousing over
    // this appears to only happen in chrome with certain GPUs
    Highcharts.wrap(Highcharts.Series.prototype, 'drawGraph', function (proceed) {
        var lineWidth;
    
        proceed.call(this);
        if (this.graph) {
          lineWidth = this.graph.attr('stroke-width');
          if (
                /Chrome/.test(navigator.userAgent) &&
              lineWidth >= 2 &&
              lineWidth <= 6 &&
              this.graph.attr('stroke-linecap') === 'round'
          ) {
                this.graph.attr('stroke-linecap', 'square');
          }
        }
    });


    Highcharts.chart('hc-last-session', {

        chart: {
            //backgroundColor: null
        },

        title: {
            text: 'Last Session'
        },

        yAxis: {
            title: {
                text: 'Count'
            },
            allowDecimals: false
        },

        xAxis: {
            title: {
                text: 'Time (HH:MM:SS)'
            },
            type: 'datetime',

            dateTimeLabelFormats: {
                day: null,
                week: null,
                month: null,
                year: null,
                hour: '%H:%M',
                minute: '%H:%M:%S'
            }
        },

        tooltip: {
            dateTimeLabelFormats: {
                hour: '%H:%M',
                minute: '%H:%M:%S'
            },
            formatter: function () {
                return this.y + '<br/>' + Highcharts.dateFormat('%H:%M:%S', this.x);
            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 0,
                dataLabels: {
                    enabled: false,
                    formatter: function () {
                        return Highcharts.dateFormat('%H:%M:%S', this.x);
                    }
                },
            }
        },

        series: [
            {
                "name": "TAKEOFF",
                "data": [
                    {
                        "x": 443000,
                        "y": 1
                    },
                    {
                        "x": 2396000,
                        "y": 2
                    }
                ],
                "_colorIndex": 0,
                "_symbolIndex": 0
            },
            {
                "name": "SHOT",
                "data": [
                    {
                        "x": 779000,
                        "y": 1
                    },
                    {
                        "x": 922000,
                        "y": 2
                    },
                    {
                        "x": 987000,
                        "y": 3
                    },
                    {
                        "x": 1030000,
                        "y": 4
                    },
                    {
                        "x": 1096000,
                        "y": 5
                    },
                    {
                        "x": 1487000,
                        "y": 6
                    },
                    {
                        "x": 1532000,
                        "y": 7
                    },
                    {
                        "x": 2077000,
                        "y": 8
                    },
                    {
                        "x": 2108000,
                        "y": 9
                    },
                    {
                        "x": 2122000,
                        "y": 10
                    },
                    {
                        "x": 2122000,
                        "y": 11
                    },
                    {
                        "x": 2138000,
                        "y": 12
                    },
                    {
                        "x": 2156000,
                        "y": 13
                    },
                    {
                        "x": 2156000,
                        "y": 14
                    },
                    {
                        "x": 2156000,
                        "y": 15
                    },
                    {
                        "x": 2156000,
                        "y": 16
                    },
                    {
                        "x": 2156000,
                        "y": 17
                    },
                    {
                        "x": 2156000,
                        "y": 18
                    },
                    {
                        "x": 2156000,
                        "y": 19
                    },
                    {
                        "x": 2156000,
                        "y": 20
                    },
                    {
                        "x": 2156000,
                        "y": 21
                    },
                    {
                        "x": 2156000,
                        "y": 22
                    },
                    {
                        "x": 2156000,
                        "y": 23
                    },
                    {
                        "x": 2156000,
                        "y": 24
                    },
                    {
                        "x": 2156000,
                        "y": 25
                    },
                    {
                        "x": 2156000,
                        "y": 26
                    },
                    {
                        "x": 2156000,
                        "y": 27
                    },
                    {
                        "x": 2156000,
                        "y": 28
                    },
                    {
                        "x": 2156000,
                        "y": 29
                    },
                    {
                        "x": 2156000,
                        "y": 30
                    },
                    {
                        "x": 2156000,
                        "y": 31
                    },
                    {
                        "x": 2156000,
                        "y": 32
                    }
                ],
                "_colorIndex": 1,
                "_symbolIndex": 1
            },
            {
                "name": "HIT",
                "data": [
                    {
                        "x": 789000,
                        "y": 1
                    },
                    {
                        "x": 936000,
                        "y": 2
                    },
                    {
                        "x": 1044000,
                        "y": 3
                    },
                    {
                        "x": 1044000,
                        "y": 4
                    },
                    {
                        "x": 1108000,
                        "y": 5
                    },
                    {
                        "x": 1500000,
                        "y": 6
                    },
                    {
                        "x": 1500000,
                        "y": 7
                    },
                    {
                        "x": 1546000,
                        "y": 8
                    },
                    {
                        "x": 2081000,
                        "y": 9
                    },
                    {
                        "x": 2081000,
                        "y": 10
                    },
                    {
                        "x": 2112000,
                        "y": 11
                    },
                    {
                        "x": 2112000,
                        "y": 12
                    },
                    {
                        "x": 2158000,
                        "y": 13
                    },
                    {
                        "x": 2158000,
                        "y": 14
                    },
                    {
                        "x": 2158000,
                        "y": 15
                    },
                    {
                        "x": 2158000,
                        "y": 16
                    },
                    {
                        "x": 2158000,
                        "y": 17
                    },
                    {
                        "x": 2158000,
                        "y": 18
                    },
                    {
                        "x": 2158000,
                        "y": 19
                    },
                    {
                        "x": 2158000,
                        "y": 20
                    },
                    {
                        "x": 2158000,
                        "y": 21
                    },
                    {
                        "x": 2158000,
                        "y": 22
                    }
                ],
                "_colorIndex": 2,
                "_symbolIndex": 2
            },
            {
                "name": "KILL",
                "data": [
                    {
                        "x": 807000,
                        "y": 1
                    },
                    {
                        "x": 936000,
                        "y": 2
                    },
                    {
                        "x": 1046000,
                        "y": 3
                    },
                    {
                        "x": 1111000,
                        "y": 4
                    },
                    {
                        "x": 1503000,
                        "y": 5
                    },
                    {
                        "x": 1548000,
                        "y": 6
                    }
                ],
                "_colorIndex": 3,
                "_symbolIndex": 3
            },
            {
                "name": "LAND",
                "data": [
                    {
                        "x": 2332000,
                        "y": 1
                    },
                    {
                        "x": 2799000,
                        "y": 2
                    }
                ],
                "_colorIndex": 4,
                "_symbolIndex": 4
            },
            {
                "name": "SLING_HOOK",
                "data": [
                    {
                        "x": 2391000,
                        "y": 1
                    }
                ],
                "_colorIndex": 5,
                "_symbolIndex": 0
            },
            {
                "name": "SLING_UNHOOK",
                "data": [
                    {
                        "x": 2731000,
                        "y": 1
                    }
                ],
                "_colorIndex": 6,
                "_symbolIndex": 1
            },
            {
                "name": "PLAYER_LEAVE_UNIT",
                "data": [
                    {
                        "x": 2822000,
                        "y": 1
                    }
                ],
                "_colorIndex": 7,
                "_symbolIndex": 2
            }
        ],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        },

        exporting: { enabled: false },
        credits: {
            enabled: false
        },

    });




    Highcharts.chart('hc-last-5-sessions', {
        chart: {
            type: 'bar',
            //backgroundColor: null
        },
        title: {
            text: 'Last 5 Sessions'
        },
        xAxis: {
            categories: ['5', '4', '3', '2', '1'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Activity',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            },
            allowDecimals: false
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        exporting: { enabled: false },
        series: [
            {
                "name": "KILL",
                "data": [
                    0,
                    4,
                    2,
                    0,
                    6
                ],
            },
            {
                "name": "TAKEOFF",
                "data": [
                    15,
                    9,
                    2,
                    4,
                    2
                ],
            },
            {
                "name": "LAND",
                "data": [
                    15,
                    9,
                    2,
                    4,
                    2
                ],
            }
        ]
    });






    Highcharts.chart('hc-airframes-pie', {
        chart: {
            margin: [0, 0, 30, 0],
            spacingTop: 0,
            spacingBottom: 0,
            spacingLeft: 0,
            spacingRight: 0,
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            backgroundColor: null
        },
        title: {
            text: 'Top 5 Airframes',
            style: {
                fontSize: '18px'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                size: '75%',
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true,
                borderWidth: 0
            }
        },
        exporting: { enabled: false },
        credits: {
            enabled: false
        },
        responsive: responsivePie,
        series: [{
            name: 'Airframe',
            colorByPoint: true,
            data: [
                {
                    "name": "Mi-8MT",
                    "y": 13345
                },
                {
                    "name": "Ka-50",
                    "y": 8635
                },
                {
                    "name": "Su-25T",
                    "y": 5882
                },
                {
                    "name": "A-10C",
                    "y": 7201
                },
                {
                    "name": "F-18C",
                    "y": 2222
                }
            ]
        }]
    });






    Highcharts.chart('hc-score-pie', {
        chart: {
            margin: [0, 0, 30, 0],
            spacingTop: 0,
            spacingBottom: 0,
            spacingLeft: 0,
            spacingRight: 0,
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            backgroundColor: null
        },
        title: {
            text: 'Score',
            style: {
                fontSize: '18px'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                size: '75%',
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true,
                borderWidth: 0
            }
        },
        exporting: { enabled: false },
        credits: {
            enabled: false
        },
        responsive: responsivePie,
        series: [{
            name: 'Score',
            colorByPoint: true,
            data: [{
                name: 'Kills',
                y: 24
            }, {
                name: 'Resupplies',
                y: 7
            }, {
                name: 'Transport',
                y: 8
            }, {
                name: 'Slingload',
                y: 4
            }]
        }]
    });






    Highcharts.chart('hc-sortie-success', {

        chart: {
            margin: [0, 0, 50, 0],
            type: 'solidgauge',
            height: 190,
            backgroundColor: 'rgba(0,0,0,0)',
            spacingTop: 0,
            spacingBottom: 0,
            spacingLeft: 0,
            spacingRight: 0,
            backgroundColor: null
        },

        title: {
            text: 'Sortie',
            style: {
                fontSize: '1.8em'
            },
            margin: 1,
            y: 165
        },

        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '0.8em'
            },
            pointFormat: '{series.name}<br><span style="font-size:1.7em; color: {point.color}; font-weight: bold">{point.y}%</span>',
            positioner: function (labelWidth) {
                return {
                    x: (this.chart.chartWidth - labelWidth) / 2,
                    y: (this.chart.plotHeight / 2) - 25
                };
            },
            enabled: true
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            size: 130,
            background: {
                outerRadius: '87%',
                innerRadius: '63%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[3])
                    .setOpacity(0.3)
                    .get(),
                borderWidth: 0
            }
        },

        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                borderWidth: '16px',
                dataLabels: {
                    enabled: false
                },
                linecap: 'square',
                stickyTracking: false,
                rounded: true
            },
        },

        exporting: { enabled: false },

        credits: {
            enabled: false
        },

        responsive: responsiveGauges,

        series: [{
            name: 'Success',
            borderColor: Highcharts.getOptions().colors[3],
            data: [{
                color: Highcharts.getOptions().colors[3],
                radius: '75%',
                innerRadius: '75%',
                y: 77
            }]
        }],
    });




    Highcharts.chart('hc-sling-success', {

        chart: {
            margin: [0, 0, 50, 0],
            type: 'solidgauge',
            height: 190,
            backgroundColor: 'rgba(0,0,0,0)',
            spacingTop: 0,
            spacingBottom: 0,
            spacingLeft: 0,
            spacingRight: 0,
            backgroundColor: null
        },

        title: {
            text: 'Slingload',
            style: {
                fontSize: '1.8em'
            },
            margin: 1,
            y: 165
        },

        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '0.8em'
            },
            pointFormat: '{series.name}<br><span style="font-size:1.7em; color: {point.color}; font-weight: bold">{point.y}%</span>',
            positioner: function (labelWidth) {
                return {
                    x: (this.chart.chartWidth - labelWidth) / 2,
                    y: (this.chart.plotHeight / 2) - 25
                };
            },
            enabled: true
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            size: 130,
            background: {
                outerRadius: '87%',
                innerRadius: '63%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2])
                    .setOpacity(0.3)
                    .get(),
                borderWidth: 0
            }
        },

        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                borderWidth: '16px',
                dataLabels: {
                    enabled: false
                },
                linecap: 'square',
                stickyTracking: false,
                rounded: true
            }
        },

        exporting: { enabled: false },

        credits: {
            enabled: false
        },

        responsive: responsiveGauges,

        series: [{
            name: 'Success',
            borderColor: Highcharts.getOptions().colors[2],
            data: [{
                color: Highcharts.getOptions().colors[2],
                radius: '75%',
                innerRadius: '75%',
                y: 66
            }]
        }]
    });

    


    Highcharts.chart('hc-transport-success', {

        chart: {
            margin: [0, 0, 50, 0],
            type: 'solidgauge',
            height: 190,
            backgroundColor: 'rgba(0,0,0,0)',
            spacingTop: 0,
            spacingBottom: 0,
            spacingLeft: 0,
            spacingRight: 0,
            backgroundColor: null
        },

        title: {
            text: 'Transport',
            style: {
                fontSize: '1.8em'
            },
            margin: 1,
            y: 165
        },

        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '0.8em'
            },
            pointFormat: '{series.name}<br><span style="font-size:1.7em; color: {point.color}; font-weight: bold">{point.y}%</span>',
            positioner: function (labelWidth) {
                return {
                    x: (this.chart.chartWidth - labelWidth) / 2,
                    y: (this.chart.plotHeight / 2) - 25
                };
            },
            enabled: true
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            size: 130,
            background: {
                outerRadius: '87%',
                innerRadius: '63%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
                    .setOpacity(0.3)
                    .get(),
                borderWidth: 0
            }
        },

        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                borderWidth: '16px',
                dataLabels: {
                    enabled: false
                },
                linecap: 'square',
                stickyTracking: false,
                rounded: true
            }
        },

        exporting: { enabled: false },

        credits: {
            enabled: false
        },

        responsive: responsiveGauges,

        series: [{
            name: 'Success',
            borderColor: Highcharts.getOptions().colors[0],
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '75%',
                innerRadius: '75%',
                y: 90
            }]
        }]
    });

    gaugesTooltipRender('#hc-sortie-success');
    gaugesTooltipRender('#hc-sling-success');
    gaugesTooltipRender('#hc-transport-success');






    Highcharts.chart('hc-online-activity', {

        chart: {
            //backgroundColor: null,
            type: 'line'
        },

        title: {
            text: 'Online Time'
        },

        rangeSelector: {
            enabled: true,
            allButtonsEnabled: true,
            buttons: [{
                type: 'week',
                count: 1,
                text: 'Week',
            }, {
                type: 'month',
                count: 1,
                text: 'Month',
            }, {
                type: 'year',
                count: 1,
                text: 'Year'
            }, {
                type: 'all',
                text: 'All'
            }],
            buttonTheme: {
                width: 60
            },
            selected: 2
        },

        yAxis: {
            title: {
                text: 'Online'
            },
            type: 'datetime',
            allowDecimals: true,
            dateTimeLabelFormats: {
                day: null,
                week: null,
                month: null,
                year: null,
                hour: '%H:%M',
                minute: hourMinuteSecondsFormat
            }
        },

        xAxis: {
            title: {
                text: 'Time'
            },
            type: 'datetime',
            dateTimeLabelFormats: {
                day: dayMonthYearFormat
            }
        },

        tooltip: {
            dateTimeLabelFormats: {
                hour: '%H:%M',
                minute: hourMinuteSecondsFormat,
                minTickInterval: 3600 * 1000
            },
            formatter: function () {
                return Highcharts.dateFormat(hourMinuteSecondsFormat, this.y) + '<br/>' + Highcharts.dateFormat(dayMonthYearFormat, this.x);
            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 0,
                dataLabels: {
                    enabled: false,
                    formatter: function () {
                        return Highcharts.dateFormat('%H:%M:%S', this.x);
                    }
                },
            },
        },

        series: [
            {
                showInLegend: false,
                name: "Time",
                data: [
                    [Date.UTC(2018, 0, 14), 8420000],
                    [Date.UTC(2018, 0, 20), 7834000],
                    [Date.UTC(2018, 1, 2), 5834000],
                    [Date.UTC(2018, 1, 4), 7233000],
                    [Date.UTC(2018, 1, 26), 1400000],
                    [Date.UTC(2018, 2, 3), 3000000],
                    [Date.UTC(2018, 2, 4), 6430000],
                    [Date.UTC(2018, 4, 25), 5000000],
                    [Date.UTC(2018, 4, 26), 200000],
                    [Date.UTC(2018, 4, 27), 3400000],
                    [Date.UTC(2018, 4, 28), 7642000],
                    [Date.UTC(2018, 4, 29), 0],
                    [Date.UTC(2018, 4, 30), 0],
                    [Date.UTC(2018, 4, 31), 5300000],
                    [Date.UTC(2018, 5, 1), 900000],
                    [Date.UTC(2018, 5, 2), 9813000],
                    [Date.UTC(2018, 5, 3), 303000]
                ]
            }
        ],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        },

        exporting: { enabled: false },
        credits: {
            enabled: false
        },

    });














    Highcharts.chart('hc-total-sorties', {

        chart: {
            //backgroundColor: null,
            type: 'area'
        },

        title: {
            text: 'Sorties'
        },

        rangeSelector: {
            enabled: true,
            allButtonsEnabled: true,
            buttons: [{
                type: 'week',
                count: 1,
                text: 'Week',
            }, {
                type: 'month',
                count: 1,
                text: 'Month',
            }, {
                type: 'year',
                count: 1,
                text: 'Year'
            }, {
                type: 'all',
                text: 'All'
            }],
            buttonTheme: {
                width: 60
            },
            selected: 2
        },

        yAxis: {
            title: {
                text: 'Sorties'
            },
            allowDecimals: false,
        },

        xAxis: {
            title: {
                text: 'Time'
            },
            type: 'datetime',
            dateTimeLabelFormats: {
                day: dayMonthYearFormat
            }
        },

        tooltip: {
            dateTimeLabelFormats: {
                hour: '%H:%M',
                minute: hourMinuteSecondsFormat,
                minTickInterval: 3600 * 1000
            },
            formatter: function () {
                return Highcharts.dateFormat(dayMonthYearFormat, this.x) + '<br/>' +
                    'Sorties: ' + this.y + '<br/>' +
                    'Kills: ' + this.point.kills + '<br/>' +
                    'Deaths: ' + this.point.deaths;
            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 0,
                dataLabels: {
                    enabled: false,
                    formatter: function () {
                        return Highcharts.dateFormat('%H:%M:%S', this.x);
                    }
                },
            },
        },

        series: [
            {
                showInLegend: true,
                name: "Total",
                data: [
                    {
                        x: Date.UTC(2018, 0, 14),
                        y: 24,
                        kills: 34,
                        deaths: 7
                    },
                    {
                        x: Date.UTC(2018, 1, 2),
                        y: 4,
                        kills: 7,
                        deaths: 1
                    },
                    {
                        x: Date.UTC(2018, 1, 4),
                        y: 8,
                        kills: 13,
                        deaths: 4
                    },
                    {
                        x: Date.UTC(2018, 1, 26),
                        y: 9,
                        kills: 3,
                        deaths: 3
                    },
                    {
                        x: Date.UTC(2018, 2, 3),
                        y: 2,
                        kills: 0,
                        deaths: 1
                    },
                    {
                        x: Date.UTC(2018, 2, 4),
                        y: 1,
                        kills: 3,
                        deaths: 0
                    },
                    {
                        x: Date.UTC(2018, 4, 25),
                        y: 4,
                        kills: 5,
                        deaths: 0
                    },
                    {
                        x: Date.UTC(2018, 4, 26),
                        y: 8,
                        kills: 18,
                        deaths: 2
                    },
                    {
                        x: Date.UTC(2018, 4, 27),
                        y: 6,
                        kills: 13,
                        deaths: 4
                    },
                    {
                        x: Date.UTC(2018, 4, 28),
                        y: 12,
                        kills: 29,
                        deaths: 3
                    },
                    {
                        x: Date.UTC(2018, 4, 29),
                        y: 0,
                        kills: 0,
                        deaths: 0
                    },
                    {
                        x: Date.UTC(2018, 4, 30),
                        y: 0,
                        kills: 0,
                        deaths: 0
                    },
                    {
                        x: Date.UTC(2018, 5, 1),
                        y: 1,
                        kills: 0,
                        deaths: 0
                    },
                    {
                        x: Date.UTC(2018, 5, 2),
                        y: 6,
                        kills: 5,
                        deaths: 1
                    },
                    {
                        x: Date.UTC(2018, 5, 3),
                        y: 1,
                        kills: 0,
                        deaths: 0
                    }
                ]
            },
            {
                showInLegend: true,
                name: "Ka-50",
                data: [
                    {
                        x: Date.UTC(2018, 0, 14),
                        y: 14,
                        kills: 20,
                        deaths: 3
                    },
                    {
                        x: Date.UTC(2018, 1, 2),
                        y: 1,
                        kills: 4,
                        deaths: 0
                    },
                    {
                        x: Date.UTC(2018, 1, 4),
                        y: 2,
                        kills: 13,
                        deaths: 4
                    },
                    {
                        x: Date.UTC(2018, 1, 26),
                        y: 3,
                        kills: 3,
                        deaths: 3
                    },
                    {
                        x: Date.UTC(2018, 2, 3),
                        y: 0,
                        kills: 0,
                        deaths: 0
                    },
                    {
                        x: Date.UTC(2018, 2, 4),
                        y: 0,
                        kills: 0,
                        deaths: 0
                    },
                    {
                        x: Date.UTC(2018, 4, 25),
                        y: 2,
                        kills: 5,
                        deaths: 0
                    },
                    {
                        x: Date.UTC(2018, 4, 26),
                        y: 8,
                        kills: 18,
                        deaths: 2
                    },
                    {
                        x: Date.UTC(2018, 4, 27),
                        y: 2,
                        kills: 4,
                        deaths: 1
                    },
                    {
                        x: Date.UTC(2018, 4, 28),
                        y: 4,
                        kills: 19,
                        deaths: 2
                    },
                    {
                        x: Date.UTC(2018, 4, 29),
                        y: 0,
                        kills: 0,
                        deaths: 0
                    },
                    {
                        x: Date.UTC(2018, 4, 30),
                        y: 0,
                        kills: 0,
                        deaths: 0
                    },
                    {
                        x: Date.UTC(2018, 5, 1),
                        y: 1,
                        kills: 0,
                        deaths: 0
                    },
                    {
                        x: Date.UTC(2018, 5, 2),
                        y: 6,
                        kills: 5,
                        deaths: 1
                    },
                    {
                        x: Date.UTC(2018, 5, 3),
                        y: 1,
                        kills: 0,
                        deaths: 0
                    }
                ]
            },
            {
                showInLegend: true,
                name: "Mi-8",
                data: [
                    {
                        x: Date.UTC(2018, 0, 14),
                        y: 8,
                        kills: 0,
                        deaths: 2
                    },
                    {
                        x: Date.UTC(2018, 1, 2),
                        y: 1,
                        kills: 1,
                        deaths: 0
                    },
                    {
                        x: Date.UTC(2018, 1, 4),
                        y: 2,
                        kills: 1,
                        deaths: 0
                    },
                    {
                        x: Date.UTC(2018, 1, 26),
                        y: 1,
                        kills: 3,
                        deaths: 0
                    },
                    {
                        x: Date.UTC(2018, 2, 3),
                        y: 0,
                        kills: 0,
                        deaths: 0
                    },
                    {
                        x: Date.UTC(2018, 2, 4),
                        y: 0,
                        kills: 0,
                        deaths: 0
                    },
                    {
                        x: Date.UTC(2018, 4, 25),
                        y: 3,
                        kills: 0,
                        deaths: 0
                    },
                    {
                        x: Date.UTC(2018, 4, 26),
                        y: 4,
                        kills: 1,
                        deaths: 2
                    },
                    {
                        x: Date.UTC(2018, 4, 27),
                        y: 1,
                        kills: 0,
                        deaths: 0
                    },
                    {
                        x: Date.UTC(2018, 4, 28),
                        y: 2,
                        kills: 1,
                        deaths: 0
                    },
                    {
                        x: Date.UTC(2018, 4, 29),
                        y: 0,
                        kills: 0,
                        deaths: 0
                    },
                    {
                        x: Date.UTC(2018, 4, 30),
                        y: 0,
                        kills: 0,
                        deaths: 0
                    },
                    {
                        x: Date.UTC(2018, 5, 1),
                        y: 3,
                        kills: 7,
                        deaths: 1
                    },
                    {
                        x: Date.UTC(2018, 5, 2),
                        y: 2,
                        kills: 0,
                        deaths: 0
                    },
                    {
                        x: Date.UTC(2018, 5, 3),
                        y: 0,
                        kills: 0,
                        deaths: 0
                    }
                ]
            }

        ],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        },

        exporting: { enabled: false },
        credits: {
            enabled: false
        },

    });










    Highcharts.chart('hc-score-over-time', {

        chart: {
            //backgroundColor: null,
            type: 'line'
        },

        title: {
            text: 'Score'
        },

        rangeSelector: {
            enabled: true,
            allButtonsEnabled: true,
            buttons: [{
                type: 'week',
                count: 1,
                text: 'Week',
            }, {
                type: 'month',
                count: 1,
                text: 'Month',
            }, {
                type: 'year',
                count: 1,
                text: 'Year'
            }, {
                type: 'all',
                text: 'All'
            }],
            buttonTheme: {
                width: 60
            },
            selected: 2
        },

        yAxis: {
            title: {
                text: 'Count'
            },
            allowDecimals: false,
        },

        xAxis: {
            title: {
                text: 'Time'
            },
            type: 'datetime',
            dateTimeLabelFormats: {
                day: dayMonthYearFormat
            }
        },

        tooltip: {
            dateTimeLabelFormats: {
                hour: '%H:%M',
                minute: hourMinuteSecondsFormat,
                minTickInterval: 3600 * 1000
            },
            formatter: function () {
                return Highcharts.dateFormat(dayMonthYearFormat, this.x) + '<br/>' +
                    'Count: ' + this.y
            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 0,
                dataLabels: {
                    enabled: false,
                    formatter: function () {
                        return Highcharts.dateFormat('%H:%M:%S', this.x);
                    }
                },
            },
        },

        series: [
            {
                showInLegend: true,
                name: "Kills",
                data: [
                    {
                        x: Date.UTC(2018, 0, 14),
                        y: 4,
                    },
                    {
                        x: Date.UTC(2018, 1, 2),
                        y: 2
                    },
                    {
                        x: Date.UTC(2018, 1, 4),
                        y: 8
                    },
                    {
                        x: Date.UTC(2018, 1, 26),
                        y: 9
                    },
                    {
                        x: Date.UTC(2018, 2, 3),
                        y: 2
                    },
                    {
                        x: Date.UTC(2018, 2, 4),
                        y: 1
                    },
                    {
                        x: Date.UTC(2018, 4, 25),
                        y: 4
                    },
                    {
                        x: Date.UTC(2018, 4, 26),
                        y: 8
                    },
                    {
                        x: Date.UTC(2018, 4, 27),
                        y: 6
                    },
                    {
                        x: Date.UTC(2018, 4, 28),
                        y: 12
                    },
                    {
                        x: Date.UTC(2018, 4, 29),
                        y: 0
                    },
                    {
                        x: Date.UTC(2018, 4, 30),
                        y: 0
                    },
                    {
                        x: Date.UTC(2018, 5, 1),
                        y: 1
                    },
                    {
                        x: Date.UTC(2018, 5, 2),
                        y: 6
                    },
                    {
                        x: Date.UTC(2018, 5, 3),
                        y: 1
                    }
                ]
            },
            {
                showInLegend: true,
                name: "Slingloads",
                data: [
                    {
                        x: Date.UTC(2018, 0, 14),
                        y: 1,
                    },
                    {
                        x: Date.UTC(2018, 1, 2),
                        y: 2
                    },
                    {
                        x: Date.UTC(2018, 1, 4),
                        y: 1
                    },
                    {
                        x: Date.UTC(2018, 1, 26),
                        y: 0
                    },
                    {
                        x: Date.UTC(2018, 2, 3),
                        y: 0
                    },
                    {
                        x: Date.UTC(2018, 2, 4),
                        y: 3
                    },
                    {
                        x: Date.UTC(2018, 4, 25),
                        y: 1
                    },
                    {
                        x: Date.UTC(2018, 4, 26),
                        y: 2
                    },
                    {
                        x: Date.UTC(2018, 4, 27),
                        y: 1
                    },
                    {
                        x: Date.UTC(2018, 4, 28),
                        y: 3
                    },
                    {
                        x: Date.UTC(2018, 4, 29),
                        y: 0
                    },
                    {
                        x: Date.UTC(2018, 4, 30),
                        y: 7
                    },
                    {
                        x: Date.UTC(2018, 5, 1),
                        y: 1
                    },
                    {
                        x: Date.UTC(2018, 5, 2),
                        y: 1
                    },
                    {
                        x: Date.UTC(2018, 5, 3),
                        y: 0
                    }
                ]
            },
            {
                showInLegend: true,
                name: "Transport",
                data: [
                    {
                        x: Date.UTC(2018, 0, 14),
                        y: 5,
                    },
                    {
                        x: Date.UTC(2018, 1, 2),
                        y: 6
                    },
                    {
                        x: Date.UTC(2018, 1, 4),
                        y: 2
                    },
                    {
                        x: Date.UTC(2018, 1, 26),
                        y: 3
                    },
                    {
                        x: Date.UTC(2018, 2, 3),
                        y: 1
                    },
                    {
                        x: Date.UTC(2018, 2, 4),
                        y: 0
                    },
                    {
                        x: Date.UTC(2018, 4, 25),
                        y: 1
                    },
                    {
                        x: Date.UTC(2018, 4, 26),
                        y: 0
                    },
                    {
                        x: Date.UTC(2018, 4, 27),
                        y: 0
                    },
                    {
                        x: Date.UTC(2018, 4, 28),
                        y: 0
                    },
                    {
                        x: Date.UTC(2018, 4, 29),
                        y: 0
                    },
                    {
                        x: Date.UTC(2018, 4, 30),
                        y: 1
                    },
                    {
                        x: Date.UTC(2018, 5, 1),
                        y: 0
                    },
                    {
                        x: Date.UTC(2018, 5, 2),
                        y: 2
                    },
                    {
                        x: Date.UTC(2018, 5, 3),
                        y: 3
                    }
                ]
            },
            {
                showInLegend: true,
                name: "Resupplies",
                data: [
                    {
                        x: Date.UTC(2018, 0, 14),
                        y: 3,
                    },
                    {
                        x: Date.UTC(2018, 1, 2),
                        y: 1
                    },
                    {
                        x: Date.UTC(2018, 1, 4),
                        y: 0
                    },
                    {
                        x: Date.UTC(2018, 1, 26),
                        y: 0
                    },
                    {
                        x: Date.UTC(2018, 2, 3),
                        y: 8
                    },
                    {
                        x: Date.UTC(2018, 2, 4),
                        y: 4
                    },
                    {
                        x: Date.UTC(2018, 4, 25),
                        y: 1
                    },
                    {
                        x: Date.UTC(2018, 4, 26),
                        y: 0
                    },
                    {
                        x: Date.UTC(2018, 4, 27),
                        y: 3
                    },
                    {
                        x: Date.UTC(2018, 4, 28),
                        y: 5
                    },
                    {
                        x: Date.UTC(2018, 4, 29),
                        y: 6
                    },
                    {
                        x: Date.UTC(2018, 4, 30),
                        y: 1
                    },
                    {
                        x: Date.UTC(2018, 5, 1),
                        y: 1
                    },
                    {
                        x: Date.UTC(2018, 5, 2),
                        y: 0
                    },
                    {
                        x: Date.UTC(2018, 5, 3),
                        y: 0
                    }
                ]
            }
        ],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        },

        exporting: { enabled: false },
        credits: {
            enabled: false
        },

    });


    // special callback function that checks if a circe gauge graph has hit a responsive breakpoint
    // currently when the breakpoint on these charts is hit - the tooltip content disappears
    // this is because highcharts calls the hide() function on the tooltip
    // we need to force show the tooltip again after highcharts has finished redrawing the chart
    // because we cant control if our handler is the last to be called 
    // (we need highcharts to finish rendering first)
    // we fire off the re-render function in an async function that waits 1 second before rendering
    function sleep(duration) {
        return new Promise((resolve) => setTimeout(resolve, duration));
    }

    async function delayRenderGaugeTooltip($el) {
        await sleep(1000);
        gaugesTooltipRender($el);  
    }

    $(window).on('resize', function(){
        $('#hc-sortie-success, #hc-sling-success, #hc-transport-success').each(function() {
            var $this = $(this);

            // if this div has not had it's breakpoint hit yet, rerender the tooltip content
            if ($this.width() <= 135 && !$this.hasClass('js-breakpoint')) {
                $this.addClass('js-breakpoint');
                delayRenderGaugeTooltip($this);
                
            }
            else if ($this.width() > 135 && $this.hasClass('js-breakpoint')) {
                $this.removeClass('js-breakpoint');
                delayRenderGaugeTooltip($this);
            }
        })
    });
    
});