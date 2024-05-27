
const Sessions = () => {
	return (
		<div className=' max-h-[556px]'>
			<div className='  shadow-2xl  rounded-md bg-white px-5 my-2 py-3  '>
				<h4 className=' text-[#15134B]   font-bold sm:text-[22px]  text-[14px]   '>
					Sessions By Device
				</h4>

				<div className='grid grid-cols-5 sm:gap-4 gap-2 py-2 border-b-2'>
					<h5 className='text-[#15134B]   font-bold sm:text-[18px] text-[14px]  '>Channel</h5>
					<h5 className='col-span-3 ml-2  text-[#15134B]   font-bold sm:text-[18px] text-[14px]  '>
						Traffic(%)
					</h5>
					<h5 className='text-[#15134B]   font-bold sm:text-[18px] text-[14px]  '>Value</h5>
				</div>

				<div className='grid grid-cols-5 sm:gap-4 gap-2 py-2 items-center '>
					<h5 className='text-[#5A5881]   font-bold sm:text-[18px] text-[14px]  '>Direct</h5>
					<div className='col-span-3 ml-2  w-[90%] sm:w-full h-2 bg-[#F2F3F9] rounded-xl   relative overflow-hidden  '>
						<span className='block transition-all duration-300   h-2 left-0 top-0 rounded-full min-w-[10%]  w-[60%] bg-gradient-to-r from-[#2400FF] to-[#6D3AFF]  absolute '></span>
					</div>
					<h5 className='text-[#5A5881]   font-bold sm:text-[18px] text-[14px]  '>23.28%</h5>
				</div>

                <div className='grid grid-cols-5 sm:gap-4 gap-2 py-2 items-center '>
					<h5 className='text-[#5A5881]   font-bold sm:text-[18px] text-[14px]  '>Direct</h5>
					<div className='col-span-3 ml-2  w-[90%] sm:w-full h-2 bg-[#F2F3F9] rounded-xl   relative overflow-hidden  '>
						<span className='block transition-all duration-300   h-2 left-0 top-0 rounded-full min-w-[10%]  w-[70%] bg-gradient-to-r from-[#FF7049] to-[#cd5230]  absolute '></span>
					</div>
					<h5 className='text-[#5A5881]   font-bold sm:text-[18px] text-[14px]  '>43.28%</h5>
				</div>

                <div className='grid grid-cols-5 sm:gap-4 gap-2 py-2 items-center '>
					<h5 className='text-[#5A5881]   font-bold sm:text-[18px] text-[14px]  '>Direct</h5>
					<div className='col-span-3 ml-2  w-[90%] sm:w-full h-2 bg-[#F2F3F9] rounded-xl   relative overflow-hidden  '>
						<span className='block transition-all duration-300   h-2 left-0 top-0 rounded-full min-w-[10%]  w-[50%] bg-gradient-to-r from-[#20C997] to-[#13c08c]  absolute '></span>
					</div>
					<h5 className='text-[#5A5881]   font-bold sm:text-[18px] text-[14px]  '>15.28%</h5>
				</div>

			</div>
			
		</div>
	);
};

export default Sessions;
