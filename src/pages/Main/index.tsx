import { Box, Typography } from '@mui/material';
import React from 'react';

import { useStyles } from './styles';

const Main = () => {
  const classes = useStyles();

  return (
    <Box className={classes.main} mt={7}>
      <Typography variant="h5">Main page</Typography>
    </Box>
  );
};

export default Main;
