import React, {useState} from 'react';
import {Box, Button, TextField} from '@mui/material';
import {useStyles} from './styles';
import {useDispatch, useSelector} from "react-redux";
import {getCurrency} from "../../redux/converter/actionCreators";
import {currencySelectors} from "../../redux/selectors";
import {IConvertPayload} from "../../interfaces";

const CurrencyConverter = () => {
  const [mainInputData, setMainInputData] = useState('');
  const classes = useStyles();
  const getConvertDataResult = useSelector(currencySelectors)
  const dispatch = useDispatch();

  const convertData = (data: string) => {
    const splitedData = data.split(' ');
    const [amount, from, , to] = splitedData;
    const payload: IConvertPayload = {amount, from, to};

    dispatch(getCurrency(payload));
  }

  const handleChangeValue = (e: any) => {
    setMainInputData(e.target.value)
  }

  const handleOnClickField = (e: any) => {
    if (e.key === 'Enter') {
      convertData(mainInputData)
    }
  }

  const handleClickButton = () => {
    convertData(mainInputData)
  }

  return (
    <Box className={classes.main}>
      <Box>
        <TextField
          color="primary"
          value={mainInputData}
          onKeyPress={handleOnClickField}
          onChange={handleChangeValue}
          id="outlined-basic"
          helperText="Ex: 15 usd in uah"
          label="Please enter currency"
          variant="outlined"
          InputProps={
            {
              endAdornment: <Button
                onClick={handleClickButton}
              >Enter</Button>
            }
          }
        />

      </Box>
      <TextField className={classes.secondaryInput} value={Number(getConvertDataResult).toFixed(2)} id="outlined-basic"
                 variant="outlined"/>
    </Box>
  );
};

export default CurrencyConverter;
