const ProjectCard = (props) => {
    return (
        
        <div class="column">
            <h1 class="project"><a class="projects"href={props.link}>{props.name}</a></h1>
            <p class="projects">{props.descrip}</p>

        </div>

    );
}

export default ProjectCard;