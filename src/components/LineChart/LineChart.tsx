
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ChartDataItem } from '../../utils/types/ChartDataItem';
import { ChartType } from '../../utils/types/ChartType';


const LineChart: React.FC = () => {
  const series: ChartDataItem[] = [
    {
      name: 'Low - 2013',
      data: [9, 11, 7, 11, 6, 10, 6, 10, 6, 11, 7, 11],
    },
  ];

  const options :ChartType = {
    chart: {
      height: '200px',
      width: '100%',
      background: '#fff',
      type: 'area', // Use 'area' for an area chart
      stacked: true,
      dropShadow: {
        enabled: false,
        color: '#000000',
        top: 5,
        left: 7,
        blur: 10,
        opacity: 0.5,
      },
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '10%',
      },
    },
    grid: {
      show: false,
    },
    title: {
      text: '🔵 Current Perriod',
      align: 'right',
      margin: 10,
      offsetX: 0,
      offsetY: 30,
      floating: true,
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
        fontFamily: 'Sans-Serif',
        color: '#5A5881',
      },
    },
    colors: ['#563BFF', '#545454'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    fill: {
      type: 'image',
    },
    // tooltip: {
    //   // Add tooltip options if needed
    // },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      // type: 'datetime' // Use datetime if your data represents dates
    },
    yaxis: {
      show: false,
      // min: 8,
      max: 18,
      height: '100px',
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
  };

  return (
    <div>
      <div className='flex justify-between items-center mb-2'>
        <h2 className='text-[#15134B] font-bold '>Performance</h2>
        <span>Year</span>
      </div>
      <div className='w-[100%] max-[350px]:h-[200px] sm:min-h-[100px] lg:max-h-[300px] line-chart rounded-md overflow-hidden'>
        <ReactApexChart options={options} series={series} type='area' />
      </div>
    </div>
  );

};

export default LineChart;



 