import '../assets/css/styles.css';
import { CircleUserRound } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';  // Import useRef and useState

const Navbar = () => {
    const emailref = useRef(null);
    const passwordref = useRef(null);
    const navigate = useNavigate();  // Use useNavigate from react-router-dom

    const handleLogin = (e) => {
        e.preventDefault();
        setvisible(false);
        navigate('/contact');  // Use navigate instead of nav
        console.log(emailref.current.value, passwordref.current.value);
    }

    const [visible, setvisible] = useState(false);

    return (
        <>
            <div className='h-24 w-full bg-green-400 flex flex-row items-center '>
                <div className='h-14 w-52  ml-7 flex flex-row justify-center items-center'>
                    <Link to={'/'}>
                    <h1 className='sm:text-2xl md:text-3xl whitespace-nowrap'>My Portfolio</h1>
                    </Link>
                </div>
                <div className='h-14 w-44  flex flex-row justify-center items-center ml-auto'>
                    <Link to={'/profile'}>
                        <h1 className='sm:text-1xl md:text-2xl whitespace-nowrap'>Profile</h1>
                    </Link>
                </div>
                <div className='h-14 w-44 flex flex-row justify-center items-center'>
                    <Link to={'/contact'}>
                        <h1 className='sm:text-1xl md:text-2xl whitespace-nowrap'>Contact</h1>
                    </Link>
                </div>
                <div className='h-14 w-44 flex flex-row justify-center items-center'>
                    <Link to={'/projects'}>
                        <h1 className='sm:text-1xl md:text-2xl whitespace-nowrap'>Projects</h1>
                    </Link>
                </div>
                <div className='h-14 w-40 flex flex-row justify-center items-center'>
                    <CircleUserRound className='cursor-pointer h-10 w-10 text-green-700 rounded-full border-2 border-white hover:bg-white  hover:border-green-500 hover:text-green-500' onClick={() => setvisible(true)} />
                </div>
            </div>

            {visible && (
                <div className="h-screen w-screen absolute top-0 left-0 bg-black/20 flex justify-center items-center z-50">
                    <div className="h-[40%] w-[30%] bg-white z-50 flex flex-col shadow-lg ">
                        <div className="w-full h-[15%] flex flex-row justify-start px-10 items-center border-2 text-green-400 bg-white text-xl font-bold shadow-sm">
                            <div className="w-1/2">
                                Login
                            </div>
                            <div className="w-1/2 flex justify-end">
                                <label className="relative inline-flex items-center cursor-pointer" onClick={() => setvisible(!visible)} >
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <div className="peer ring-0 bg-rose-400 rounded-full outline-none duration-300 after:duration-500 w-8 h-8 shadow-md peer-checked:bg-emerald-500 after:absolute after:rounded-full after:h-6 after:w-6 after:bg-white after:top-1 after:left-1 after:-rotate-180 peer-checked:after:rotate-0">
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="w-full h-[85%] flex flex-row justify-center items-center">
                            <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4" onSubmit={handleLogin}>
                                <input type="email" ref={emailref} name="" id="email" placeholder="Email" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none focus:border-b-2 hover:border-purple-200 focus:border-green-600" required />
                                <input type="password" ref={passwordref} name="" id="password" placeholder="Password" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none focus:border-b-2 hover:border-purple-200 focus:border-green-600 mb-3" required />
                                <button type="submit" className="text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg font-medium rounded-sm text-md px-5 py-2.5 text-center w-full h-[25%] mt-4">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;
