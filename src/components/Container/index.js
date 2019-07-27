import React from 'react';
import MaterialContainer from '@material-ui/core/Container';
import styles from './index.module.scss';

function Container({ children }) {
  return (
    <MaterialContainer className={styles.container}>
      {children}
    </MaterialContainer>
  )
}

export default Container;
