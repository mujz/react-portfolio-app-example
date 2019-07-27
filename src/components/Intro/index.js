import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '../Link';
import styles from './index.module.scss';

function Intro({ name, aboutLinkHref }) {
  return (
    <div className={styles.container}>
      <Typography
        variant="h4"
        align="center"
        className={styles.title}
      >
        Hi I'm {name}.
      </Typography>
      <Link to={aboutLinkHref} align="center">More about me</Link>
    </div>
  )
}

export default Intro;

