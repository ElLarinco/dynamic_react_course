import React from 'react'
import logo from '../../logo.svg';

const Header = () => {
    return (
        <header className='container mx-auto'>
            <nav>
                <div className='flex flex-wrap justify-center items-center bg-red-400 h-16'>
                    <img className='inline-block m-0' src={logo} alt={logo} 
                    style={{width: "50px", height: "50px"}} />
                    <a href='#' className='text-2xl text-gray-100'>DynaReact</a>
                </div>
            </nav>
        </header>
    )
}

export default Header
