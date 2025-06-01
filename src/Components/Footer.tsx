/* eslint-disable @typescript-eslint/no-explicit-any */
import  { Component } from "react";
import { Fade } from "react-awesome-reveal";


interface PortfolioProps {
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
                <li>&copy; Copyright 2025 Suresh K</li>
                <li>
                  Design by{" "}
                  <a title="Styleshout" href="hhttps://github.com/sureshforuin/suresh-online-v1">
                    Suresh K
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
