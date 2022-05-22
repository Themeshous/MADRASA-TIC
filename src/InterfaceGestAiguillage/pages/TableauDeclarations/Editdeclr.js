import React from 'react'
import "../ConsulterRapports/rapport.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck, faSquareXmark } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
export const Edit = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id')

  const [declaration, setdeclaration] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [Showconfrej, setShowconfrej] = useState(false);
  const [Showconfval, setShowconfval] = useState();
  const [values, setvalues] = useState({ service: '' });
  useEffect(() => {

    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:2000/declaration/userDeclarations/" + id);
        if (!response.ok) throw Error("les données n'ont pas été reçus");
        const listItems = await response.json();
        setvalues({ service: listItems.type })
        setdeclaration(listItems);

        setFetchError(null);

      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    setTimeout(() => fetchItems(), 2000);

  }, [id])

  
  const handlechange = e => {
    const { name, value } = e.target
    setvalues({
      ...values,
      [name]: value
    })
  }
  useEffect(() => {
    setInterval(()=>{setsuccess(false);},7000)
  }, [])
  const [success, setsuccess] = useState(false)
  const [msg, setmsg] = useState('')
  const ChangeStatedeclarationrej = () => {

    setShowconfrej(Showconfrej => false)
    setsuccess(true);
    setmsg('La déclaration a été rejetée')
    //change etat to rejeter
    //send to user that rejected
  }

  const ChangeStatedeclarationval = () => {

    setShowconfval(Showconfval => false)
    setsuccess(true);
    setmsg('La déclaration a été validée et envoyée au chef de service')
    //change etat to validé en cours de traitement
    //Send declaration to service 
    //Send to user la declation est prise en compte
  }

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

            </div>
            <div className='elem-rapport'>
              <h1 className='titre-elem'>Emetteur</h1>
              <div className='related-info'>{declaration.emetteur}</div>
            </div>
            <div className='elem-rapport'>
              <h1 className='titre-elem'> Date</h1>
              <div className='related-info'>{declaration.date}</div>
            </div>
            <div className='elem-rapport'>
              <h1 className='titre-elem'> Type</h1>
              <div className='related-info'>{declaration.type}</div>
            </div>
            <div className='elem-rapport'>
              <h1 className='titre-elem'> Etat</h1>
              <div className='related-info'>{declaration.etat}</div>
            </div>
            <div className='elem-rapport'>
              <h1 className='titre-elem'>Description</h1>
              <div className='related-info'>{declaration.declaration ? (declaration.declaration) : ("Cette déclaration ne contient pas de description")}</div>
            </div>
            <div className='elem-rapport'>
              <h1 className='titre-elem'>Image</h1>
              <div className='related-info'>{declaration.image ? (declaration.image) : ("Cette déclaration ne contient pas d'image")}</div>
            </div>



            <div className='inline-items-declaration'>
              <button className='submit rejeter' type='submit'
                onClick={() => { setShowconfrej(true); setShowconfval(false) }} >
                Rejeter <FontAwesomeIcon icon={faSquareXmark} className="icon-next" /></button>
              <button className='submit valider' type='submit'
                onClick={() => { setShowconfval(true); setShowconfrej(false) }}>
                Valider <FontAwesomeIcon icon={faSquareCheck} className="icon-next" /></button>

            </div>

            {Showconfrej && <div className="confirmation-déclaration">
              <h4 className="texte-xonfirmation">
                Voulez vous vraiment rejeter ce compte ?
              </h4>
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
