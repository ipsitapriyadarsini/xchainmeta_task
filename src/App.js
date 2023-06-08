import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Settings from './pages/Settings.jsx';
import DataPage from './pages/DataPage';
import SideBar from './components/SideBar';
import { useTheme } from './context';

function App() {
  const theme = useTheme()

  return (
    <div className="flex">
      <SideBar />
      <div className={`p-5  w-full ${!theme.dark ? "bg-gray-300" : "bg-zinc-800"}`}>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/data" element={<DataPage />} />
          <Route path="/setting" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
