import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const setLightMode = () => {
    const currentPrimaryColor = document
      .querySelector(":root")
      .getAttribute("--primary-color");
    const currentThirdColor =
      document.documentElement.style.getPropertyValue("--third-color");
    console.log(
      "primary = " + currentPrimaryColor + "third = " + currentThirdColor
    );
  };
  return (
    <div className="sticky-top custom-bg-primary custom-text-secondary ">
      <div className="custom-container d-flex align-items-center justify-content-between custom-navbar position-relative">
        <h2 className="text-capitalize">mohamed el afia</h2>
        <div className="d-flex align-items-center justify-content-center">
          <button className="btn" onClick={setLightMode}>
            <i class="fa-solid fa-lightbulb custom-text-secondary"></i>
          </button>
          <button className="btn" onClick={() => setShowMenu(!showMenu)}>
            <i class="fa-solid fa-bars-staggered custom-text-secondary"></i>
          </button>
        </div>
        {showMenu && (
          <ul
            className="text-capitalize p-3 rounded custom-bg-secondary custom-nav-menu d-flex flex-column align-items-end text-white"
            style={{ width: "40%" }}
          >
            <li className="py-1">
              <a href="#home">home</a>
            </li>
            <li className="py-1">
              <a href="#about">about me</a>
            </li>
            <li className="py-1">
              <a href="#services">services</a>
            </li>
            <li className="py-1">
              <a href="#projects">projects</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
