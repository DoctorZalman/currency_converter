import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React from 'react';

import { useStyles } from './styles';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar elevation={0} position="fixed">
      <Toolbar className={classes.toolbar} disableGutters variant="dense">
        <Box
          className={classes.logoBox}
          pr={1.4}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexGrow={0}
          flexShrink={0}
          flexBasis={125}
        ></Box>
        <Box
          pr={3.1}
          pl={1.8}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexGrow={0}
          flexShrink={1}
          flexBasis={1515}
        >
          <Typography display="inline" paragraph={false} variant="h6" component="h3" align="center" color="initial">
            APP
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
