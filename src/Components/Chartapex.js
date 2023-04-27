import React, { useState } from 'react';
import Chart from "react-apexcharts";

export default function Chartapex() {

    const [state, setState] = useState(
        {
            options: {
                chart: {
                    width: "100%",
                    type: "bar"
                  },
                colors: ['#9BDD7C', '#E9A0A0'],

              chart: {
                id: "basic-bar"
              },
              xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
              }
            },
            series: [
              {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
              },
              {
                name: "series-2",
                data: [40, 90, 45, 60, 40, 90, 80, 61]
              }
            ],
            responsive: [
                {
                  breakpoint: 1000,
                  options: {
                    plotOptions: {
                      bar: {
                        horizontal: false
                      }
                    },
                    legend: {
                      position: "bottom"
                    }
                  }
                }
              ]
          }
    )
  return (
   <>
 <Chart
              options={state.options}
              series={state.series}
              type="line"
            //   width="800"
              height="325"
              
            />


   </>
  )
}
