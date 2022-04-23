import React from 'react';
import { Routes, Route } from "react-router-dom"
import FormCreat from './Comptes/SignUp/FormCreat.js'
import {FormConnect} from './Comptes/LogIn/FormConnect.js';
import CreateComp from './InterfaceAdmin/Pages/CreateComp.js'
import {Forget} from './Comptes/ForgotPassword/Forget';
import {Reset} from './Comptes/ForgotPassword/Reset';
import './App.css';

function App() {
  return (
    <>
     <Routes>
        <Route path="/Admin/create" element={ <CreateComp/> } />
        <Route path="/auth/Connect" element={ <FormConnect/> } />
        <Route path="/auth/signup" element={ <FormCreat/> } />
        <Route path="/Forget-password" element={ <Forget/> } />
        <Route path="/Reset-password" element={ <Reset/> } />
      </Routes>
    </>

  );
}

export default App;
