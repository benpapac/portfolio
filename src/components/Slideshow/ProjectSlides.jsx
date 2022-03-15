import { useContext, useEffect} from 'react';
import { ProjectContext } from '../../Context';
import "./ProjectSlides.css";

const ProjectSlides = () => {
    const projectContext = useContext(ProjectContext);
    const count = projectContext.count;
    const slideshow = projectContext.projectSlides;

return (
    <>
    <section className="project-slideshow-box" >
        <div className='project-slideshow' >
            <div className="project-slider" 
                style={{transform: `translate3d(${-count*(100/slideshow.length)}%, 0, 0)`}}
            >
                {slideshow.map(
                    (slide, index) => {   
                    return <div key={index} className='project-slide'>
                        {slide}
                        </div>
                })}
            </div>
        </div>
    </section>
    </>
)
};

export default ProjectSlides;