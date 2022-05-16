import React, { useState } from "react";
import "./Tableau.css";

const ToggleSwitch = ({ label,SearchKey}) => {
  const [isToggled, setIsToggled] = useState((label == 'true') ? true : false)
  const [showMenuConf, setshowMenuConf] = useState(false)
  const onToggle = () => setshowMenuConf(!showMenuConf);
  const ChangeState = () => {
     setshowMenuConf(showMenuConf => false)
     setIsToggled(!isToggled);
     console.log(SearchKey);
     //BDD FUNCTION TO SAVE CHANGES In the acount of the email = Searchkey
     //IF ISTOGGLED MEANS ACTIVé save as 1
     // ELSE MEANS DéSACTIVé save as 0
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