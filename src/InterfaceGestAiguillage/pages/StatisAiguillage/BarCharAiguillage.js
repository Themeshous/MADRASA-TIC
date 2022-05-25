import React from 'react'
import { useState, useEffect } from 'react'
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import "../../../InterfaceAdmin/Accessoirs/Admin.css"

const BarCharAiguillage = () => {

    const [chart, setChart] = useState([])
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [empty, setempty] = useState(false)

    useEffect(() => {

        const fetchItems = async () => {
          try {
            const response = await fetch("http://localhost:2000/declaration/consulterDeclartions");
            if (!response.ok) throw Error("les données n'ont pas été reçus");
            const listItems = await response.json();
            console.log(listItems);
            setChart(listItems);
            setFetchError(null);
            
            if (listItems.length==0) {
              setempty(true)
            }
          } catch (err) {
            setFetchError(err.message);
          } finally {
            setIsLoading(false);
          }
        }
    
        setTimeout(() => fetchItems(), 1000);
    
      }, [chart])
console.log(chart);
    function nombreserv(y) {
        let x = 0;
        chart.map((n) => {
            if (y.toLocaleLowerCase() == n.etat.toLocaleLowerCase()) {
                x++;
            }
        })
        return x;

    }
  
    const state = {
        labels: ['Validé', 'rejeter','traité','Encours'],
        datasets: [
            {
                label: "Nombre de déclarations par état :",
                backgroundColor: ['#B21F00',
                    '#C9DE00',
                    '#2FDE00',
                    '#00A6B4',
                    '#A3CAE5'
                ],
              data: [nombreserv('valider'), nombreserv('rejeter'),nombreserv('traité'),nombreserv('Encours')]
        
            }
        ]

    }


  return (
    <>
        {isLoading ? (<p className='loading'>Chargement...</p>) :
            fetchError ? (<p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>) :
                empty ? (<p> la liste est vide </p>) :
                    <div className='chars-admin'>
                        <div className='char-elem'>
                            <div className='char-titre'>
                                <h3>Nombre de déclarations par état :</h3>
                            </div>
                            <div className='Bar-char'>
                                <Bar
                                    data={state}
                                    options={{
                                        responsive: true,
                                        plugins: {
                                            legend: {
                                                position: 'top',
                                            },
                                            title: {
                                                display: false,

                                            }
                                        },
                                        animation: false
                                    }}
                                />
                            </div>
                        </div>
                        </div>

        }</>
  )
}

export default BarCharAiguillage