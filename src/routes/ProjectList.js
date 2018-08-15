import React from "react";
import Project from "./Project";

class ProjectList extends React.Component {
  render() {
    return (
      <div>
        <div className="ProjectList-title">
          {/* <h2>PROJECTS</h2>
          <p className="slash">////////////</p> */}
        </div>
        <div className="ProjectList">
          {this.props.projects.map(project => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    );
  }
}

export default ProjectList;
