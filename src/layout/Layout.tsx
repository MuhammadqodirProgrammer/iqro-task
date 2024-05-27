import React from 'react';
import Header from './Header';
import Navbar from './Navbar';

const Layout = ({ children }: any) => {
	return (
		<>
			<Navbar />
			<Header />
			{children}
		</>
	);
};

export default Layout;
