import React from 'react'
import Project from './Project'

class ProjectList extends React.Component {
  render() {
    return (
      <div>
        {this.props.projects.map(project =>
          <Project
            key={project.id}
            project={project}
          />
        )}
      </div>
    )
  }
}

export default ProjectList;
