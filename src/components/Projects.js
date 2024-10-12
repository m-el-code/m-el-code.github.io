import ProjectCard from './ProjectCard'
function Projects () {
    return (
        <>
            <div id="projects" class="projects">
                <h1 class="title">Projects</h1>
                <div class="cards-row">
                    <div class="card">
                        <ProjectCard
                            name="Audio App Simulator"
                            desc="Simulation of an audio app, created in Java"
                            link="https://github.com/m-el-code/Elbeshbishy_Manar_CPS209_Assignement_2"
                        /> 
                    </div>
                    
                    <div class="card">
                        <ProjectCard 
                            name="Final Grade Calculator"
                            desc="Calculator designed to produce final grade needed in a course, created in python"
                            link="https://github.com/m-el-code/CPS-109-Labs---Assignments/blob/main/a1.py"
                        />
                    </div>

                    <div class="card">
                        <ProjectCard 
                            name="Websites"
                            desc="Series of websites created from my web systems development course"
                            link="https://github.com/m-el-code/Web-Dev-Systems-Projects"
                        />
                    </div>

                    {/*<div class="card">
                        <ProjectCard 
                            name="Cryptogram Game"
                            desc="Terminal based game to decode a message (in progress)"
                            link=""
                        />
                    </div>*/}                    
                </div>
                

                

                

            </div>
        </>
    );
}

export default Projects;