import '../assets/css/styles.css'
import Navbar from '../components/Navbar';
import Profilex from '../assets/img/Yukendran M.jpg'

const Profile = () => {
    return (
        <>
            <Navbar />
            <div className='h-screen w-full'>
                <div className="h-[80%] w-full flex flex-row">
                    <div className='w-9/12 flex flex-col justify-center items-center'>
                        <div className='h-56 flex flex-col justify-center items-center ml-10'>
                            <h1 className='pl-8 pr-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur quasi, ipsum repudiandae velit doloribus ratione non dolores. Voluptate laudantium omnis quibusdam quam. Voluptas sit sequi modi, cumque nesciunt aperiam fugiat?</h1>
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