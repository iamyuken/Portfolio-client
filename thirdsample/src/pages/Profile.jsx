import '../assets/css/styles.css'
import Navbar from '../components/Navbar';
import Profilex from '../assets/img/Yukendran M.jpg'
import bgimage from '../assets/img/bgimage.jpg'


const Profile = () => {
    return (
        <>
            <Navbar />
            <div className='mt-20 h-full w-full'>
                <div className="h-[80%] w-full flex flex-row">
                    <div className='w-9/12 flex flex-col justify-center items-center'>
                        <div className='h-56 flex flex-col justify-center items-center ml-10 bg-red-500 rounded-2xl'>
                            <h1 className='pl-8 pr-8 text-white'>A final year engineering student who aims to work for a software development company which 
                            provides opportunities to improve my skills and knowledge.</h1>
                        </div>
                    </div>
                    <div className='w-1/2  flex flex-row justify-end items-center'>
                        <img src={Profilex} alt="profile" className="rounded-full h-80 w-80 mr-8" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;