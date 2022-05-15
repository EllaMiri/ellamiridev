import "./Home.css";
import memoji from "../assets/ellamiri_memoji.mov";

function Home() {
  return (
    <div className="home-container">
      <div className="home-text-container">
        <p className="hi-there">Hi there! My name is</p>
        <h2 className="name">Ella Larsson</h2>
        <p className="occupation">and I'm a front end developer</p>
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
