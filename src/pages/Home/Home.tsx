import React from 'react';
import ApexChart from '../../components/ChartLine/ChartLine';
import LineChart from '../../components/LineChart/LineChart';
import RadialBar from '../../components/RadialBar/RadialBar';
import StatisticCard from '../../components/StatisticCard/StatisticCard';

export const Home = () => {
	return (
		<div className='  flex-col lg:flex-row  flex justify-between mt-1 '>
			<div className=' w-[100%] lg:w-[48%]'>
				<LineChart />
        
				<StatisticCard />
			</div>
      <div className=' w-[100%]  lg:w-[45%] '>
			<RadialBar />

      </div>

		</div>
	);
};
