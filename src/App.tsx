import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Page/Home';
import NavBar from './Component/Layout/NavBar/NavBar';
import CreateStudent from './Page/CreateStudent';
import List from './Page/List';
import User from './Page/User';

function App() {
  return (
    <>
  <Router>
    <NavBar/>
      <Routes>
      <Route path='/Home' element={<Home/>}> 
        
        </Route>
        <Route path="/CreateStudent" element={<CreateStudent/>}/>
        <Route path='/List' element={<List/>}/>
        <Route path='/CreateUser' element={<User/>}/>
      </Routes>
    
  </Router>
  </>
  );
}

export default App;
