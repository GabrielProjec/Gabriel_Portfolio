import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./sidebar";

// ICONS
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ComputerIcon from "@mui/icons-material/Computer";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import WestIcon from "@mui/icons-material/West";

function Siderbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container isMenuOpen={menuOpen}>
      <button type="button" onClick={handleToggleMenu}>
        {menuOpen ? <WestIcon /> : <ArrowForwardIcon />}
      </button>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <HomeIcon />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <AccountCircleIcon />
              <span>Sobre Mim</span>
            </Link>
          </li>
          <li>
            <Link to="/Skills">
              <PsychologyIcon />
              <span>Skills</span>
            </Link>
          </li>
          <li>
            <Link to="/project">
              <ComputerIcon />
              <span>Projetos</span>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <ContactPageIcon />
              <span>Contatos</span>
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
export default Siderbar;
