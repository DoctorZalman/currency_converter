import React, {useState} from 'react';
import {Box, Button, TextField} from '@mui/material';
import {useStyles} from './styles';
import {useDispatch, useSelector} from "react-redux";
import {getCurrency, IConvertPayload} from "../../redux/converter/actionCreators";
import currencySelectors from "../../redux/selectors";

const CurrencyConverter = () => {
  const [mainInputData, setMainInputData] = useState('');
  const classes = useStyles();
  const selectorrS = useSelector(currencySelectors)

  console.log(selectorrS);
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
    console.log(e);
    if (e.key === 'Enter' || e.target) {
      convertData(mainInputData)
    }
  }

  return (
    <Box className={classes.main} >
      <Box>
        <TextField
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
                onClick={handleOnClickField}
              >Enter</Button>
            }
          }
        />

      </Box>
      <TextField className={classes.secondaryInput} value={selectorrS} id="outlined-basic" variant="outlined"/>

    </Box>
  );
};

export default CurrencyConverter;
