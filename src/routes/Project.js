import React from 'react';
import { Link } from 'react-router-dom'

class Project extends React.Component {
  render() {
    return (
      <div className="Project">
        <Link to={`${this.props.project.id}`}>
          <img className="pro-card" src={`${this.props.project.posterURL}`}/>
            <h3 className="show-project-type">{this.props.project.type}</h3>
        </Link>
      </div>
    )
  }
}

export default Project;
