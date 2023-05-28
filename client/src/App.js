
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import OTPForm from './components/OTPForm';
import VerifyForm from './components/VerifyForm';
import Home from './components/Home';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<OTPForm/>} />
     <Route path='/verify' element={<VerifyForm />} />
     <Route path='/home' element={<Home />} />
     </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
