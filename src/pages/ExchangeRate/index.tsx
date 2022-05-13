import React, {useEffect} from 'react';
import {Box, Typography} from '@mui/material';
import {useStyles} from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {getLatest} from "../../redux/converter/actionCreators";
import {latestRateSelectors} from "../../redux/selectors";
import {rateCurrency} from "../../utils";

const ExchangeRate = () => {
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
                <Typography key={key}>
                  {`1 ${key} = ${rateCurrency(getLatestRateResult[key])} UAH`}
                </Typography>
              )
            }
          })
        }
      </Box>
    </Box>
  );
};

export default ExchangeRate;
