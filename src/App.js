import MyNavbar from './components/my-navbar/myNavbar';
import MyCarousel from './components/my-carousel/myCarousel';
import MyTitleMessage from './components/title-message/titleMessage';
import AboutMe from './pages/about/aboutMe';
import MySkills from './pages/skills/mySkills';
import MyEducation from './pages/education/myEducation';
import MyProjects from './components/my-projects/myProjects';
import MyContact from './pages/contact/contactMe';
import Footer from './components/footer/footer';
// import Particles from "react-particles-js";
// import { particlesOptions } from "./particlesOptions";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import Container from 'react-bootstrap/Container';

import BgImage from './assets/img/parallex/background.webp';

import './App.css';

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />

      <MyCarousel />

      <MyTitleMessage />

      {/* <Particles className="particles particles-box" params={particlesOptions}/> */}

      {/* About Me */}
      <div>
        <Parallax blur={{ min: -30, max: 30 }} bgImage={ BgImage } bgImageAlt="" strength={-200}>
          <Container className="container-box rounded">
            <Fade duration={500}>
              <AboutMe />
            </Fade>
          </Container>
        </Parallax>        
      </div>

      {/* My Skills */}
      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <MySkills />
          </Slide>
        </Container>        
      </div>

      {/* My Education */}
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <MyEducation />
          </Fade>
        </Container>        
      </div>

      {/* My Projects */}
      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <MyProjects />
          </Slide>
        </Container>        
      </div>

      {/* My Contacts */}
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <MyContact />
          </Fade>
        </Container>        
      </div>

      {/* Footer */}
      <hr />
      <Footer />
    </div>  
  );
}

export default App;
