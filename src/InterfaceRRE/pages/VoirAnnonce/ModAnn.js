import React from 'react'
import "../../../InterfaceGestAiguillage/pages/ConsulterRapports/rapport.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faCheck, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import axios from "axios";

const ModAnn = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
  
    const [announce, setannounce] = useState(null);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [ShowconfCour, setShowconfcour] = useState(false);
    const [ShowconfTrait, setShowconftrait] = useState(false);
    useEffect(() => {
  
      const fetchItems = async () => {
        try {
          const response = await fetch("http://localhost:2000/announce/majAnnounce/" + id);
          if (!response.ok) throw Error("les données n'ont pas été reçus");
          const listItems = await response.json();
          setannounce(listItems);
  
          setFetchError(null);
  
        } catch (err) {
          setFetchError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
  
      setTimeout(() => fetchItems(), 1000);
  
    }, [id, announce])
  
  
  return (
    <>
    ceci form detail d'une announce cliquer sur modifier pour la modofoer 
    </>
  )
}

export default ModAnn