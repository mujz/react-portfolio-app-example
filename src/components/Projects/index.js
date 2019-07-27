import React from 'react';
import Project from '../Project'
import styles from './index.module.scss'

function Projects({ projects }) {
  return (
    <div className={styles.container}>
      {
        projects.map(project => (
          <Project
            title={project.title}
            description={project.description}
            image={project.image}
            source={project.source}
            demo={project.demo}
          />
        ))
      }
    </div>
  )
}

export default Projects;
