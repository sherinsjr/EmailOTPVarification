
import { BrowserRouter, Route, Router } from 'react-router-dom';
import './App.css';
import OTPForm from './components/OTPForm';
import VerifyForm from './components/VerifyForm';
import Home from './components/Home';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Router>
      <Route path='/' element={<OTPForm/>} />
     <Route path='/verify' element={<VerifyForm />} />
     <Route path='/home' element={<Home />} />
      </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
