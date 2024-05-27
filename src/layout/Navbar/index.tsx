import { useState } from 'react';
// import './navbar.css';
import { CgLogOut } from 'react-icons/cg';
import { FiMenu } from 'react-icons/fi';
import { HiMenuAlt1 } from 'react-icons/hi';
import { TiHome } from 'react-icons/ti';
import { FiLayout } from 'react-icons/fi';
import { IoAnalyticsSharp } from 'react-icons/io5';
import { FiDatabase } from 'react-icons/fi';
import { BsCopy } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';
import { LuMessageSquare } from 'react-icons/lu';
import { SlBasket } from 'react-icons/sl';
import { MdOutlineDateRange } from 'react-icons/md';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const arr = [
	{
		to: '/',
		pagename: 'Home',
	},
	{
		to: '/layout',
		pagename: 'Layout',
	},
	{
		to: '/analytics',
		pagename: 'Analytics',
	},
	{
		to: '/database',
		pagename: 'Database',
	},
	{
		to: '/copy',
		pagename: 'Copy',
	},
	{
		to: '/mail',
		pagename: 'Mail',
	},
	{
		to: '/messages',
		pagename: 'Message',
	},
	{
		to: '/basket',
		pagename: 'Basket',
	},
	{
		to: '/date',
		pagename: 'Date',
	},
	{
		to: '/logout',
		pagename: 'CgLogOut',
	},
];
const Navbar = () => {
	const navigate = useNavigate();
	const usePathname = () => {
		const location = useLocation();
		return location.pathname;
	};
	console.log(usePathname());

	// const isOpenMenu = useSelector((state: any) => state.isOpenMenu);
	// const positionNav: any = useSelector((state: any) => state.positionNav);
	// const containerSt: any = useSelector((state: any) => state.containerSt);
	// const navSt: any = useSelector((state: any) => state.navSt);
	let isOpen = /true/.test('false');
	let iscontainerSt = /true/.test('true');
	let isNavSt = /true/.test('true');

	console.log(isOpen, iscontainerSt, isNavSt);

	return (
		<div>
			<nav
				className={`fixed top-0 left-0  min-h-screen shadow z-30  ${
					isNavSt
						? 'bg-[#fff] dark:bg-topColor'
						: 'bg-gradient-to-b from-slate-700 to-indigo-600'
				} hidden md:flex items-center flex-col  ${
					isOpen ? 'w-[300px]' : 'w-[70px]'
				}  left-0 
				 `}
			>
				<div className=' mt-6 text-[#51459E] '>
					{isOpen ? <FiMenu /> : <HiMenuAlt1 />}
				</div>

				<div className=' mt-16 text-black  flex flex-col gap-5  dark:text-mainColor '>
					{arr.map((el, index) => (
						<Link className='bg-teal-500 w-[70px] flex justify-center border-l-2 border-red-600 ' to={el.to}>
							<button
								type='button'
								className={ 
									`   px-3 py-[10px] rounded-xl             ${usePathname() == `${el.to}`
                  ? 'active_link nav_link-button    bg-[#9B38FF]      '
                  : 'nav_link-button '}   `
								}
							>
								<div className='flex items-center text-[#C7C7D2] gap-x-2 justify-start'>
									{index == 0 ? (
										<TiHome size={25} />
									) : index == 1 ? (
										<FiLayout size={25} />
									) : index == 2 ? (
										<FiLayout size={25} />
									) : index == 3 ? (
										<IoAnalyticsSharp size={25} />
									) : index == 4 ? (
										<FiDatabase size={25} />
									) : index == 5 ? (
										<BsCopy size={25} />
									) : index == 6 ? (
										<CgMail size={25} />
									) : index == 7 ? (
										<LuMessageSquare size={25} />
									) : index == 8 ? (
										<SlBasket size={25} />
									) : index == 9 ? (
										<MdOutlineDateRange size={25} />
									) : index == 10 ? (
										<CgLogOut size={25} />
									) : (
										<FiLayout size={25} />
									)}
									{isOpen && <p className='chakra-text css-0'>Home</p>}
								</div>
							</button>
						</Link>
					))}
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
