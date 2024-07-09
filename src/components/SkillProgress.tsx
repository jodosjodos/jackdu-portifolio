//@ts-nocheck
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const SkillProgress = ({categories,seriesData}:{categories:string[],seriesData:number[]}) => {
    const options = {
        chart: {
            type: 'bar',
        height: '400px',
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderColor:'transparent',
      },
      legend: {
        enabled: false 
    },
        title: {
            text: '',
            align: 'left'
        },
      xAxis: {
          color:"rgb(102, 102, 102)",
            categories: categories,
            title: {
                text: null
            },
            gridLineWidth: 0,
            lineWidth: 0
        },
        yAxis: {
            min: 0,
            title: {
                text: '',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            },
            gridLineWidth: 0
      },
        tooltip: {

    formatter: function() {
        return '<b>' + this.x + '</b><br/>' +
            this.series.name + ': ' + this.y + '<br/>' 
          
    },
    positioner: function(labelWidth:any, labelHeight, point) {
        var tooltipX = point.plotX + 20;
        var tooltipY = point.plotY - 30;
        return {
            x: tooltipX,
            y: tooltipY
        };
    }
},
        plotOptions: {
            bar: {
              borderWidth: 0,
            borderRadius: '50%',
                dataLabels: {
                  enabled: true,
                  align: 'top', 
                   
                    inside: false 
                },
            groupPadding: 0.3,
            pointPadding: 0.2
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Skills',
          data: seriesData,
          color:'green'
        }]
    };

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default SkillProgress;
