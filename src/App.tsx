import './App.css';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StartPage } from './components/startPage';
import { AboutMe } from './components/aboutMe';
import { MySkill } from './components/skill';
import { Connect } from './components/connect';

function App() {
  return (
    <Router>
      <Box>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/skill" element={<MySkill />} />
          <Route path="/contact" element={<Connect />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
