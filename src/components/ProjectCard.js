const ProjectCard = (props) => {
    return (
        <div class="column">
            <h1><a href={props.link}>{props.name}</a></h1>
            <p>{props.desc}</p>
            
        </div>
    )
}

export default ProjectCard;