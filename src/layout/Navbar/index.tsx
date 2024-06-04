import './navbar.css';
import { FiMenu } from 'react-icons/fi';
import { HiMenuAlt1 } from 'react-icons/hi';

import { NavLinks } from '../../components/NavLinks/NavLinks';

const Navbar = () => {
	
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

				<NavLinks/>
			</nav>
		</div>
	);
};

export default Navbar;
