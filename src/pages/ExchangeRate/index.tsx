import React, {FC, ReactElement, useEffect} from 'react';
import {Box, TextField} from '@mui/material';
import {useStyles} from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {getLatest} from "../../redux/converter/actionCreators";
import {latestRateSelectors} from "../../redux/selectors";
import {rateCurrency} from "../../utils";

const ExchangeRate: FC = (): ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const getLatestRateResult = useSelector(latestRateSelectors)

  useEffect(() => {
    dispatch(getLatest())
  }, [])


  return (
    <Box className={classes.exchangeRate}>
      <Box sx={{minWidth: 250}}>
        {
          Object.keys(getLatestRateResult).map((key) => {
            if (key !== 'UAH') {
              return (
                <TextField className={classes.exchangeRate_field} id="outlined-read-only-input" color='primary' key={key} value={`1 ${key} = ${rateCurrency(getLatestRateResult[key])} UAH`} />
              )
            }
          })
        }
      </Box>
    </Box>
  );
};

export default ExchangeRate;
