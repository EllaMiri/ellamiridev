import "./Home.css";
import memoji from "../assets/ellamiri_memoji.mov";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSnapchatSquare } from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <div className="home-container">
      <div className="home-text-container">
        <p className="hi-there">Hi there! My name is</p>
        <h2 className="name">Ella Larsson</h2>
        <p className="occupation">and I'm a front end developer</p>
        <div className="contact-icons">
          <a className="mail" href="mailto:ella.larsson0012@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            className="linkedin"
            href="https://se.linkedin.com/in/ella-larsson-827a4318a/en?trk=people-guest_people_search-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            className="github"
            href="https://github.com/EllaMiri"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <span>
            <FontAwesomeIcon icon={faSnapchatSquare} />
          </span>
        </div>
        <video
          className="memoji"
          autoPlay
          loop
          muted
          playsInline
          // controls
          // src="./assets/memoji.mp4"
          // type="video/mp4"
          src={memoji}
        >
          {/* <source src={memoji} /> */}
        </video>
      </div>
    </div>
  );
}

export default Home;
