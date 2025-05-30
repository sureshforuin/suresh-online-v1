import { Component } from "react";
import { Fade } from "react-awesome-reveal";

let id = 0;

interface PortfolioProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data:any
}

class Portfolio extends Component<PortfolioProps> {

  render() {
    if (!this.props.data) return null;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const projects = this.props.data.projects.map( (projects:any) =>{
      // const projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            {/* <Zmage alt={projects.title} src={projectImage} /> */}
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade duration={1000}>
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
