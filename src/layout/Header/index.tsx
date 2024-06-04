import { CgMail } from 'react-icons/cg';
import { IoIosSearch } from 'react-icons/io';
import { FaRegBell } from 'react-icons/fa6';
import profileImg from '../../assets/images/profile.webp';
import { useState } from 'react';
import { NavLinks } from '../../components/NavLinks/NavLinks';

const Header = () => {
	const [isOffcanvasOpen, setOffcanvasOpen] = useState(false);

	const toggleOffcanvas = () => {
		setOffcanvasOpen(!isOffcanvasOpen);
	};
	return (
		<>
			<header className={`   bg-[#F7F8FB]   flex justify-end   `}>
				<div
					className={`flex  mt-3    justify-between main-container items-center    `}
				>
					<form className='max-w-md '>
						<label
							htmlFor='default-search'
							className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
						>
							Search
						</label>
						<div className='relative'>
							<div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
								<IoIosSearch
									size={30}
									className='w-5 h-5 text-gray-500 dark:text-gray-400'
								/>
							</div>
							<input
								type='search'
								id='default-search'
								className='block w-full p-3 ps-10 text-sm text-gray-900 border  rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500  dark:focus:border-blue-500   outline-none '
								placeholder='Search Anything'
								required
							/>
						</div>
					</form>

					<div className={`flex  items-center gap-x-[30px] `}>
						<CgMail
							size={25}
							className=' max-[768px]:hidden text-gray-500 cursor-pointer  '
						/>
						<div className=' relative  cursor-pointer max-[768px]:hidden '>
							<FaRegBell size={25} className=' text-gray-500 cursor-pointer ' />
							<span className=' absolute top-[1px] right-0   w-3 h-3 flex items-center justify-center rounded-full  bg-[#563BFF]  text-white  text-[10px]     '>
								2
							</span>
						</div>
						<div className=' w-8 h-8 max-[768px]:hidden rounded-full overflow-hidden  cursor-pointer '>
							<img
								src={profileImg}
								alt='profile img'
								className=' w-full h-full object-cover  '
							/>
						</div>

						<button
							type='button'
							className=' px-3 py-2 rounded-md border-2 border-[#563BFF]    '
							onClick={toggleOffcanvas}
						>
							<svg
								stroke='currentColor'
								fill='currentColor'
								strokeWidth={0}
								viewBox='0 0 24 24'
								focusable='false'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g id='Menu_Fries'>
									<path d='M20.437,19.937c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002Z' />
									<path d='M20.437,11.5c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l10,-0.001Z' />
									<path d='M20.437,3.062c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.001Z' />
								</g>
							</svg>
						</button>
					</div>
				</div>
			</header>

			{isOffcanvasOpen && (
				<nav
					className={` 'bg-[#fff] dark:bg-topColor'
							z-50 navbar_offcanvas fixed top-0 left-0  h-screen  min-w-[250px]  max-w-[300px] `}
				>
					<div className='h-[70px] flex items-center bg-white px-3 justify-between'>
						<h2 className='font-bold text-[28px] '>Logo </h2>
						<button
							onClick={toggleOffcanvas}
							type='button'
							className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900   rounded-lg text-sm w-8 h-8  inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white'
						>
							<svg
								className='w-3 h-3'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 14 14'
							>
								<path
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
								/>
							</svg>
						</button>
					</div>
					<div
						style={{ zIndex: 99 }}
						className={`h-screen  bg-[#fff] dark:bg-topColor z-50`}
					>
						<NavLinks  isText={true}/>
					</div>
				</nav>
			)}
		</>
	);
};

export default Header;
