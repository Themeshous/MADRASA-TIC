import React from 'react'
import Service from './Service';
import Categorie from './Categorie';
import "./ServCat.css"
const PramSrvCat = () => {

  return (
    <div className='contenu-service-categorie'>
     
        <div className='service-categorie-middle-content'>
          <div className='service-categorie-header'>
            <h2 className='service-categorie-titre'>
              Services
            </h2>
             <Service />
          </div>
          
        </div>
      <div className='service-categorie-middle-content'>
          <div className='service-categorie-header'>
            <h2 className='service-categorie-titre'>
              Catégories
            </h2>
          <Categorie />
      </div>
      </div> 
      </div>
  )
}

export default PramSrvCat
