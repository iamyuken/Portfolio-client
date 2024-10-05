import Navbar from '../components/Navbar';
import Github from '../assets/img/github.jpeg';
import Linkedin from '../assets/img/linkedIn.png';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className='flex justify-center'>
        <div className='h-96 w-96 bg-slate-400 mt-16 flex flex-col items-center justify-center rounded-lg shadow-2xl'>
         
        <a href='mailto:yukendranofficial2004@gmail.com'>
          <div className='h-10 w-80 bg-red-700 m-3 flex justify-center items-center rounded-lg'>
            <h1>Mailid : yukendranofficial2004@gmail.com</h1>
          </div>
        </a>

          <a href='tel:9994491604'>
            <div className='h-10 w-80 bg-red-700 m-3 flex justify-center items-center rounded-lg'>
              <h1 className=''>Mobile: 9994491604</h1>
            </div>
          </a>

        <a href='https://github.com/iamyuken'>
          <div className='h-10 w-80 bg-red-700 m-3 flex justify-center items-center rounded-lg'>
            <img src={Github} alt="git" className="rounded-full h-7 w-7 mr-8" />
            <h3>Github</h3>
          </div>
        </a>

        <a href='https://www.linkedin.com/in/yukendranm/'>
          <div className='h-10 w-80 bg-red-700 m-3 flex justify-center items-center rounded-lg'>
            <img src={Linkedin} alt="linkedin" className="rounded-full h-7 w-7 mr-8" />
            <h3>Linkedin</h3>
          </div>
        </a>
        </div>
      </div>
    </>
  )
}

export default Contact;
















          // <a href='https://github.com/iamyuken'>
          // </a>
          //   Github
          //   <img src={Github} alt="git" className="rounded-full h-7 w-7 mr-8" />