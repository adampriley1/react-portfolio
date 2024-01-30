import Project from '../components/Project';
import projects from '../data/projects.json';
import { useParams } from 'react-router-dom';
import teamGenerator from "../assets/img/teamGenerator.png";

function ProjectsGallery() {
    // Body
    const { id } = useParams()

    return <div>
        <h1 className='mb-5 p-5 projectGalleryHeader'>Some recent projects I have worked on...</h1>
        <div className='container'>
            { projects.map((project) => {
                return <Project key={project.id} title={project.title} description={project.description} />;
                
            })}
        </div>
    </div>
}

export default ProjectsGallery;



