import React from "react";
import './app.scss';
// import Home from './pages/Home';
import Authorization from '../pages/Authorization/Authorization';
import {  useSelector } from "react-redux";

function App() {
  const { isLogout } = useSelector((state) => state.isAuthorizationSlice);
  console.log("App ~ isLogout:", isLogout)

  return (
    <div className="App">
        <Authorization/>    
        {/* <Home/> */}
    </div>
  );
}

export default App;
