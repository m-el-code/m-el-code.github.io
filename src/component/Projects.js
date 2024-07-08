import ProjectCard from "./ProjectCard";

function Projects(){
    return (
        <>
            <div id="Projects" class="projects"> 
                <h1 class="contents">Projects</h1>
                <div class="row">
                    <div class="column">
                        <h1 class="project">Languages</h1>
                        <ul class="languages">
                            <li class="languages">Python</li>
                            <li class="languages">Java</li>
                            <li class="languages">C</li>
                            <li class="languages">Linux/Bash</li>
                            <li class="languages">HTML/CSS/JS/REACT</li>
                        </ul>
                    </div>
                    <ProjectCard 
                        name="Audio App Simulator"
                        descrip="Simulation of an audio app, created in Java"
                        link="https://github.com/m-el-code/Elbeshbishy_Manar_CPS209_Assignement_2"
                    />

                    <ProjectCard 
                        name="Final Grade Calculator"
                        descrip="Calculator designed to produce final grade needed in a course, created in python"
                        link="https://github.com/m-el-code/CPS-109-Labs---Assignments/blob/main/a1.py"
                    />
                    
                </div> 
            </div>
        </>
    );
}

export default Projects;