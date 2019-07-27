import React from 'react';
import Links from '../Links';
import styles from './index.module.scss';
import Typography from '@material-ui/core/Typography';

function Header({ name, links }) {
  return (
    <div className={styles.container}>
      <Typography variant='body1'>{name}</Typography>
      <div>
        <Links links={links} />
      </div>
    </div>
  )
}

export default Header;
