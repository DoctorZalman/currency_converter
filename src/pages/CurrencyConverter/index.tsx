import React, {FC, ReactElement, useState} from 'react';
import {Box, Button, TextField} from '@mui/material';
import {useStyles} from './styles';
import {useDispatch, useSelector} from "react-redux";
import {getCurrency} from "../../redux/converter/actionCreators";
import {currencySelectors} from "../../redux/selectors";
import {IConvertPayload} from "../../interfaces";

const CurrencyConverter: FC = (): ReactElement => {
  const [mainInputData, setMainInputData] = useState('');
  const classes = useStyles();
  const getConvertDataResult = useSelector(currencySelectors)
  const dispatch = useDispatch();

  const convertData = (data: string): void => {
    const splitedData = data.split(' ');
    const [amount, from, , to] = splitedData;
    const payload: IConvertPayload = {amount, from, to};

    dispatch(getCurrency(payload));
  }

  const handleChangeValue = (e: any): void => {
    setMainInputData(e.target.value)
  }

  const handleOnClickField = (e: any): void => {
    if (e.key === 'Enter') {
      convertData(mainInputData)
    }
  }

  const handleClickButton = (): void => {
    convertData(mainInputData)
  }

  return (
    <Box
      className={classes.main}
      sx={
        {
          justifyContent: {xs: "space-between", md: 'space-around'},
          flexDirection: {md: 'row', xs: 'column'},
          width: {md: '75%', xs: '92%'}
        }
      }
    >
      <TextField
        className={classes.mainInput}
        color="primary"
        value={mainInputData}
        onKeyPress={handleOnClickField}
        onChange={handleChangeValue}
        id="outlined-basic"
        label="Ex: 15 usd in uah"
        variant="outlined"
        InputProps={
          {
            endAdornment: <Button
              onClick={handleClickButton}
            >Enter</Button>
          }
        }
      />
      <TextField
        color="primary"
        className={classes.secondaryInput}
        value={Number(getConvertDataResult).toFixed(2)}
        id="outlined-basic"
        variant="outlined"/>
    </Box>
  );
};

export default CurrencyConverter;
