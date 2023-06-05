import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Settings from './pages/Settings.Jsx';
import DataPage from './pages/DataPage';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="flex">
      <SideBar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<DataPage />} />
          <Route path="/" element={<Settings />} />
        </Routes>
      </SideBar>
    </div>
  );
}

export default App;
