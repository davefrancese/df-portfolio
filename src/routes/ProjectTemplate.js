import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Project from "./Project";

class ProjectTemplate extends React.Component {
  render() {
    if (
      this.props.projects[this.props.match.params.id].type === "Web Development"
    ) {
      return (
        <div>
          <Header />
          <Link to="/">
            <i class="fas fa-arrow-left back" />
          </Link>
          <div className="ProjectTemplate">
            <h1 className="project-title">
              {this.props.projects[this.props.match.params.id].title}
            </h1>
            <div className="project-screenshots">
              {this.props.projects[this.props.match.params.id].screenShots.map(
                i => <img className="screenshots" src={i} />
              )}
            </div>
            <div className="project-walkthrough">
              <iframe
                width="560"
                height="315"
                src={`${
                  this.props.projects[this.props.match.params.id].embedVideo
                }`}
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
              />
            </div>

            <p className="project-description">
              {this.props.projects[this.props.match.params.id].description}
            </p>
            <p>
              {this.props.projects[this.props.match.params.id].contributions}
            </p>

            <br />
            {this.props.projects[this.props.match.params.id].techImages.map(
              i => <img className="tech-image" src={i} />
            )}
            <br />
            <br />
            {/* <div className="design-image-list">
                  {this.props.projects[this.props.match.params.id].designImages.map(i => <img className="design-image" src={i} />)}
                </div> */}
            <h3>
              <a
                href={`${this.props.projects[this.props.match.params.id].link}`}
                target="_blank"
              >
                <i class="fas fa-link" /> Visit
              </a>
            </h3>
            <h3>
              <a
                href={`${
                  this.props.projects[this.props.match.params.id].github
                }`}
                target="_blank"
              >
                <i class="fab fa-github" /> GitHub
              </a>
            </h3>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <Link to="/">
            <i class="fas fa-arrow-left back" />
          </Link>
          <div className="ProjectTemplate">
            <h1 className="project-type">
              <span className="slash">//</span>
              {this.props.projects[this.props.match.params.id].type}
            </h1>
            <div className="project-container">
              <div className="project-writeup">
                <img
                  className="project-poster"
                  src={`${
                    this.props.projects[this.props.match.params.id].posterURL
                  }`}
                />
                <h2 className="project-title">
                  {this.props.projects[this.props.match.params.id].title}
                </h2>
                <p className="project-description">
                  {this.props.projects[this.props.match.params.id].description}
                </p>
                <p>
                  {
                    this.props.projects[this.props.match.params.id]
                      .contributions
                  }
                </p>
              </div>
              <br />
              {this.props.projects[this.props.match.params.id].techImages.map(
                i => <img className="tech-image" src={i} />
              )}
              <br />
              <br />
              <div className="design-image-list">
                {this.props.projects[
                  this.props.match.params.id
                ].designImages.map(i => (
                  <img className="design-image" src={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ProjectTemplate;
