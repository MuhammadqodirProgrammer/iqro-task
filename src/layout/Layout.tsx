import React from 'react';
import Header from './Header';
import Navbar from './Navbar';

const Layout = ({ children }: any) => {
	return (
		<>
			<Header />
			<div className='  flex justify-end   '>
				<Navbar />
				<div className='main-container  bg-orange-500'>{children}</div>
			</div>
		</>
	);
};

export default Layout;
