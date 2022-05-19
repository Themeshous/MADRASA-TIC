import React from 'react';
import { Routes, Route } from "react-router-dom"
import FormCreat from './Comptes/SignUp/FormCreat.js'
import { FormConnect } from './Comptes/LogIn/FormConnect.js';
import CreateComp from './InterfaceAdmin/Pages/CreateComp.js'
import { Forget } from './Comptes/ForgotPassword/Forget';
import { Reset } from './Comptes/ForgotPassword/Reset';
import ConsulterComptes from './InterfaceAdmin/Pages/ConsultationComptes/ConsulterComptes'
import ConsulterDeclr from "./InterfaceGestAiguillage/pages/ConsulterDeclr"
import ParamComp from './InterfaceAdmin/Pages/ParamCompte.js';
import RequireAuth from './Comptes/LogIn/RequireAuth'
import './App.css';
import Content from './Landing/Content';
import Unauthorized from './Comptes/LogIn/Unauthorized'
import Layout from './Comptes/LogIn/Layout'
import ConsulterRapports from './InterfaceGestAiguillage/pages/ConRap'
import ParamCompREsAIg from './InterfaceGestAiguillage/pages/ParamCompResAig'
import DetailRapport from "./InterfaceGestAiguillage/pages/DetailRapport"
import DetDeclr from "./InterfaceGestAiguillage/pages/DetDeclr"
function App() {
  return (
    <>
      <Routes>


        <Route path="/" element={<Layout />}>
          {/* public*/}
          <Route path="/" element={<Content />} />
          <Route path="/auth/Connect" element={<FormConnect />} />
          <Route path="/auth/Forget" element={<Forget />} />
          <Route path="/auth/Reset" element={<Reset />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/*private*/}


          <Route element={<RequireAuth allowedRoles={["administrateur-secondaire", "administrateur"]} />}>
            <Route path="/administrateur-secondaire" element={<CreateComp />} />
            <Route path="/administrateur" element={<CreateComp />} />
            <Route path="/Admin/ConsulterComptes" element={<ConsulterComptes />} />
            <Route path="/administrateur/Profile" element={<ParamComp />} />
            <Route path="/administrateur-secondaire/Profile" element={<ParamComp />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={["responsable d'aiguillage"]} />}>
            <Route path="/responsabled'aiguillage" element={<ConsulterDeclr />} />
            <Route path="/responsabled'aiguillage/declaration-info" element={<DetDeclr/>} />
            <Route path="/ResAig/rapports" element={<ConsulterRapports />} />
            <Route path="/responsabled'aiguillage/Profile" element={<ParamCompREsAIg />} />
            <Route path='/ResAig/rapports/rapinfo/' element={<DetailRapport/>}/>
          </Route>
          <Route path="/auth/signup" element={<FormCreat />} />




          {/* doesn't exist*/}
          <Route path="/*" element={< div className='page-not-found'>La page est introuvable !</div>} />

        </Route>
      </Routes>
    </>

  );
}

export default App;
