import React from 'react';
import Project from '../Project';
import shortid from 'shortid';
import Grid from '@material-ui/core/Grid';

function Projects({ projects }) {
  return (
    <Grid container spacing={3} justify="center">
      {
        projects.map(project => (
          <Grid item key={shortid.generate()}>
            <Project
              title={project.title}
              description={project.description}
              image={project.image}
              source={project.source}
              demo={project.demo}
            />
          </Grid>
        ))
      }
    </Grid>
  )
}

export default Projects;
