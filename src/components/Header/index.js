import React from 'react';
import Links from '../Links';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function Header({ name, links }) {
  return (
    <Grid container justify="space-between">
      <Grid item>
        <Typography variant='body1'>{name}</Typography>
      </Grid>
      <Grid item>
        <Links links={links} />
      </Grid>
    </Grid>
  )
}

export default Header;
