import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div className="Contact">
        <h2>CONTACT</h2>
        <p className="slash">////////////</p>
        <div className="contact-content">
          {/* <h4 className="contact-title">Drop me a line!</h4> */}
          <p>
            <a href="mailto:davefrancese@gmail.com">
              <i className="fas fa-envelope-square icon" />davefrancese@gmail.com
            </a>
          </p>
          <p>
            <a href="https://github.com/davefrancese" target="_blank">
              <i className="fab fa-github icon" />github.com/davefrancese
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/davefrancese/" target="_blank">
              <i className="fab fa-linkedin icon" />linkedIn.com/davefrancese
            </a>
          </p>
          <p>
            <a href="../images/davefranceseResume.pdf" target="_blank">
              <i className="fas fa-eye" /> Résumé Review
            </a>
          </p>
          <p>
            <a href="../images/davefranceseResume.pdf" download>
              <i className="fas fa-cloud-download-alt" /> Résumé Download
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
