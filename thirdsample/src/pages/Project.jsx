import Navbar from '../components/Navbar';
import '../assets/css/styles.css';

const Project = () => {

  const projects = [
    {
      title: "Tech Zone",
      Desc: "TechZone is a console-based application designed for managing an electronic shop. The application is developed using Java for the backend logic and MySQL for the database management. It allows users to browse and order products while providing administrative functionalities for managing the product catalog."
    },
    {
      title: "TIC TAC TOE GAME",
      Desc: "Created a Tic Tac Toe game using HTML, CSS, and JavaScript.Implemented game logic, player interaction, and responsive design for seamless gameplay across devices."
    },
    {
      title: "COOKING BLOG",
      Desc: "Developed a full-stack cooking blog website using HTML, CSS, JavaScript,Bootstrap, Node.js, and Express.The platform allows users to view various recipes and ingredients, as well as contribute their own recipes.Implemented responsive design for an optimal user experience across  devices and integrated a user- friendly interface for recipe submission and browsing."
    }
  ]
return (
  <>
    <Navbar />
    <div className=' h-screen w-full'>
      <div className='h-4/5 w-full flex flex-row justify-center items-center space-x-10'>
        {
        projects.map((data,index)=>(

        <div class="card ml-8">
          <div class="bg flex flex-col items-center space-y-6">
            <h1 className='pt-10 text-lg font-bold'>{data.title}</h1>
            <p className='p-5'>{data.Desc}</p>
          </div>
          <div class="blob"></div>
        </div>

        ) )
      }




      </div>
    </div>
  </>
)
}


export default Project;