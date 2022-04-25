import React, { useState } from "react";
import "./Tableau.css";
  
const ToggleSwitch = ({ label }) => {
  const [isToggled, setIsToggled] = useState((label == 'true' )?true:false)
    const onToggle = () => setIsToggled(!isToggled);
    return (
    <>
      <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="switch"/> 
      </label>  </>
    );
  }
export default ToggleSwitch;