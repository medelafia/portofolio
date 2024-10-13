import Project from "./Project";
import Title from "./Title";

export default function Projects() {
    const projects = [
        { 
            name : "travel management and recommendation" , 
            githubLink : null , 
            demoLink : null , 
            image : null , 
            url : null , 
            description : "cycle end project as plateform for travel management and recommendation based on collaborative filtring ( deep learning algorithm ) , the project developed by react js and spring boot and python"
        } , 
        { 
            name : "disease diagnosis" , 
            githubLink : null , 
            demoLink : null , 
            image : null , 
            url : null , 
            description : "i created a deep learning model to diagnose diseases from symptoms , achieving an accuracy of 0.99 , the model was deployed using fastapi , with reactJS handling the frontend interface" }  ,  
        { name : "disease diagnosis" , githubLink : null , demoLink : null , image : null , url : null , description : null } ,  
    ]
    return( 
        <div className="section" id="projects">
            <div className="custom-container">
                <Title name="my projects"/>
                <p className="text-white my-3">
                    Showcasing My Work and Innovation in Web Development
                </p>
                <div className="row my-2">
                    { 
                        projects.map(project => <Project project={project} />)
                    }
                </div>
            </div>
        </div>
    )
}