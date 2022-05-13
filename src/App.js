import React from 'react';
import { Routes, Route } from "react-router-dom"
import FormCreat from './Comptes/SignUp/FormCreat.js'
import {FormConnect} from './Comptes/LogIn/FormConnect.js';
import CreateComp from './InterfaceAdmin/Pages/CreateComp.js'
import { Forget } from './Comptes/ForgotPassword/Forget';
import { Reset } from './Comptes/ForgotPassword/Reset';
import ConsulterComptes from './InterfaceAdmin/Pages/ConsultationComptes/ConsulterComptes'
import ConsulterDeclr from "./InterfaceGestAiguillage/pages/ConsulterDeclaration/ConsulterDeclr"
import ParamComp from './InterfaceAdmin/Pages/ParamCompte.js';
import { Edit } from './InterfaceGestAiguillage/pages/TableauDeclarations/Editdeclr.js';
import RequireAuth from './Comptes/LogIn/RequireAuth'
import './App.css';
import Content from './Landing/Content';
import Unauthorized from './Comptes/LogIn/Unauthorized'
import Layout from './Comptes/LogIn/Layout'


function App() {
  return (
    <>
      <Routes>
      
          
      <Route path="/" element={<Layout />}>    
          {/* public*/}
          <Route path="/" element={<Content />} />
          <Route path="/auth/Connect" element={<FormConnect/>} />
          <Route path="/auth/Forget" element={<Forget />} />
          <Route path="/auth/Reset" element={<Reset />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          
          {/*private*/}
            
          
          <Route element={<RequireAuth allowedRoles={["administrateur-secondaire", "administrateur"]} />}>
            <Route path="/administrateur-secondaire" element={<CreateComp />} />
            <Route path="/administrateur" element={<CreateComp />} />
            <Route path="/Admin/ConsulterComptes" element={<ConsulterComptes />} />
            <Route path="/Admin/Profile" element={<ParamComp />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={["responsable d'aiguillage"]} />}>
            <Route path="/responsabled'aiguillage" element={<ConsulterDeclr />} />
            <Route path="/ResAig/consulter/declaration-info" element={<Edit />} />
            <Route path="/Admin/Profile" element={<ParamComp />} />
          </Route>

         <Route path="/auth/signup" element={<FormCreat />} />




          {/* doesn't exist*/}
          <Route path="/*" element={<>La page est introuvable</>} />

        </Route>
      </Routes>
    </>

  );
}

export default App;
