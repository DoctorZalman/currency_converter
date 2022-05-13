import { Container, CssBaseline, Switch, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Index from './pages/Layout';
import store from './redux';
import { useStyles } from './styles/styles';
import { darkTheme, lightTheme } from './theme';
import CurrencyConverter from "./pages/CurrencyConverter";
import ExchangeRate from "./pages/ExchangeRate";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const classes = useStyles();

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Provider store={store}>
        <Container className={classes.general_styles}>
          <CssBaseline />
          <Switch className={classes.switch} checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          <Routes>
            <Route path="/" element={<Index />}>
              <Route path="/currency_converter" element={<CurrencyConverter />} />
              <Route path="/exchange_rate" element={<ExchangeRate />} />
            </Route>
          </Routes>
        </Container>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
