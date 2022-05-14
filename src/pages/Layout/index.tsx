import React, {FC, ReactElement} from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from "../../components/Header";
import { useStyles } from './styles';

const Index: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper} sx={{
      backgroundColor: 'primary.dark',
    }}>
      <Header />
      <Outlet />
    </Box>
  );
};

export default Index;
