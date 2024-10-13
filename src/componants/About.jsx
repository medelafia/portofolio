import Title from "./Title";
import image from "../assets/about.jpeg"
export default function About() {
  return (
    <div className="py-5 about section d-flex align-items-center" id="about">
      <div className="custom-container">
        <Title name="about me" />
        <div className="row mt-5 text-white">
          <div className="col-sm-8 custom-text-third">
            <span className="secondary-font-size text-capitalize mb-2">who am i ?</span>
            <p>
            <br/><br/>
            Hi, I'm Mohamed, a recent graduate from Abd Elmalek Essaadi University with a bachelor's degree in
             Mathematics and Computer Science. As a junior developer, I have a solid foundation in programming, 
             with a focus on full-stack development using Spring Boot and React.js. My academic background has 
             equipped me with strong analytical and problem-solving skills, which I apply daily to build efficient 
             and scalable web applications.
             <br/><br/>
            I’m passionate about technology and constantly learning new frameworks and tools to expand my expertise.
             Whether it's creating dynamic front-end experiences or developing robust back-end systems, 
             I enjoy the challenge of transforming ideas into functional, user-friendly solutions.
            </p>
          </div>
          <div className="col-sm-4 d-flex align-items-start">
            <img src={image} alt="" style={{width : "100%" , height : "100%"}} className="custom-rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
