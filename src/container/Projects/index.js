import React from 'react';
import ProjectsComponent from '../../components/Projects'

class Projects extends React.Component {
  state = {
    projects: null,
  }

  componentDidMount() {
    this.fetchProjects();
  }

  fetchProjects = async () => {
    const url = 'https://firestore.googleapis.com/v1/projects/portfolio-mujz/databases/(default)/documents/projects/'
    const response = await fetch(url);
    const json = await response.json();
    this.setState({ projects: json.documents });
  }

  render() {
    if (this.state.projects === null) {
      return (<h1>Loading ...</h1>);
    }
    return (
      <ProjectsComponent
        projects={this.state.projects}
      />
    )
  }
}

export default Projects;
