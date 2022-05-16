import "./MyWork.css";
import chocolatefactory from "../assets/chocolatefactory.png";
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
        <p>
          My goal as a developer is to create websites / applications that are
          easy to use, visually appealing and has a purpose. <br /> I focus a
          lot on the user experience since the users are the reason the
          application exists.
        </p>
        <div className="chocolate-factory-container">
          <div className="chocolate-factory-left">
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
      </div>
      <Footer />
    </div>
  );
}

export default MyWork;
