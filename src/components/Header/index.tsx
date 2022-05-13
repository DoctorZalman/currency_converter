import React from 'react';
import {Box, Button} from '@mui/material';
import {useStyles} from './styles';
import {Link} from "react-router-dom";

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.toolbar}>
      <Button variant="outlined">
        <Link
          className={classes.button}
          to="/currency_converter">Converter</Link>
      </Button>
      <Button variant="outlined" color='primary'>
        <Link className={classes.button} to="/exchange_rate">Exchange Rate</Link>
      </Button>
    </Box>
  );
};

export default Header;
