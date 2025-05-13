import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Admin from './scenes/Admin/index.jsx';
import Breakdown from './scenes/Breakdown/index.jsx';
import Customer from './scenes/Customer/index.jsx';
import Daily from './scenes/Daily/index.jsx';
import Dashboard from './scenes/Dashboard/index.jsx';
import Geography from './scenes/Geography/index.jsx';
import Layout from './scenes/Layout/index.jsx';
import Monthly from './scenes/Monthly/index.jsx';
import Overview from './scenes/Overview/index.jsx';
import Performance from './scenes/Performance/index.jsx';
import Products from './scenes/Products/index.jsx';
import Transactions from './scenes/Transactions/index.jsx';
import { themeSettings } from './theme.js';
function App() {

  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Navigate to={'/dashboard'} replace />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/products' element={<Products />} />
            <Route path='/customer' element={<Customer />} />
            <Route path='/transactions' element={<Transactions />} />
            <Route path='/geography' element={<Geography />} />
            <Route path='/overview' element={<Overview />} />
            <Route path='/daily' element={<Daily />} />
            <Route path='/monthly' element={<Monthly />} />
            <Route path='/breakdown' element={<Breakdown />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/performance' element={<Performance />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
