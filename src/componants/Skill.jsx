export default function Skill({children}) {
    return (
        <div className="col-sm-2 my-2 cursor-pointer">
            <div className="container rounded bg-fourth py-5 d-flex align-items-center justify-content-center">
                {children}
            </div>
        </div>
    )
}