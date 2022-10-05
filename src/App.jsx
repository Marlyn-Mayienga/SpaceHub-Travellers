import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Rocket from './components/Rocket/Rocket';
import Mission from './components/MissionList/MissionList';
import Profile from './components/Profile/Profile';
import './App.scss';

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
