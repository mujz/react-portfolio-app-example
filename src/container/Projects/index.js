import React from 'react';
import ProjectsComponent from '../../components/Projects'
const BASE_URL = 'https://firestore.googleapis.com/v1'

class Projects extends React.Component {
  state = {
    projects: null,
  }

  componentDidMount() {
    this.fetchProjects();
  }

  fetchProjects = async () => {
    const url = `${BASE_URL}/projects/portfolio-mujz/databases/(default)/documents/projects/`
    const response = await fetch(url);
    const json = await response.json();
    this.setState({ projects: json.documents });
  }

  updateFavoritesCount = (resourceName, newFavoritesCount) => {
    const url = `${BASE_URL}/${resourceName}?currentDocument.exists=true&updateMask.fieldPaths=favoritesCount`;
    // TODO save the newValue in the DB by making a PATCH request with
    // Content-Type = 'application/json' to the url defined above with the
    // request body looking like this:
    // {
    //   fields: {
    //     favoritesCount: {
    //       integerValue: JSON.stringify(newFavoritesCount)
    //     }
    //   }
    // }
  }

  render() {
    if (this.state.projects === null) {
      return (<h1>Loading ...</h1>);
    }
    return (
      <ProjectsComponent
        projects={this.state.projects}
        updateFavoritesCount={this.updateFavoritesCount}
      />
    )
  }
}

export default Projects;
