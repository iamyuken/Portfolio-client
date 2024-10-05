import '../assets/css/styles.css';

import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            <div className='h-24 w-full bg-green-400 flex flex-row items-center'>
                <div className='h-14 w-52  ml-7 flex flex-row justify-center items-center'>
                    <NavLink to={'/'}>
                    <h1 className='sm:text-2xl md:text-3xl whitespace-nowrap text-white hover:scale-110 transition-transform'>My Portfolio</h1>
                    </NavLink>
                </div>
                <div className='h-14 w-44  flex flex-row justify-center items-center ml-auto'>
                    <NavLink to={'/profile'}>
                        <h1 className='sm:text-1xl md:text-2xl whitespace-nowrap text-white hover:scale-110 transition-transform'>Profile</h1>
                    </NavLink>
                </div>
                <div className='h-14 w-44 flex flex-row justify-center items-center'>
                    <NavLink to={'/contact'}>
                        <h1 className='sm:text-1xl md:text-2xl whitespace-nowrap text-white hover:scale-110 transition-transform'>Contact</h1>
                    </NavLink>
                </div>
                <div className='h-14 w-44 flex flex-row justify-center items-center'>
                    <NavLink to={'/projects'}>
                        <h1 className='sm:text-1xl md:text-2xl whitespace-nowrap text-white hover:scale-110 transition-transform'>Projects</h1>
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Navbar;
