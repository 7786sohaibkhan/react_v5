import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Assigntask from './pages/Assigntask';
import Createtask from './pages/Createtask';
import login from './log/login';
import signup from './log/signup';


// import { FaRegistered } from 'react-icons/fa';



function App() {
  return (
    <>
    
      <Router>
      
        
        <Switch>
        <Route path='/' exact component={login} />
        <Route path='/signup'  component={signup} />
        
        
        
        <Navbar />
        
        
          <Route path='/home' exact component={Home} />
          <Route path='/Assigntask' component={Assigntask} />
          <Route path='/Createtask' component={Createtask} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
