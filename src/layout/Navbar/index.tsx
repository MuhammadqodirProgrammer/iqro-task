import './navbar.css';
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
import { navLinksList } from '../../db/navlinks';

const Navbar = () => {
	const navigate = useNavigate();
	const usePathname = () => {
		const location = useLocation();
		return location.pathname;
	};

	let isOpen = /true/.test('false');

	return (
		<div>
			<nav
				className={`fixed top-0 left-0  min-h-screen shadow-md z-30  bg-[#fff] hidden md:flex items-center flex-col  ${
					isOpen ? 'w-[300px]' : 'w-[70px]'
				}  left-0 
				 `}
			>
				<div className=' mt-6 text-[#51459E] '>
					{isOpen ? <FiMenu /> : <HiMenuAlt1 />}
				</div>

				<div className=' mt-16 text-black  flex flex-col gap-5  dark:text-mainColor '>
					{navLinksList.map((el, index) => (
						<Link
							className=' w-[70px] flex justify-center  relative  nav_link '
							to={el.to}
						>
							<span
								className={` min-h-full min-w-[10px]  visible opacity-0  absolute  left-[-6px]  bg-[#3734A9] rounded-md      ${
									usePathname() == `${el.to}` && 'block  opacity-100'
								}   `}
							></span>

							<button
								type='button'
								className={`   px-3 py-[10px] rounded-xl   text-[#C7C7D2]А   hover:bg-[#563BFF]       ${
									usePathname() == `${el.to}`
										? '    bg-[#563BFF]  text-white    '
										: ''
								}   `}
							>
								<div className='flex items-center  gap-x-2 justify-start'>
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
