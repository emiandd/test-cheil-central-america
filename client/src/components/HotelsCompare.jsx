import { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { hotelsToCompare } from '../components/Card.jsx';

export default function HotelCompare(){

    let hotels = localStorage.hotelsToCompare;
    hotels = JSON.parse(hotels);

    let week1 = hotels.map( h => h.ratings.map( r => r.score));
    week1 = week1.map( h => h[0])

    let week2 = hotels.map( h => h.ratings.map( r => r.score));
    week2 = week2.map( h => h[1])

    let week3 = hotels.map( h => h.ratings.map( r => r.score));
    week3 = week3.map( h => h[2])

    let week4 = hotels.map( h => h.ratings.map( r => r.score));
    week4 = week4.map( h => h[3])

    let week5 = hotels.map( h => h.ratings.map( r => r.score));
    week5 = week5.map( h => h[4])

    let state = {
      series: [{
        name: 'Week 1',
        data: week1
      }, {
        name: 'Week 2',
        data: week2
      }, {
        name: 'Week 3',
        data: week3
      }, {
        name: 'Week 4',
        data: week4
      }, {
        name: 'Week 5',
        data: week5
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        title: {
          text: 'Hotel Comparations'
        },
        xaxis: {
          categories: hotels.map( h => h.name ),
          labels: {
            formatter: function (val) {
              return val
            }
          }
        },
        yaxis: {
          title: {
            text: undefined
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + " stars"
            }
          }
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left',
          offsetX: 40
        }
      },
    
    
    };

    return (
      <div id="chart">
        <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
      </div>
    );
}
