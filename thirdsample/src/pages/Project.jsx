import Navbar from '../components/Navbar';
import '../assets/css/styles.css';
import Card from '../components/Card'



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
      <div className='flex flex-wrap gap-20 justify-center mt-10'>
        {
          projects.map((data, index) => (
              <Card
                key={index}
                title={data.title}
                Desc={data.Desc}
              />
          )
          )
        }
      </div>
    </>
  )
}


export default Project;