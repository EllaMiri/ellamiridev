import "./MyWork.css";
import chocolatefactory from "../assets/chocolatefactory.png";
import spacegame from "../assets/space-game.png";
import minima from "../assets/minima.png";
import Footer from "./Footer";

function MyWork() {
  return (
    <div>
      <div className="projects-text-container">
        <h1 className="projects-header">Projects</h1>
        <p className="projects-info-text">
          During my front end education I've created a wide variety of projects
          ranging from games to webshops <br /> and full stack applications with
          user registration and login using MongoDB. <br /> Here I've put them
          together along with projects I've created on my freetime for you to
          view and try the demos.
        </p>
        <p className="break-p">
          My goal as a developer is to create websites / applications that are
          easy to use, visually appealing and has a purpose. <br /> I focus a
          lot on the user experience since the users are the reason the
          application exists.
        </p>
        <div className="my-work-container">
          <div className="show-left">
            <h2 className="project-header">Chocolate Factory 🍫</h2>
            <p className="project-type">Front End Development</p>
            <p className="project-description">
              A webshop selling chocolate made with React and Bootstrap. A
              school project made together with two classmates. Contains a front
              page, products page and a shopping cart that you can add products
              to. On the checkout page you can view your total price, choose
              shipping option and payment option and fill in all your necessary
              information. Hosted on Netlify.
            </p>
            <button className="demo-button">
              <a
                className="demo-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://chocolatefactory.netlify.app/"
              >
                View Demo
              </a>
            </button>
          </div>
          <img className="chocolatefactory" src={chocolatefactory} alt="" />
        </div>
        <div className="my-work-container">
          <div className="show-left">
            <h2 className="project-header">Space Race 🚀</h2>
            <p className="project-type">Game Development</p>
            <p className="project-description">
              A game created with Typescript and the P5 library. Built using
              object oriented programming (OOP). You're a rocket in space trying
              to survive an astroid belt by avoiding to hit the astroids using
              your mouse or the up key. The game also includes a menu, highscore
              table and controls. A school project created together with
              classmates. Hosted on Netlify.
            </p>
            <button className="demo-button">
              <a
                className="demo-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://space-race.netlify.app/"
              >
                View Demo
              </a>
            </button>
          </div>
          <img className="chocolatefactory" src={spacegame} alt="" />
        </div>
        <div className="my-work-container">
          <div className="show-left">
            <h2 className="project-header">Minima 📆</h2>
            <p className="project-type">Front End Development</p>
            <p className="project-description">
              A calendar and todo-list created with HTML, CSS and Javascript.
              Allows you to write todo's for any specific day, mark them as
              accomplished or remove them. Also displays current date and time.
              School project created together with two classmates. Hosted on
              Github Pages.
            </p>
            <button className="demo-button">
              <a
                className="demo-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://rchtect.github.io/mini-project/"
              >
                View Demo
              </a>
            </button>
          </div>
          <img className="chocolatefactory" src={minima} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyWork;
