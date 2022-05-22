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
import CreateRap from "./InterfaceChefService/Pages/CreateRapport/CreateRap"
import ParamChefSer from "./InterfaceChefService/Pages/ParamChefSer"
import RapServ from "./InterfaceChefService/Pages/RapServ"
import ConsRapServ from "./InterfaceChefService/Pages/ConsRapServ"
import ModRapServ from "./InterfaceChefService/Pages/ModRapServ"
import  TableDecServ from "./InterfaceChefService/Pages/TableDecServ"
import  ModiDecServc from "./InterfaceChefService/Pages/ModiDecServc"
import StatisAdmin from './InterfaceAdmin/Pages/StatisAdmin.js';

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
            <Route path='/Admin/statistiques' element={<StatisAdmin/>}/>
          </Route>

          <Route element={<RequireAuth allowedRoles={["responsable d'aiguillage"]} />}>
            <Route path="/responsabled'aiguillage" element={<ConsulterDeclr />} />
            <Route path="/responsabled'aiguillage/declaration-info" element={<DetDeclr/>} />
            <Route path="/ResAig/rapports" element={<ConsulterRapports />} />
            <Route path="/responsabled'aiguillage/Profile" element={<ParamCompREsAIg />} />
            <Route path='/ResAig/rapports/rapinfo/' element={<DetailRapport/>}/>
          </Route>

          <Route element={<RequireAuth allowedRoles={["chef de service"]} />}>
            <Route path="/chefdeservice" element={<TableDecServ />} />
            <Route path="/chefdeservice/Create" element={<CreateRap />} />
            <Route path='/chefdeservice/modifier' element={<ModiDecServc/>}/>
            <Route path="/chefdeservice/Profile" element={<ParamChefSer/>} />
            <Route path='/chefserv/consulter' element ={<ConsRapServ/>}/>
            <Route path='/chefserv/consulter/rapinfo' element ={<RapServ/>}/>
            <Route path='/chefserv/consulter/modifier/rapinfo' element ={<ModRapServ/>}/>
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
