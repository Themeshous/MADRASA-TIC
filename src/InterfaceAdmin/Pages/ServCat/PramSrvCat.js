import React from 'react'
import { useState, useEffect } from "react";
const PramSrvCat = () => {
    const [items, setItems] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {

        const fetchItems = async () => {
          try {
            const response = await fetch("");
            if (!response.ok) throw Error("les données n'ont pas été reçus");
            const listItems = await response.json();
            setItems(listItems);
            setFetchError(null);
          } catch (err) {
            setFetchError(err.message);
          } finally {
            setIsLoading(false);
          }
        }
    
        setTimeout(() => fetchItems(), 1000);
    
      }, [])
      useEffect(() => {

        const fetchItems = async () => {
          try {
            const response = await fetch("");
            if (!response.ok) throw Error("les données n'ont pas été reçus");
            const listItems = await response.json();
            setItems(listItems);
            setFetchError(null);
          } catch (err) {
            setFetchError(err.message);
          } finally {
            setIsLoading(false);
          }
        }
    
        setTimeout(() => fetchItems(), 1000);
    
      }, [])

  return (
    <div>PramSrvCat</div>
  )
}

export default PramSrvCat