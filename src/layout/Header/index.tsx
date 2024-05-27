import { CgMail } from 'react-icons/cg';
import { IoIosSearch } from 'react-icons/io';
import { FaRegBell } from 'react-icons/fa6';
import profileImg from '../../assets/images/profile.webp';

const Header = () => {
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
						<div className=' w-8 h-8 rounded-full overflow-hidden  cursor-pointer '>
							<img
								src={profileImg}
								alt='profile img'
								className=' w-full h-full object-cover  '
							/>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
