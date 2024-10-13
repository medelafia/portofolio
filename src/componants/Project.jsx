import image from "../assets/about.jpeg" ;  
export default function Project({project}) {
    return (
        <div className="col-md-6 col-sm-12 col-lg-4 my-2">
            <div className="container">
                <img src={image} className="custom-rounded w-100" alt=""/>
                <div className="w-100 d-flex align-items-center justify-content-between my-2">
                    <h5 className="text-capitalize custom-text-secondary">{project.name}</h5>
                    <div className="d-flex text-white">
                        { project.demoLink && <i class="fa-solid fa-video mx-1"></i> } 
                        { project.githubLink && <i class="fa-brands fa-github mx-1"></i> } 
                        { project.url && <i class="fa-solid fa-link mx-1"></i> } 
                    </div>
                </div>
                <p className="text-white mt-2 text-capitalize">
                    { project.description }
                </p>
            </div>
        </div>
    )
}