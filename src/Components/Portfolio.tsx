import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';



interface PortfolioProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data:any
}

interface Project {
  src: string;
  alt: string;
}

const Portfolio:React.FC<PortfolioProps> = (props) =>{

  const {data} = props;

  if (!data || !data.projects) return null;
  
  const {projects} = data;

  return (
     <section id="portfolio">
          <PhotoProvider>
      <div className="foo">
        {projects.map((item:Project, index:number) => (
          <PhotoView key={index} src={item.src}>
            <img src={item.src} alt=""  width={200}/>
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>

    </section>
  );
}

export default Portfolio;

