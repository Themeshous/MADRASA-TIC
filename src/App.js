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
import ParamCompREsAIg from './InterfaceGestAiguillage/pages/ParamCompResAig'
import DetailRapport from "./InterfaceGestAiguillage/pages/DetailRapport"
import DetDeclr from "./InterfaceGestAiguillage/pages/DetDeclr"
import CreateRap from "./InterfaceChefService/Pages/CreateRapport/CreateRap"
import ParamChefSer from "./InterfaceChefService/Pages/ParamChefSer"
import RapServ from "./InterfaceChefService/Pages/RapServ"
import ModRapServ from "./InterfaceChefService/Pages/ModRapServ"
import TableDecServ from "./InterfaceChefService/Pages/TableDecServ"
import ModiDecServc from "./InterfaceChefService/Pages/ModiDecServc"
import StatisAdmin from './InterfaceAdmin/Pages/StatisAdmin.js';
import StatisRespAi from './InterfaceGestAiguillage/pages/StatisRespAi'

import AidePage from "./Aide/AidePage"
import AideAdmin from './InterfaceAdmin/Pages/AideAdmin.js';
import AideChefServ from './InterfaceChefService/Pages/AideChefServ'
import AidRespAig from './InterfaceGestAiguillage/pages/AideRespAig'
import SavoirPage from './EnSavoirPlus/EnSavoirPlus';

import { AideRRE } from './InterfaceRRE/pages/AideRRE.js';
import { CreateAnnonce } from './InterfaceRRE/pages/CreateAnnonce.js';
import ProfileRRE from './InterfaceRRE/pages/ProfileRRE.js';

import ProposPage from './ProposNous/Propos-de-nous.js';

import { VoirArch } from './InterfaceChefService/Pages/VoirArch'
import TableArchAnn from "./InterfaceRRE/pages/TableArchAnn"
import TableAnn from "./InterfaceRRE/pages/TableAnn"
import ModAnnPg from "./InterfaceRRE/pages/ModAnnPg"
import DetAnnPg from "./InterfaceRRE/pages/DetAnnPg"
import ParamServCat from './InterfaceAdmin/Pages/ParamServCat.js';
import ChefservStat from './InterfaceChefService/Pages/ChefservStat.js';
import StatRre from './InterfaceRRE/pages/StatRre.js';

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
          <Route path='/aide' element={<AidePage />} />
          <Route path='/En-savoir-plus' element={<SavoirPage />} />
          <Route path='/Propos-de-nous' element={<ProposPage />} />
          {/*private*/}


          <Route element={<RequireAuth allowedRoles={["administrateur-secondaire", "administrateur"]} />}>
            <Route path="/administrateur-secondaire" element={<CreateComp />} />
            <Route path="/administrateur" element={<CreateComp />} />
            <Route path="/Admin/ConsulterComptes" element={<ConsulterComptes />} />
            <Route path="/administrateur/Profile" element={<ParamComp />} />
            <Route path="/administrateur-secondaire/Profile" element={<ParamComp />} />
            <Route path='/Admin/statistiques' element={<StatisAdmin />} />
            <Route path='/Admin/aide' element={<AideAdmin />} />
            <Route path='/Admin/parametres' element ={<ParamServCat/>}/>
          </Route>

          <Route element={<RequireAuth allowedRoles={["responsable d'aiguillage"]} />}>
            <Route path="/responsabled'aiguillage" element={<ConsulterDeclr />} />
            <Route path="/responsabled'aiguillage/declaration-info" element={<DetDeclr />} />
            <Route path="/responsabled'aiguillage/Profile" element={<ParamCompREsAIg />} />
            <Route path='/ResAig/rapports/rapinfo/' element={<DetailRapport />} />
            <Route path='ResAig/statistiques' element={<StatisRespAi />} />
            <Route path='/ResAig/aide' element={<AidRespAig />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={["chef de service"]} />}>
            <Route path="/chefdeservice" element={<TableDecServ />} />
            <Route path="/chefdeservice/Create" element={<CreateRap />} />
            <Route path='/chefdeservice/modifier' element={<ModiDecServc />} />
            <Route path="/chefdeservice/Profile" element={<ParamChefSer />} />
            <Route path='/chefserv/consulter/rapinfo' element={<RapServ />} />
            <Route path='/chefserv/consulter/modifier/rapinfo' element={<ModRapServ />} />
            <Route path='/chefserv/Aide' element={<AideChefServ />} />
            <Route path='/chefserv/Archive' element={<VoirArch />} />
            <Route path='ChefSer/statistiques' element={<ChefservStat/>}/>
          </Route>


          <Route element={<RequireAuth allowedRoles={["responsable des RE"]} />}>
            <Route path='/responsabledesRE' element={<CreateAnnonce />} />
            <Route path='/RRE/aide' element={<AideRRE />} />
            <Route path='/responsabledesRE/Profile' element={<ProfileRRE/>} />
            <Route path='/RRE/archive' element={<TableArchAnn/>} />
            <Route path='/RRE/Consulter' element={<TableAnn/>}/>
            <Route path='/RRE/Consulter/modifier' element={<ModAnnPg/>}/>
            <Route path='/RRE/Consulter/details' element={<DetAnnPg/>}/>
            <Route path='/RRE/statistiques' element={<StatRre/>}/>
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
