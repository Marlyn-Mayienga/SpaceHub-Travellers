import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Rocket from './components/Rocket';
import Mission from './components/Mission';
import Profile from './components/profile';
import './App.css';

const App = () => (
  <>
    <Header>
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="/Mission" element={<Mission />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Header>
  </>
);

export default App;
