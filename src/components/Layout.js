import React from 'react';
import AppBar from './AppBar';
import FooterBar from './FooterBar';

const Layout = ({children}) => {
    return (
        <>
        <AppBar />
        <div style={{marginBottom: '100px'}}>
        {children}
          </div>
        <FooterBar />
        </>
    )
}

export default Layout