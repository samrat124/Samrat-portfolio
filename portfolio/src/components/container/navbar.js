import { NavHashLink, HashLink } from "react-router-hash-link";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function Navbar() {
  const [sideBar, setSideBar] = useState(false);
  function toggleTheme() {
    let html = document.getElementsByTagName("html")[0];
    html.classList.toggle("light");
  }

  const showSidebar = () => {
    setSideBar((prev) => !prev);
  };
  return (
    <>
      <div className="header-fixed">
        <NavHashLink smooth to="#">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT75ZdZxqBfR9KZN4yr5bl3c7Jdimw9v8JngFPWtiNzB5q8yERbLNBPSyQlhsz6zEPFzsI&usqp=CAU"
            alt="logo"
            style={{ width: "80px", height: "80px" }}
          />
        </NavHashLink>
        <nav className={sideBar ? "SideNavbar" : "Navbar"}>
          <NavHashLink smooth={true} to="#home">
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about">
            About me
          </NavHashLink>
          <NavHashLink smooth to="#skills">
            Skills
          </NavHashLink>
          <NavHashLink smooth to="#projects">
            Projects
          </NavHashLink>
          <NavHashLink smooth to="#github">
            Github
          </NavHashLink>
          <NavHashLink smooth to="#education">
            Education
          </NavHashLink>
          <NavHashLink smooth to="#contacts">
            Contact
          </NavHashLink>
          {/* <a
          href="https://drive.google.com/file/d/1ghWoOeEobmhWALI3G0jRULSj2CUwmmE-/view"
          target="_blank"
          className="button"
        >
          RESUME
        </a> */}
        </nav>
        <div className="hamburger" onClick={showSidebar}>
          <GiHamburgerMenu />
        </div>
      </div>
    </>
  );
}

export default Navbar;