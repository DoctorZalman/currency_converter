import React, {useState} from 'react';
import {Box, TextField} from '@mui/material';
import {useStyles} from './styles';
import {useDispatch, useSelector} from "react-redux";
import {getCurrency, IConvertPayload} from "../../redux/converter/actionCreators";
// import {currencySelectors} from "../../redux/selectors";

const CurrencyConverter = () => {
  const [data, setData] = useState('');

  const classes = useStyles();

  const selectorrS = useSelector((state: any) => state);

  console.log(selectorrS);

  console.log(data);
  const dispatch = useDispatch();

  const convertData = (data: string) => {

    const splitedData = data.split(' ');

    const [amount, from, ,to] = splitedData;

    const payload: IConvertPayload = {amount, from, to};

    dispatch(getCurrency(payload));
  }

  const handleChangeValue = (e: any) => {
    setData(e.target.value)
  }

  const handleOnClickField = (e: any) => {
    if (e.key === 'Enter') {
      convertData(data)
    }
  }

  return (
    <Box className={classes.main} mt={7}>
      <TextField
        value={data}
        onKeyPress={handleOnClickField}
        onChange={handleChangeValue}
        id="outlined-basic"
        helperText="Ex: 15 usd in uah"
        label="Please enter currency"
        variant="outlined"
      />
      {/*<Button*/}
      {/*  onClick={handleOnClickField}*/}
      {/*  id="outlined">Enter</Button>*/}
      <TextField id="outlined-basic" variant="outlined"/>

    </Box>
  );
};

export default CurrencyConverter;
