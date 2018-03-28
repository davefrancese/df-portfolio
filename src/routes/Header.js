import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
          <div className="social">
            <p><em>Connect with Me</em></p>
            <a href="https://github.com/davefrancese" target="_blank">
              <i class="fab fa-github icon"></i>
            </a>
            <a href="https://www.linkedin.com/in/dave-francese/" target="_blank">
              <i class="fab fa-linkedin icon"></i>
            </a>
            <a href="mailto:davefrancese@gmail.com">
              <i class="fas fa-envelope-square icon"></i>
            </a>
            <a href="https://homersparks.bandcamp.com/" target="_blank">
              <i class="fab fa-bandcamp icon"></i>
            </a>
          </div>
        <h1 className="df">dave francese</h1>
        <p className="sub">Full Stack Developer</p>
        <p className="slash">////////////</p>
      </div>
    );
  }
}

export default Header;
