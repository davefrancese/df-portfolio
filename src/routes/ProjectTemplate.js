import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'
import Project from './Project';


class ProjectTemplate extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params.id

  }

  render() {
    console.log('props=', this.props);
    console.log('id=',this.props.match.params.id);
    return (
      <div>
        <Header />
        <Link to='/'>
          <p className="back">back</p>
        </Link>

        {/* <h1>{this.props.project.title}</h1> */}
      </div>
    )
  }
}

export default ProjectTemplate;
