import './App.css';
import { useState } from 'react';
import Header from './Components/Header/Header';
import LoginLogout from './Components/Header/LoginLogout';

function App() {
  const [showNav, setShowNav] = useState(false);
   
   const toggleSidebar = () => {
       setShowNav(!showNav)
   }
  return (
    <div className="App">
     <Header button={toggleSidebar}/>
     <LoginLogout show={showNav}/>
    </div>
  );
}

export default App;
