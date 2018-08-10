import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="social">
          <p>
            <em>Connect with Me</em>
          </p>
          <a href="https://github.com/davefrancese" target="_blank">
            <i className="fab fa-github icon" />
          </a>
          <a href="https://www.linkedin.com/in/davefrancese/" target="_blank">
            <i className="fab fa-linkedin icon" />
          </a>
          <a href="mailto:davefrancese@gmail.com">
            <i className="fas fa-envelope-square icon" />
          </a>
          <a href="https://homersparks.bandcamp.com/" target="_blank">
            <i className="fab fa-bandcamp icon" />
          </a>
        </div>
        <Link to="/">
          <h1 className="df">dave francese</h1>
        </Link>
        <p className="sub">Full Stack Developer</p>
        <p className="slash">////////////</p>
      </div>
    );
  }
}

export default Header;
