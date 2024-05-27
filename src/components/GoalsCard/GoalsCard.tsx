import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const GoalsCard = () => {
	return (
		<>
			<div className='  flex-col lg:flex-row  flex justify-between gap-3 items-end  pb-2'>
				<div className='flex justify-between items-center gap-3 w-[100%] lg:w-[52%] '>
					<div className='   shadow-2xl  rounded-md bg-white  flex-col  sm:flex-row  flex items-center justify-between px-5 py-5   w-[48%] '>
						<div>
							<h4 className=' text-[#1B1950]   font-bold sm:text-[22px] text-[16px] text-center '>
								5,461
							</h4>
							<span className=' text-[#5A5881]   font-bold text-[16px] '>
								Today
							</span>
						</div>
						<div style={{ width: 50, height: 50 }}>
							<CircularProgressbar
								value={66}
								maxValue={80}
								text={'Users'}
								strokeWidth={10}
								styles={buildStyles({
									rotation: 0.25,
									pathTransitionDuration: 0.5,
								})}
							/>
						</div>
						<div>
							<h4 className=' text-[#1B1950]   font-bold sm:text-[22px] text-[16px] text-center '>
								5,461
							</h4>
							<span className=' text-[#5A5881]   font-bold text-[16px] '>
								Expected
							</span>
						</div>
					</div>

					<div className='   shadow-2xl  rounded-md bg-white  flex-col  sm:flex-row  flex items-center justify-between px-5 py-5   w-[48%] '>
						<div>
							<h4 className=' text-[#1B1950]   font-bold sm:text-[22px] text-[16px] text-center '>
								140
							</h4>
							<span className=' text-[#5A5881]   font-bold text-[16px] '>
								Today
							</span>
						</div>
						<div style={{ width: 50, height: 50 }}>
							<CircularProgressbar
								value={66}
								maxValue={80}
								text={'Goals'}
								strokeWidth={10}
								styles={buildStyles({
									rotation: 0.25,
									pathTransitionDuration: 0.5,
									pathColor: `#FF7049`,
									textColor: '#FF7049',
								})}
							/>
						</div>
						<div>
							<h4 className=' text-[#1B1950]   font-bold sm:text-[22px] text-[16px] text-center '>
								120
							</h4>
							<span className=' text-[#5A5881]   font-bold text-[16px] '>
								Expected
							</span>
						</div>
					</div>
				</div>

				<div className='   shadow-2xl  rounded-md bg-white  flex-col  sm:flex-row  flex items-center justify-between px-8 py-5 gap-2  w-[100%] lg:w-[45%] '>
					<div>
						<h4 className=' text-[#1B1950]   font-bold sm:text-[22px] text-[16px] text-center '>
							Sessions By Device
						</h4>
						<span className=' text-[#5A5881]   font-bold text-[16px] '>
							Top Region & Session
						</span>
					</div>

					<button className='bg-gradient-to-b from-[#B664FD] to-[#8D35FF] text-white px-4 sm:px-6 py-1 sm:py-2 text-xl rounded font-medium focus:ring ring-black cursor-pointer ring-opacity-10 gradient element-to-rotate '>
						View
					</button>
				</div>
			</div>
		</>
	);
};
