import React from 'react';
import Project from '../Project';
import shortid from 'shortid';
import Grid from '@material-ui/core/Grid';

function Projects({ projects, updateFavoritesCount }) {
  return (
    <Grid container spacing={3} justify="center">
      {
        projects.map(project => (
          <Grid item key={shortid.generate()}>
            <Project
              resourceName={project.name}
              title={project.fields.name.stringValue}
              description={project.fields.shortDescription.stringValue}
              image={project.fields.photoURL.stringValue}
              source={project.fields.sourceURL.stringValue}
              favoritesCount={project.fields.favoritesCount.integerValue}
              demo={project.fields.demoURL && project.fields.demoURL.stringValue}
              updateFavoritesCount={updateFavoritesCount}
            />
          </Grid>
        ))
      }
    </Grid>
  )
}

export default Projects;
