import React from 'react';
import MaterialLink from '@material-ui/core/Link';
import styles from './index.module.scss'

function Link({ children, to, noUnderlineOnHover, ...props }) {
  const classNames = [styles.link]
  if (noUnderlineOnHover) classNames.push(styles['link--no-underline-on-hoever'])
  return (
    <MaterialLink
      {...props}
      className={classNames.join(' ')}
      color="inherit"
      href={to}
    >
      {children}
    </MaterialLink>
  )
}

export default Link;
