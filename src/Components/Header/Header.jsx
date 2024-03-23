import React from 'react';
import navbar from  '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 border-b-2 max-w-7xl mx-auto'>
            <h6>Knowledge Cafe</h6>
            <img src={navbar} alt="" />
        </div>
    );
};

export default Header;