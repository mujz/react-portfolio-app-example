import React from 'react';
import Project from '../Project';
import shortid from 'shortid';
import Grid from '@material-ui/core/Grid';

function Projects({ projects }) {
  debugger
  return (
    <Grid container spacing={3} justify="center">
      {
        projects.map(project => (
          <Grid item key={shortid.generate()}>
            <Project
              title={project.fields.name.stringValue}
              description={project.fields.shortDescription.stringValue}
              image={project.fields.photoURL.stringValue}
              source={project.fields.sourceURL.stringValue}
              demo={project.fields.demoURL && project.fields.demoURL.stringValue}
            />
          </Grid>
        ))
      }
    </Grid>
  )
}

export default Projects;
