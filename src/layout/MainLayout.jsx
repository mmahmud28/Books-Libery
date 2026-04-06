import React from 'react';
import Navbar from '../componets/shared/navbar/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='container mx-auto space-y-3'>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;