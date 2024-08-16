import React from "react";
import logo from "../images/logo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Navbar() {
  const githubLink = import.meta.env.VITE_Github_LINK;
  const igLink = import.meta.env.VITE_IG_LINK;
  const xLink = import.meta.env.VITE_X_LINK;
  const linkedInLink = import.meta.env.VITE_LinkedIN_LINK;

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 item-center">
        <img
          className="mx-2 w-10"
          src={logo}
          alt="logo"
          style={{ height: "70px", width: "140px" }}
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href={linkedInLink} target="blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href={githubLink} target="blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href={igLink} target="blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href={xLink} target="blank" rel="noopener noreferrer">
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
