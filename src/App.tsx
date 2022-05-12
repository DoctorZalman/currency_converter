import { Container, CssBaseline, Switch, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import Main from './pages/Main';
import store from './redux';
import { useStyles } from './styles/styles';
import { darkTheme, lightTheme } from './theme';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const classes = useStyles();

  return (
    <ThemeProvider theme={darkMode ? lightTheme : darkTheme}>
      <Provider store={store}>
        <Container>
          <CssBaseline />
          <Switch className={classes.switch} checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/currency_converter" element={<Main />} />
            </Route>
          </Routes>
        </Container>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
