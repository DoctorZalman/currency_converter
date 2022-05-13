import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from "../../components/Header";
import { useStyles } from './styles';

const Index = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Header />
      <Outlet />
    </Box>
  );
};

export default Index;
