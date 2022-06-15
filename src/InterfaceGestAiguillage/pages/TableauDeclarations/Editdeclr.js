import React from 'react'
import "../ConsulterRapports/rapport.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck, faSquareXmark } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import axios from "axios";
import imagetoshow from '../../../img/alerting.jpg'
import {Buffer} from 'buffer';
export const Edit = () => {

 const arrayBufferToBase64 = buffer => {
    let binary = '';
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };


  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id')
 
  const [base64String, setbase64String] = useState(null)
  const [image, setimage] = useState(null)
  const [declaration, setdeclaration] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [Showconfrej, setShowconfrej] = useState(false);
  const [Showconfval, setShowconfval] = useState();
  const [values, setvalues] = useState({ service: '', remarque: '' });
  useEffect(() => {

    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:2000/declaration/userDeclarations/" + id);
        if (!response.ok) throw Error("les données n'ont pas été reçus");
        const listItems = await response.json();
        setdeclaration(listItems);
        setimage(declaration.imageFile );
        image && setbase64String(arrayBufferToBase64(image.data));
        setFetchError(null);

      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    setTimeout(() => fetchItems(), 1000);


  }, [id, declaration])
 
  
  const handlechange = e => {
    const { name, value } = e.target
    setvalues({
      ...values,
      [name]: value
    })
  }
  useEffect(() => {
    setInterval(() => { setsuccess(false); }, 7000)
  }, [])
  const [success, setsuccess] = useState(false)
  const [msg, setmsg] = useState('')

  const ChangeStatedeclarationrej = async () => {

    setShowconfrej(Showconfrej => false)
    setsuccess(true);
   
    console.log(id);
    if(declaration.etat==="pas encore orienté"){
      await axios.patch('http://localhost:2000/declaration/userDeclarations/changeState',
      { id: declaration.id_dec, newState: "rejeter", newService: values.service ,remarque:values.remarque});
       setmsg('La déclaration a été rejetée')
    }else{
      setmsg('La déclaration ne peut pas etre rejetée , elle est déjas validée et prise en compte')
    }
    
  }

  const ChangeStatedeclarationval = async () => {

    setShowconfval(Showconfval => false)
    setsuccess(true);
 
    if(declaration.etat==="pas encore orienté"){
    await axios.patch('http://localhost:2000/declaration/userDeclarations/changeState',
      { id: declaration.id_dec, newState: "valider", newService: values.service }); 
      setmsg('La déclaration a été validée et envoyée au chef de service')
    }else{
      setmsg('La déclaration ne peut pas etre rejetée , elle est déjas validée et prise en compte')
    }

    //Send to user la declation est prise en compte
  }
//console.log('"' + image.data + '" converted to Base64 is "' + image.data.toString('base64')+ '"')

let imgs = [
  '../../../img/alerting.jpg',
  'data:image/png;base64,'+base64String,
];
  return (
    <>
      {isLoading ? (<p className='loading'>Chargement...</p>) :
        fetchError ? (<p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>) :
          <div className='rapport-container'>
            <h1 className='Grand-titre'>{declaration.titre.slice(0, 1).toUpperCase() + declaration.titre.slice(1,)}</h1>
            <div className='sous-titre'>
              <h1 className='sous-titre-elem'>Lieu:
                <p className='head-related-info'>{declaration.localisation}</p>
              </h1>
              
            <div className='inline-items-declaration'>
              <button className='submit rejeter' type='submit'
                onClick={() => { setShowconfrej(true); setShowconfval(false) }} >
                Rejeter <FontAwesomeIcon icon={faSquareXmark} className="icon-next" /></button>
              <button className='submit valider' type='submit'
                onClick={() => { setShowconfval(true); setShowconfrej(false) }}>
                Valider <FontAwesomeIcon icon={faSquareCheck} className="icon-next" /></button>

            </div>

            </div>


            <div className='element-line'>
              <div className='elem-rapport'>
                <h1 className='titre-elem'>Emetteur</h1>
                <div className='related-info'>{declaration.emetteur}</div>
              </div>
              <div className='elem-rapport'>
                <h1 className='titre-elem'> Date</h1>
                <div className='related-info'>{declaration.date}</div>
              </div>
            </div>
            <div className='element-line'>
              <div className='elem-rapport'>
                <h1 className='titre-elem'> Type</h1>
                <div className='related-info'>{declaration.type}</div>
              </div>
              <div className='elem-rapport'>
                <h1 className='titre-elem'> Etat</h1>
                <div className='related-info'>{declaration.etat}</div>
              </div>
            </div>
            <div className='element-line'>
              <div className='elem-rapport'>
                <h1 className='titre-elem'>Description</h1>
                <div className='related-info'>{declaration.declaration ? (declaration.declaration) : ("Cette déclaration ne contient pas de description")}</div>
              </div>
            </div>
            <div className='element-line'>
              <div className='elem-rapport'>
                <h1 className='titre-elem'>Image</h1>
                <div className='related-info'>{declaration.imageFile ? (<img src={imgs[1]} alt="image attachée"/>) : ("Cette déclaration ne contient pas d'image")}</div>
              </div>
            </div>

            <div className='element-line'>
            <div className='related-info'><img src={imgs[0]} alt='image'/></div> 
            </div>
            {Showconfrej && <div className="confirmation-déclaration-valider">
              <h4 className="texte-xonfirmation">
                Voulez vous vraiment rejeter ce compte ?
              </h4>
              <input
                id='remarque'
                type="text"
                name='remarque'
                className='form-input-declaration-rej'
                placeholder='Saisir pourquoi vous avez rejeté cette déclaration'
                value={values.remarque}
                onChange={handlechange} />
              <div className="btn-in-line">
                <button className='btn-conf annuler' type='submit' onClick={() => setShowconfrej(Showconfrej => false)}>
                  <p> Annuler</p>
                </button>
                <button className='btn-conf confirmer' type='submit'
                  onClick={ChangeStatedeclarationrej}>
                  <p> confirmer</p>
                </button>
              </div>
            </div>
            }
            {Showconfval && <div className="confirmation-déclaration-valider">

              <div className='form-inputs-declaration'>
                <label className='form-label-declaration'>
                  <h4 className="texte-xonfirmation">La déclaration va etre réorientée vers le service :</h4>

                </label>
                <select
                  id='Service'
                  type="text"
                  name='service'
                  className='form-input-declaration'
                  placeholder={values.service}
                  value={values.service}
                  onChange={handlechange}>
                  <option value="choisir" selected>Choisir ...</option>
                  <option value="Technique">Technique</option>
                  <option value="sécurité">Sécurité</option>
                  <option value="médecin">médecin</option>
                  <option value="maintenance">maintenance</option>
                </select>

              </div>
              <div className="btn-in-line">
                <button className='btn-conf annuler' type='submit' onClick={() => setShowconfval(Showconfval => false)}>
                  <p> Annuler</p>
                </button>
                <button className='btn-conf confirmer' type='submit'
                  onClick={ChangeStatedeclarationval}>
                  <p> Envoyer</p>
                </button>
              </div>
            </div>
            }
            {success && <div className="alerte-msg">{msg}</div>}
          </div>}

    </>


  )
}
