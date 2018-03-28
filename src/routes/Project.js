import React from 'react';
import { Link } from 'react-router-dom'

class Project extends React.Component {
  render() {
    return (
      <div>
        <Link to={{
          pathname: `${this.props.project.id}`,
          state: `${this.props.project.id}`
        }}>
          <img src={`${this.props.project.posterURL}`}/>
        </Link>
      </div>
    )
  }
}

export default Project;
