import React from 'react';
import ApexChart from '../../components/ChartLine/ChartLine';
import { GoalsCard } from '../../components/GoalsCard/GoalsCard';
import LineChart from '../../components/LineChart/LineChart';
import RadialBar from '../../components/RadialBar/RadialBar';
import Sessions from '../../components/Session/Sessions';
import StatisticCard from '../../components/StatisticCard/StatisticCard';

export const Home = () => {
	return (
		<>
			<div className='  flex-col lg:flex-row  flex justify-between mt-1 mb-2'>
				<div className=' w-[100%] lg:w-[52%]'>
					<LineChart />
					<StatisticCard />
				</div>
				<div className=' w-[100%]  lg:w-[45%] '>
					<RadialBar />
					<Sessions />
				</div>
			</div>
			<GoalsCard />
		</>
	);
};
