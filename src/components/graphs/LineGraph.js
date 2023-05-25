import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { data as all_data } from '../../js/data';

export default function LineGraph({
    category,
    ecosystem
}) {
    const data = all_data[category][ecosystem+"_line"];
    const options = {
        chart: {
            type: 'column',
            height: data.height_ratio + '%',
        },
        title: {
            text: data.title
        },
        xAxis: {
            tickInterval: 12,
            tickWidth: 1,
            title: {
                text: data.label_x
            },
            labels: {
                rotation: 0,
                x: 10,
                overflow: 'allow',
                style: {
                    fontSize: '18px',
                }
            },
            categories: data.x_categories
        },
        yAxis: [
            {
                min: 0,
                title: {
                    text: data.label_y
                },
                stackLabels: {
                    enabled: false,
                }
            },
            { // Secondary yAxis
                tickPositioner: function () {
                    var positions = [],
                        tick = 0,
                        increment = Math.ceil((this.dataMax - 0) / 3);
    
                    if (this.dataMax !== null && this.dataMin !== null) {
                        for (tick; tick - increment <= this.dataMax; tick += increment) {
                            positions.push(tick);
                        }
                    }
                    return positions;
                },
                title: {
                    text: data.label_y_secondary,
                },
                labels: {
                    overflow: 'allow',
                    y: 4,
                    style: {
                        fontSize: '18px',
                    },
                    format: '{value}%',
                },
                opposite: true,
            }],
        navigation: {
            buttonOptions: {
                verticalAlign: 'bottom',
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                groupPadding: 0,
                pointPadding: 0,
                dataLabels: {
                    enabled: false
                },
            }
        },
        series: data.data,
    };
    return (
        <div className={`highcharts-graph line-graph ${category}-line-graph`}>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}