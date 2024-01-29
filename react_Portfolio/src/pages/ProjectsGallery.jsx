import Project from '../components/Project';
import projects from '../data/projects.json';

function ProjectsGallery() {
    // Body
    return <div className="container">
        <h1 className='my-5'>Some recent projects I have worked on...</h1>
        <div>
            { projects.map((project) => {
                return <Project key={project.id} title={project.title} description={project.description} />;
            })}
        </div>
    </div>
}

export default ProjectsGallery;