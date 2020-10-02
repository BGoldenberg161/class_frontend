import React from 'react';
import AppBar from './AppBar';
import FooterBar from './FooterBar';

require('dotenv').config()
const authTokenPath = process.env.REACT_STORAGE_TOKEN

const Layout = ({ children }) => {
	const logoutFunction = () => {
    localStorage.removeItem(authTokenPath)
		return;
	};
	return (
		<>
			<AppBar logoutFunction={logoutFunction} />
			<div style={{ marginBottom: '100px' }}>{children}</div>
			<FooterBar />
		</>
	);
};

export default Layout;
