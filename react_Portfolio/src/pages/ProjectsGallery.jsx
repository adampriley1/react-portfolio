import Project from '../components/Project';
import projects from '../data/projects.json';
import { useParams } from 'react-router-dom';


function ProjectsGallery() {
    // Body


    return <div>
        <h1 className='mb-5 p-5 projectGalleryHeader'>Some recent projects I have worked on...</h1>
        <div className='container'>
            { projects.map((project) => {
                return <Project key={project.id} title={project.title} description={project.description} id={project.id} />;
                
            })}
        </div>
    </div>
}

export default ProjectsGallery;



