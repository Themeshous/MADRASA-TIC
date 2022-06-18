import React, { useState, useEffect } from 'react'
import Chart from 'chart.js/auto';
import { Bar,PolarArea} from 'react-chartjs-2';
import "../../../InterfaceAdmin/Accessoirs/Admin.css"
const StatServ = () => {
     
    const user = JSON.parse(localStorage.getItem("user"));

    const [chart, setChart] = useState([])
    const [Items,setItems]=useState([])
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [empty, setempty] = useState(false)

    useEffect(() => {

        const fetchItems = async () => {
          try {
            const response = await fetch("http://localhost:2000/declaration/consulterdeclarations/"+user.prof.toString());//get que les déclarations validé et service==service
            if (!response.ok) throw Error("les données n'ont pas été reçus");
            const listItems = await response.json();
            setChart(listItems);
            setFetchError(null);
          } catch (err) {
            setFetchError(err.message);
          } finally {
            setIsLoading(false);
          }
        }
    
        setTimeout(() => fetchItems(), 1000);
    
      }, [chart])

      useEffect(() => {

        const fetchItems = async () => {
          try {
            const response = await fetch("http://localhost:2000/rapport/consultRapportRespoAgg");//get que les déclarations validé et service==service
            if (!response.ok) throw Error("les données n'ont pas été reçus");
            const listItems = await response.json();
            setItems(listItems.result);
            setFetchError(null);
          } catch (err) {
            setFetchError(err.message);
          } finally {
            setIsLoading(false);
          }
        }
    
        setTimeout(() => fetchItems(), 1000);
    
      }, [Items])

   function nombreserv(y) {
        let x = 0;
        chart.map((n) => {
            if (y.toLocaleLowerCase() == n.etat.toLocaleLowerCase()) {
                x++;
            }
        })
        return x;

    }
    function nombrapetat(y) {
        let x = 0;
        Items.map((n) => {
            if (y.toLocaleLowerCase() == n.etat.toLocaleLowerCase()) {
                x++;
            }
        })
        return x;

    }
    
   /* function nombreetate(y) {
        let x = 0;
        chart.map((n) => {
            if (y === n.Etat) {
                x++;
            }
        })
        return x;

    }*/

    const state = {
        labels: ['Traité', 'Encours','Validé'],
        datasets: [
            {
                label: "Nombre de déclarations par état",
                backgroundColor: ['#B21F00',
                    '#C9DE00',
                    '#2FDE00',
                    '#00A6B4',
                    '#A3CAE5'
                ],
              data: [nombreserv('Traité'), nombreserv('Encours'),nombreserv('Valider')]
        
            }
        ]

    }
     const state2 = {
        labels: ['Enregistré', 'Envoyé'],
        datasets: [
            {
                label: ' ',
                backgroundColor: [
                    '#EE66D8',
                    '#1F234E',
                ],
                borderColor: '#1F234E',
                borderWidth: 0.5,
                data: [nombrapetat("Enregistré"),nombrapetat("Envoyé")]
             

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
                                animation: true
                            }}
                        />
                    </div>
                </div>
                <div className='char-elem'>
                    <div className='char-titre'>
                        <h3>Nombre de rapports par état :</h3>
                    </div>
                    <div className='Bar-char'>
                        <PolarArea
                            data={state2}
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
                                animation: true
                            }}
                        />
                    </div>
                </div>
                </div>
        }</>
  )
}

export default StatServ