import Skill from "./Skill";
import Title from "./Title";

export default function Skills() {
  return (
    <div className="section" id="skills">
      <div className="custom-container">
        <Title name="Skills" />
        <p className="text-white my-3">
        Harnessing the Power of Technology to Deliver Innovative Solutions
        </p>
        <div className="row third-font-size custom-text-secondary">
          <Skill>
            <i class="fa-brands fa-html5"></i>
          </Skill>
          <Skill>
            <i class="fa-brands fa-css3-alt"></i>
          </Skill>
          <Skill>
            <i class="fa-brands fa-java"></i>
          </Skill>
          <Skill>
            <i class="fa-brands fa-python"></i>
          </Skill>
          <Skill>
            <i class="fa-solid fa-c"></i>
          </Skill>
          <Skill>
            <i class="fa-brands fa-linux"></i>
          </Skill>
          <Skill>
            <i class="fa-brands fa-react"></i>
          </Skill>
          <Skill>
            <i class="fa-solid fa-database"></i>
          </Skill>
          <Skill>
            <i class="fa-brands fa-js"></i>
          </Skill>
          <Skill>
            <i class="fa-brands fa-github mx-1"></i>
          </Skill>
          <Skill>
            <i class="fa-brands fa-git-alt"></i>
          </Skill>
          <Skill>
            <i class="fa-brands fa-git-alt"></i>
          </Skill>
        </div>
      </div>
    </div>
  );
}
