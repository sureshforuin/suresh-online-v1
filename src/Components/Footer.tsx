/* eslint-disable @typescript-eslint/no-explicit-any */
import  { Component } from "react";
import { Fade } from "react-awesome-reveal";


interface PortfolioProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

class Footer extends Component<PortfolioProps> {

  render() {
    if (!this.props.data) return null;

    const networks = this.props.data.social.map( (network:any) =>{
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <footer>
        <div className="row">
          <Fade >
            <div className="twelve columns">
              <ul className="social-links">{networks}</ul>

              <ul className="copyright">
                <li>&copy; Copyright 2021 Nordic Giant</li>
                <li>
                  Design by{" "}
                  <a title="Styleshout" href="http://www.styleshout.com/">
                    Styleshout
                  </a>
                </li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
