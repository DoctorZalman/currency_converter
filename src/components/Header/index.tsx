import React, {FC, ReactElement} from 'react';
import {Box, Button} from '@mui/material';
import {useStyles} from './styles';
import {Link} from "react-router-dom";

const Header: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <Box className={classes.toolbar}>
      <Button className={classes.button} variant="outlined">
        <Link
          className={classes.menu_button_link}
          to="/currency_converter">Converter</Link>
      </Button>
      <Button className={classes.button} variant="outlined" color='primary'>
        <Link className={classes.menu_button_link} to="/exchange_rate">Exchange</Link>
      </Button>
    </Box>
  );
};

export default Header;
