import React from 'react'
import "../ConsulterRapports/rapport.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck, faSquareXmark } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import axios from "axios";

export const Edit = () => {

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id')

  const [image, setimage] = useState(null)
  const [declaration, setdeclaration] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [Showconfrej, setShowconfrej] = useState(false);
  const [Showconfval, setShowconfval] = useState();
  const [Services, setServices] = useState([]);
  const [values, setvalues] = useState({ service: '', remarque: '', priority: '' });
  const [errors, seterrors] = useState({})
  useEffect(() => {

    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:2000/declaration/userDeclarations/" + id);
        if (!response.ok) throw Error("les données n'ont pas été reçus");
        const listItems = await response.json();
        setdeclaration(listItems);
        setimage(declaration.imageFile);
        setFetchError(null);

      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    setTimeout(() => fetchItems(), 1000);


  }, [id, declaration])
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:2000/service");
        if (!response.ok) throw Error("les données n'ont pas été reçus");
        const listItems = await response.json();
        setServices(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    setTimeout(() => fetchItems(), 1000);

  }, [])


  const handlechange = e => {
    const { name, value } = e.target
    setvalues({
      ...values,
      [name]: value
    })
  }
  const validate = (values) => {
    let errors = {}
    if (!values.remarque.trim()) {//si new service appartient à la table
      errors.remarque = "Vous devez spécifier pourquoi vous rejetez cette déclaration"
    }
    return errors;
  }
  const HandleSubmit = e => {
    e.preventDefault();
    seterrors(validate(values));

  }
  useEffect(() => {
    setInterval(() => { setsuccess(false); }, 7000)
  }, [])
  const [success, setsuccess] = useState(false)
  const [msg, setmsg] = useState('')

  const ChangeStatedeclarationrej = async () => {
    setsuccess(true);

    console.log(id);
    if (declaration.etat === "pas encore orienté" && values.remarque) {
      await axios.patch('http://localhost:2000/declaration/userDeclarations/changeState',
        { id: declaration.id_dec, newState: "rejeter", newService: values.service, remarque: values.remarque });
      await axios.patch('http://localhost:2000/declaration/userDeclarations/changepriority',
        { id: declaration.id_dec, priority: values.priority });
      setmsg('La déclaration a été rejetée')
      setShowconfrej(Showconfrej => false)
    } else if (!values.remarque) {
      setsuccess(false);
      setShowconfrej(Showconfrej => true)
    } else {
      setmsg('La déclaration ne peut pas etre rejetée , elle est déjas validée et prise en compte')
      setShowconfrej(Showconfrej => false)
    }

  }

  const ChangeStatedeclarationval = async () => {

    setShowconfval(Showconfval => false)
    setsuccess(true);

    if (declaration.etat === "pas encore orienté") {
      await axios.patch('http://localhost:2000/declaration/userDeclarations/changeState',
        { id: declaration.id_dec, newState: "valider", newService: values.service });
      await axios.patch('http://localhost:2000/declaration/userDeclarations/changepriority',
        { id: declaration.id_dec, priority: values.priority });
      setmsg('La déclaration a été validée et envoyée au chef de service', values.service)
    } else {
      setmsg('on ne peut pas revalider cette déclaration car elle est déjas validée et prise en compte')
    }

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
                <div className='related-info'>{declaration.date.slice(0, 10)}</div>
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
                <div className='related-info'>{declaration.description ? (declaration.description) : ("Cette déclaration ne contient pas de description")}</div>
              </div>
              <div className='elem-rapport'>
                <h1 className='titre-elem'>Priorité</h1>
                <div className='related-info'>
                  <select
                    id='priority'
                    type="text"
                    name='priority'
                    className='form-input-declaration-priority'
                    placeholder={declaration.priority}
                    value={values.priority}
                    onChange={handlechange} >
                    {
                      (declaration.priority === 'Basse') ? (<>
                        <option value="Basse" selected>Basse</option>
                        <option value="Moyenne">Moyenne</option>
                        <option value="Haute">Haute</option></>)
                        : (declaration.priority === 'Haute') ? <>
                          <option value="Haute" selected>Haute</option>
                          <option value="Moyenne">Moyenne</option>
                          <option value="Basse" >Basse</option>

                        </>
                          : (<><option value="Moyenne" selected>Moyenne</option>
                            <option value="Basse" >Basse</option>
                            <option value="Haute">Haute</option>
                          </>)


                    }

                  </select>
                </div>
              </div>
            </div>
            <div className='element-line'>
              <div className='elem-rapport'>
                <h1 className='titre-elem'>Image</h1>
                <div className='related-info'>{declaration.imageFile ? (<img src={ "http://localhost:2000/images/"+declaration.imageFile} alt="image-declaration" className='image-declaration' />) : ("Cette déclaration ne contient pas d'image")}</div>
              </div>
            </div>
            {
              declaration.etat === "rejeter" &&  <div className='element-line'>
              <div className='elem-rapport'>
                <h1 className='titre-elem'>remarque</h1>
                <div className='related-info'>{declaration.remarques_de_responsable}</div>
              </div>
            </div>
            }
            {
              declaration.IDrap ?
                (<div className='element-line'>
                  <div className='elem-rapport'>
                    <h1 className='titre-elem'>Rapport</h1>
                    <a href={`/ResAig/rapports/rapinfo/?id=${declaration.IDrap.toString()}`} className='lien-vers-rapport'>Voir le rapport attaché</a></div>

                </div>) : (<div className='element-line'>
                  <div className='elem-rapport'>
                    <h1 className='titre-elem'>Rapport</h1>
                    <div className='related-info'>Aucun rapport attaché</div>
                  </div>
                </div>)
            }
            {Showconfrej && <div className="confirmation-déclaration-valider">
              <h4 className="texte-xonfirmation">
                Voulez vous vraiment rejeter ce compte ?
              </h4>
              <form onSubmit={HandleSubmit}>
                <input
                  id='remarque'
                  type="text"
                  name='remarque'
                  className='form-input-declaration-rej'
                  placeholder='Saisir pourquoi vous avez rejeté cette déclaration'
                  value={values.remarque}
                  onChange={handlechange} />
                {errors.remarque && <p className='remarque-error'>{errors.remarque}</p>}
                <div className="btn-in-line">
                  <button className='btn-conf annuler' type='submit' onClick={() => setShowconfrej(Showconfrej => false)}>
                    <p> Annuler</p>
                  </button>
                  <button className='btn-conf confirmer' type='submit'
                    onClick={ChangeStatedeclarationrej}>
                    <p> confirmer</p>
                  </button>
                </div>
              </form>
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
                  {Services.map((serv) =>

                    <option key={serv} value={serv}>{serv}</option>
                  )}
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
