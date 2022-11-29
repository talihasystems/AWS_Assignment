import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Confirm from './components/Confirm';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;