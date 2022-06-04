import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    return (
        <div className='flex flex-col  min-h-screen justify-center items-center space-x-1'>
            <Header />
            <div className='flex-1 flex flex-col justify-center space-y-2'>
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
