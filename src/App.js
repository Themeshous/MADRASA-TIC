import React from 'react';
import { Routes, Route } from "react-router-dom"
import FormCreat from './Comptes/SignUp/FormCreat.js'
import {FormConnect} from './Comptes/LogIn/FormConnect.js';
import CreateComp from './InterfaceAdmin/Pages/CreateComp.js'
import './App.css';

function App() {
  return (
    <>
     <Routes>
        <Route path="/Admin/create" element={ <CreateComp/> } />
        <Route path="/auth/Connect" element={ <FormConnect/> } />
        <Route path="/auth/signup" element={ <FormCreat/> } />
      </Routes>
    </>

  );
}

export default App;
