import { Container, CssBaseline, Switch, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import store from './redux';
import { useStyles } from './styles/styles';
import { darkTheme, lightTheme } from './theme';
import CurrencyConverter from "./pages/CurrencyConverter";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const classes = useStyles();

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Provider store={store}>
        <Container>
          <CssBaseline />
          <Switch className={classes.switch} checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/currency_converter" element={<CurrencyConverter />} />
            </Route>
          </Routes>
        </Container>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
