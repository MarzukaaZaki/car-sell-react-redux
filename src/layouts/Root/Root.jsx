import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='bg-[#edf0f6]'>
            <Outlet/>
        </div>
    );
};

export default Root;