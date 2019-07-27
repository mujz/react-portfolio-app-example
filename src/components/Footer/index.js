import React from 'react';
import Links from '../Links';
import Box from '@material-ui/core/Box';

function Footer({ links }) {
  return (
    <Box display="flex" justifyContent="center" marginBottom="16px">
      <Links links={links} />
    </Box>
  )
}

export default Footer;
