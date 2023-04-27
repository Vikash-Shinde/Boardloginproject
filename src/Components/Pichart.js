import React, { useState } from 'react';
import Chart from "react-apexcharts";

export default function Pichart() {
    const [state, setState] = useState(
        {
            
                  series: [44, 55, 13],
                  options: {
                    chart: {
                      width: "100%",
                      type: 'pie',
                    },
                    labels: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies'],
                    responsive: [{
                      breakpoint: 1000,
                      options: {
                        chart: {
                          width: "100%"
                        },
                        legend: {
                          position: 'bottom'
                        }
                      }
                    }]
                  },
                }    
          
    )
  return (
   <>
 <Chart
              options={state.options}
              series={state.series}
              type="pie"
            //   width="800"
              height="100"
              
            />


   </>
  )
}

