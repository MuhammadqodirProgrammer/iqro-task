import React, { Component } from 'react';
import Chart from 'react-apexcharts';

const RadialBar = () => {
	const series = [80, 50, 20];
	const options = {
		colors: ['#563BFF', '#FF7049',"#20C997"],
		labels: ['<b className="opacity-50 ">Mobile</b> <br/>  <B>8,085</B> 30%', '<b className="opacity-50 ">Tablets</b> <br/>  <B>8,085</B> 25%','<b className="opacity-50 ">Desktop</b> <br/>  <B>8,085</B> 13%',],
		legend: {
			show: true,
			showForSingleSeries: false,
			showForNullSeries: true,
			showForZeroSeries: true,
			position: 'right',
			horizontalAlign: 'center',
			floating: false,
			fontSize: '14px',
			fontFamily: 'Helvetica, Arial',
			width: "auto",
			height: undefined,
			formatter: undefined,
			offsetX: -40,
			offsetY: 20,
			labels: {
				colors: undefined,
				useSeriesColors: false,
			},
			markers: {
                show:true,
				width: 12,
				height: 12,
				strokeWidth: 0,
				strokeColor: '#8C93B8',
				radius: 12,
				customHTML: undefined,
				onClick: undefined,
				offsetX: 0,
				offsetY: 0,
			},
			itemMargin: {
				horizontal: 20,
				vertical: 5,
			},
			onItemClick: {
				toggleDataSeries: true,
			},
			onItemHover: {
				highlightDataSeries: false,
			},
		},
		plotOptions: {
			radialBar: {
				size: undefined,
				inverseOrder: false,
				startAngle: 0,
				endAngle: 360,
				offsetX: 0,
				offsetY: 0,
				hollow: {
					margin: 5,
					size: '50%',
					background: 'transparent',
					image: undefined,
					imageWidth: 150,
					imageHeight: 150,
					imageOffsetX: 0,
					imageOffsetY: 0,
					imageClipped: true,
					position: 'front',
					dropShadow: {
						enabled: false,
						top: 0,
						left: 0,
						blur: 3,
						opacity: 0.5,
					},
				},
				track: {
					show: true,
					startAngle: undefined,
					endAngle: undefined,
					background: '#F2F3F9',
					strokeWidth: '97%',
					opacity: 1,
					margin: 5,
					dropShadow: {
						enabled: false,
						top: 0,
						left: 0,
						blur: 3,
						opacity: 0.5,
					},
				},
				dataLabels: {
					show: true,
					name: {
						show: false,
						fontSize: '22px',
						fontFamily: undefined,
						color: undefined,
						offsetY: -10,
					},
					value: {
						show: true,
						fontSize: '16px',
						fontFamily: undefined,
						color: undefined,
						offsetY: 16,
						formatter: function (val) {
							return val + '%';
						},
					},
				},
			},
		},
	};
	return (
		<div >
			<div className=' flex justify-between items-center mb-2'>
				<h2 className=' text-[#15134B] font-bold '>Sessions By Device</h2>
				<span>Year</span>
			</div>

			<div className='h-[300px] bg-white rounded-md w-[100%] pt-8 '>
				<Chart options={options} series={series} type='radialBar' width='400' />
			</div>
		</div>
	);
};

export default RadialBar;
