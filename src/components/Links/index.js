import React from 'react';
import shortid from 'shortid';
import Link from '../Link';

function Links({ links }) {
  return links
    .map(link => (
      <Link
        key={shortid.generate()}
        to={link.href}
        noUnderlineOnHover
      >
        {link.text}
      </Link>
    ))
    .reduce((prev, curr) => [prev, ' / ', curr])
}

export default Links;
