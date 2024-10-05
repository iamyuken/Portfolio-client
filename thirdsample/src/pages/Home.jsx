import React from 'react'
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='h-96 w-full flex justify-center items-center'>
                <div className='h-16 w-[30%] flex justify-center items-center border-2 bg-yellow-400'>
                    <h1 className='text-4xl italic font-thin'>Welcome to My Portfolio</h1>
                </div>
            </div>
        </>
    )
}

export default Home;
