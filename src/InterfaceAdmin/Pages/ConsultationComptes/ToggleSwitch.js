import React, { useState } from "react";
import axios from 'axios';
import "./Tableau.css";

const ToggleSwitch =({ label,SearchKey}) => {
  const [isToggled, setIsToggled] = useState((label == 'true') ? true : false)
  const [showMenuConf, setshowMenuConf] = useState(false)
  const onToggle = () => setshowMenuConf(!showMenuConf);
  const ChangeState = () => {
     setshowMenuConf(showMenuConf => false)
     setIsToggled(!isToggled);
     const requestData = {email: SearchKey, isActive: !isToggled};
     console.log(requestData);
      axios.patch("http://localhost:2000/admin/changeUserStat", requestData);
  }
  return (
    <>
      <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="switch" />
      </label>

      {
        showMenuConf && <div className="confirmation">
          <h4 className="texte-xonfirmation">
            {isToggled ? "Voulez vous vraiment désactiver ce compte ?"
              : "Voulez vous vraiment activer ce compte ?"}
          </h4>
          <div className="btn-in-line">
          <button className='btn-conf annuler' type='submit' onClick={() => setshowMenuConf(showMenuConf => false)}>
            <p> Annuler</p> 
          </button>
          <button className='btn-conf confirmer' type='submit' onClick={ChangeState}>
            <p> confirmer</p> 
          </button>
          </div>
        </div>
      }
    </>);
  
}
export default ToggleSwitch;