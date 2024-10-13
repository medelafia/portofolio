import image from "../assets/person.png"
export default function Hero() {
  return (
    <div className="hero custom-bg-primary" id="home">
      <div className="custom-container pt-5 row">
        <div className="col-lg-4 p-5">
          <div className="custom-text-third hero-text text-capitalize">
            what's up,
            <br />
            Im <span className="custom-text-secondary">mohamed</span>
            <br />
            <span className="secondary-font-size">fullstack developer</span>
          </div>
          <button className="btn text-white custom-btn-secondary my-2">hire me !</button>
          <div className="d-flex align-items-center justify-content-start mt-2">
            <div className="p-1 me-1 rounded ">
              <a href="mailto:mohamedelafia723@gmail.com" target="_blanc">
                <i class="fa-solid fa-envelope custom-text-secondary"></i>
              </a>
            </div>
            <div className="p-1 mx-1 rounded">
              <a href="mailto:mohamedelafia723@gmail.com" target="_blanc">
                <i class="fa-brands fa-facebook custom-text-secondary"></i>
              </a>
            </div>
            <div className="p-1 ms-1 rounded">
              <a target="_blanc" href="https://www.bing.com/ck/a?!&&p=38a8181a5c8eb118JmltdHM9MTcyODQzMjAwMCZpZ3VpZD0zNjA4ODhhYi0yNzg3LTZhNGYtMjVlMS05ZGEyMjY2YzZiOTAmaW5zaWQ9NTE4NQ&ptn=3&ver=2&hsh=3&fclid=360888ab-2787-6a4f-25e1-9da2266c6b90&psq=linkedin%2fin%2fmohamed-el-afia-bb5047286&u=a1aHR0cHM6Ly9tYS5saW5rZWRpbi5jb20vaW4vbW9oYW1lZC1lbC1hZmlhLWJiNTA0NzI4Ng&ntb=1">
                <i class="fa-brands fa-linkedin custom-text-secondary"></i>
              </a>
            </div>
            <div className="p-1 ms-1 rounded">
              <a href="https://github.com/medelafia" target="_blanc">
                <i class="fa-brands fa-github custom-text-secondary"></i>
              </a>  
            </div>
            <div className="p-1 ms-1 rounded">
                <i class="fa-brands fa-whatsapp custom-text-secondary"></i>
            </div>
          </div>
        </div>
        <div className="col-lg-4 d-flex align-items-center justify-content-center">
          <img src={image} alt="" style={{width : "500px" , "height" : "500px"}}/>
        </div>
        <div className="col-lg-4 p-5 text-white">
          <div className="secondary-font-size mb-3 custom-text-third">
          Based  in morroco  , <br />
           i’m a fullstack developer . 
          </div>
          <div className="primary-font-size mb-3 custom-text-third">
            hey are you looking for a fullstack developper for build or renew your website ? 
            <br />i think you are find the right person . 
          </div>
          <a className="text-decoration-underline custom-text-secondary" href="#">
            download cv! 
          </a>
        </div>
      </div>
    </div>
  );
}
