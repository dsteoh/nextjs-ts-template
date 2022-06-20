import React, { ReactNode } from 'react'
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children } : LayoutProps) => {
    return (
        <div className="content">
            <Navbar/>
            { children }
            <Footer/>
        </div>
    )
}

type LayoutProps = {
    children: ReactNode; 
  };

export default Layout