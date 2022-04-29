import React from 'react';
import { Routes, Route } from "react-router-dom"
import FormCreat from './Comptes/SignUp/FormCreat.js'
import {FormConnect} from './Comptes/LogIn/FormConnect.js';
import CreateComp from './InterfaceAdmin/Pages/CreateComp.js'
import {Forget} from './Comptes/ForgotPassword/Forget';
import {Reset} from './Comptes/ForgotPassword/Reset';
import ConsulterComptes from './InterfaceAdmin/Pages/ConsultationComptes/ConsulterComptes'
import ConsulterDeclr from "./InterfaceGestAiguillage/pages/ConsulterDeclaration/ConsulterDeclr"
import './App.css';

function App() {
  return (
    <>
     <Routes>
        <Route path="/Admin/create" element={ <CreateComp/> } />
        <Route path="/Admin/ConsulterComptes" element={ <ConsulterComptes/> } />
        <Route path="/ResAig/consulter" element={ <ConsulterDeclr/> } />
        <Route path="/auth/Connect" element={ <FormConnect/> } />
        <Route path="/auth/signup" element={ <FormCreat/> } />
        <Route path="/auth/Forget" element={ <Forget/> } />
        <Route path="/auth/Reset" element={ <Reset/> } />
      </Routes>
    </>

  );
}

export default App;
