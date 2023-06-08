import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import {useSelector } from "react-redux";
import Authorization from '../pages/Authorization/Authorization';
import Home from '../pages/Home/Home';
import './app.scss';

function App() {
  const navigate = useNavigate();
  const { isLogout, idInstance, tokenInstance } = useSelector((state) => state.isAuthorizationSlice);

  useEffect(() => {
    if (isLogout) {
      navigate("/home");
      const loginDetails = {
        isLogout,
        idInstance,
        tokenInstance
      }
      const json = JSON.stringify(loginDetails);
      localStorage.setItem("loginDetails", json);
    } else {
      navigate("/login");
    }
  }, [navigate, isLogout, idInstance, tokenInstance]);

  return (
    <div className="App">
       <Routes>
          <Route path="/login" element={<Authorization/>}></Route>
          <Route path="/home" element={<Home/>}></Route>     
       </Routes>
    </div>
  );
}

export default App;
