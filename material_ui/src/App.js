import './App.css';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Dashboard from './pages/Dashboard/Index'
import MyTransaction from './pages/MyTransaction'
import SendFund from './pages/SendFunds'
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom'

const theme = createTheme( {
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
      transparent: '#00ffffff',
      blue: '#1F3684',
      gold: '#F9F3ED'
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  breakpoints: {
    values: {
      sm: 414,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
  }
} );

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/sendFund' element={<SendFund />} />
          <Route path='/myTransaction' element={<MyTransaction />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
