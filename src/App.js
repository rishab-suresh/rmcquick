
import './App.css';

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Offers from './Pages/Offers';

import { Help } from './Pages/Help';
import { UserSettings } from './Pages/User';




function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Help' element={<Help/>}/>
          
          
        </Routes>
        
      </Router>
      
    </>
  );
}

export default App;
