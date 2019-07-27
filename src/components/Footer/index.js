import React from 'react';
import Links from '../Links';
import styles from './index.module.scss';

function Footer({ links }) {
  return (
    <div className={styles.container}>
      <div>
        <Links links={links} />
      </div>
    </div>
  )
}

export default Footer;
