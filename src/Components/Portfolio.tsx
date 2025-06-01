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
        <div key={id++} className="portfolio-item" style={{marginLeft:20}} >
          <h5>{projects.title}</h5>
          <iframe width="560" height="315" 
            src={projects.url} 
            title={projects.title} 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            >
            </iframe>
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
                style={{display:"flex",marginLeft:20}}
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
