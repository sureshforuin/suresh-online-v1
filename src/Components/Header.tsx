import  { Component } from "react";
import ParticlesBg from "particles-bg";
import { Fade } from "react-awesome-reveal";

interface HeaderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

class Header extends Component<HeaderProps> {
  render() {
    if (!this.props.data) return null;

    const {youtube, github, name, description} = this.props.data;

    return (
      <header id="home">
        <ParticlesBg color="#FFFFFF" type="cobweb" bg={true} />
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Journey
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Art works
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade
              delay={200} // Wait before starting
              duration={1000} // Animation duration
              fraction={0.5} // Trigger when 50% visible
              triggerOnce // Animate only once
            >
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade
              delay={200} // Wait before starting
              duration={1200} // Animation duration
              fraction={0.5} // Trigger when 50% visible
              triggerOnce // Animate only once
            >
              <h3>{description}.</h3>
            </Fade>
            <hr />
            <Fade
              delay={200} // Wait before starting
              duration={1500} // Animation duration
              fraction={0.5} // Trigger when 50% visible
              triggerOnce // Animate only once
            >
              <ul className="social">
                <a
                  href={youtube}
                  target="_blank"
                  className="button btn project-btn">
                  <i className="fa fa-youtube"></i>Youtube
                </a>
                <a
                  href={github}
                  target="_blank"
                  className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
