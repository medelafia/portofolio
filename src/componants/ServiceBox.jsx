import "./componants.css"
export default function ServiceBox({children}) {
    return (
        <div className="col-sm-12 col-lg-4 col-md-6">
            <div className="container bg-fourth rounded d-flex flex-column align-items-center justify-content-center py-5">
                <div>
                    {children}
                </div>
                <h5 className="text-capitalize custom-text-secondary my-2">web dev</h5>
                <div className="text-white text-center mt-3 p-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati officiis voluptatem dicta, cumque 
                </div>
            </div> 
        </div>
    )
}