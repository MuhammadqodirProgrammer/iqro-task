import { Link, useLocation } from 'react-router-dom';
import { navLinksList } from '../../db/navlinks';
// icons

import { CgLogOut } from 'react-icons/cg';
import { TiHome } from 'react-icons/ti';
import { FiLayout } from 'react-icons/fi';
import { IoAnalyticsSharp } from 'react-icons/io5';
import { FiDatabase } from 'react-icons/fi';
import { BsCopy } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';
import { LuMessageSquare } from 'react-icons/lu';
import { SlBasket } from 'react-icons/sl';
import { MdOutlineDateRange } from 'react-icons/md';

type NavPropsType = {
	isText?: boolean;
};

export const NavLinks = ({ isText = false }: NavPropsType) => {
	const usePathname = () => {
		const location = useLocation();
		return location.pathname;
	};
	return (
		<div className=' pt-10 text-black  flex flex-col gap-5  dark:text-mainColor '>
			{navLinksList.map((el, index) => (
				<Link
					className={` min-w-[70px] max-w-[140px] flex justify-center  relative  nav_link `}
					to={el.to}
				>
					<span
						className={` min-h-full min-w-[10px]  visible opacity-0  absolute  left-[-6px]  bg-[#3734A9] rounded-md      ${
							usePathname() == `${el.to}` && 'block  opacity-100'
						}   `}
					></span>

					<button
						type='button'
						className={`   px-3 py-[10px] rounded-xl   text-[#C7C7D2]   hover:bg-[#563BFF]       ${
							usePathname() == `${el.to}`
								? '    bg-[#563BFF]  text-white    '
								: ''
						}   `}
					>
						<div className='flex items-center  gap-x-3 justify-start'>
							{index == 0 ? (
								<TiHome size={25} />
							) : index == 1 ? (
								<FiLayout size={25} />
							) : index == 2 ? (
								<IoAnalyticsSharp size={25} />
							) : index == 3 ? (
								<FiDatabase size={25} />
							) : index == 4 ? (
								<BsCopy size={25} />
							) : index == 5 ? (
								<CgMail size={25} />
							) : index == 6 ? (
								<LuMessageSquare size={25} />
							) : index == 7 ? (
								<SlBasket size={25} />
							) : index == 8 ? (
								<MdOutlineDateRange size={25} />
							) : index == 9 ? (
								<CgLogOut size={25} />
							) : (
								''
							)}
							{isText && <p className='chakra-text css-0'>{el.pagename} </p>}
						</div>
					</button>
				</Link>
			))}
		</div>
	);
};
