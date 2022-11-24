
import './App.css';
import Header from './Components/header/Header';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header/>
      </Router>
      
    </>
  );
}

export default App;
