import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import ActivateAccount from './components/ActivateAccount';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/activate-account' element={<ActivateAccount />} />
    </Routes>
    </BrowserRouter>
 
  );
}

export default App;
