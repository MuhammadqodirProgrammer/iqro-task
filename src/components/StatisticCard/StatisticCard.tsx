import React from 'react';
import { FiUsers } from 'react-icons/fi';
import { RxCountdownTimer } from "react-icons/rx";
import { GrTime } from "react-icons/gr";
import { TbCalendarTime } from "react-icons/tb";
const StatisticCard = () => {
	return (
		<div className='  grid grid-cols-4 gap-2  mt-3 '>
			<div className=' bg-white shadow-lg px-3 py-3 rounded-lg  '>
				<div className=' bg-[#EBF1FF] ml-2 mb-2 text-blue-600 shadow w-[44px] text-center py-2 rounded-lg  '>
					<FiUsers size={25} className='mx-auto ' />
				</div>
				<span className='text-[#5A5881] my-1  font-medium'>Users</span>

				<h3 className=' font-bold  text-[24px]  my-1 '>72.6K</h3>
				<span className='text-[#5A5881] '>+25%</span>
			</div>

            <div className=' bg-white shadow-lg px-3 py-3 rounded-lg  '>
				<div className=' bg-[#FEF0EC] ml-2 mb-2 text-[#F36643] shadow w-[44px] text-center py-2 rounded-lg  '>
					<TbCalendarTime size={25} className='mx-auto ' />
				</div>
				<span className='text-[#5A5881] my-1  font-medium'>Sessions</span>

				<h3 className=' font-bold  text-[24px]  my-1 '>87.2K</h3>
				<span className='text-[#5A5881] '>+47%</span>
			</div>

            <div className=' bg-white shadow-lg px-3 py-3 rounded-lg  '>
				<div className=' bg-[#ECE9FE] ml-2 mb-2 text-[#4524F8] shadow w-[44px] text-center py-2 rounded-lg  '>
					<GrTime size={25} className='mx-auto ' />
				</div>
				<span className='text-[#5A5881] my-1  font-medium'>Bounce Rate</span>

				<h3 className=' font-bold  text-[24px]  my-1 '>26.3K</h3>
				<span className='text-[#5A5881] '>-28%</span>
			</div>
            <div className=' bg-white shadow-lg px-3 py-3 rounded-lg  '>
				<div className=' bg-[#E9FBF6] ml-2 mb-2 text-[#24D6A5] shadow w-[44px] text-center py-2 rounded-lg  '>
					<RxCountdownTimer size={25} className='mx-auto ' />
				</div>
				<span className='text-[#5A5881] my-1  font-medium'>Session duration</span>

				<h3 className=' font-bold  text-[24px]  my-1 '>2m 18s </h3>
				<span className='text-[#5A5881] '>+13%</span>
			</div>

		</div>
	);
};

export default StatisticCard;
