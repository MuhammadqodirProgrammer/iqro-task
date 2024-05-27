import { FiMenu } from 'react-icons/fi';
import { HiMenuAlt1 } from 'react-icons/hi';

const Header = () => {
	let isOpen = /true/.test('false');
	let iscontainerSt = /true/.test('true');
	let isNavSt = /true/.test('true');

	return (
		<>
			<header
				className={` px-3   ${
					isNavSt
						? 'bg-[red] dark:bg-topColor'
						: 'bg-gradient-to-r from-slate-700 to-indigo-600'
				} text-black dark:text-white   w-full flex items-center`}
			>
				<div
          className={`flex    m-auto  justify-between w-[${isOpen ? '80%' : '90%'}] items-center   `}
				>
					<div
						className={`flex  items-center gap-x-[30px] `}
					>
						<div
							className='w-[40px] h-[40px] rounded-full max-[768px]:hidden transition-all hover:bg-slate-700 flex items-center justify-center '
							data-tooltip-id='my-tooltip'
							data-tooltip-content='Toggle Navigation!'
							data-tooltip-place='right'
							// onClick={() => dispatch(menuState())}
						>
							{isOpen ? (
								<FiMenu />
							)  : (
								<HiMenuAlt1 />
							)}

						</div>

						
					</div>

					
				</div>

				
			</header>
		</>
	);
};

export default Header;
