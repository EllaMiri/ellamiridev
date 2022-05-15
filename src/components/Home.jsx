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
          <span>
            {" "}
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span>
            {" "}
            <FontAwesomeIcon icon={faLinkedin} />
          </span>
          <span>
            {" "}
            <FontAwesomeIcon icon={faGithub} />
          </span>
          <span>
            {" "}
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
