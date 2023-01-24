import './App.css';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StartPage } from './components/startPage';

function App() {
  return (
    <Router>
      <Box>
        <Routes>
          <Route path="/" element={<StartPage />} />
          
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
