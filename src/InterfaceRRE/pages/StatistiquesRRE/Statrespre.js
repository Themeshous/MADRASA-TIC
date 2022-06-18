import React, { useState, useEffect } from 'react'
import Chart from 'chart.js/auto';
import { Bar,PolarArea} from 'react-chartjs-2';
import "../../../InterfaceAdmin/Accessoirs/Admin.css"


const Statrespre= () => {

    const [chart, setChart] = useState([])
    const [Items,setItems]=useState([])
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const [date,setdate]= useState("")
       useEffect(() => {
         let today=new Date();
         let date = today.getFullYear()+ "/" +(today.getMonth()+1)+"/"+today.getDate();
         setdate(date)
       }, []);

      useEffect(() => {

        const fetchItems = async () => {
          try {
            const response = await fetch("http://localhost:2000/announce/consulterAnnounce/");
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

      useEffect(() => {

        const fetchItems = async () => {
          try {
            const response = await fetch("http://localhost:2000/announce/consulterArchiveAnnounce");
            if (!response.ok) throw Error("les données n'ont pas été reçus");
            const listItems = await response.json();
            setChart(listItems.result);
            setFetchError(null);
          } catch (err) {
            setFetchError(err.message);
          } finally {
            setIsLoading(false);
          }
        }
    
        setTimeout(() => fetchItems(), 1000);
    
      }, [chart])

    function nombann(y) {
        let x = 0;
        if (y==='Posté') {
             Items.map((n) => {
            if (n.datepost >= date) {
                x++;
            }
        })
        }else if(y==='pas encore'){
            Items.map((n) => {
                if (n.datepost < date) {
                    x++;
                }
            })
        }else{
            x=chart.length;
        }
       
        return x;

    }
    
    const state = {
        labels: ['Partagée','Pas encore partagée', 'Archivée'],
        datasets: [
            {
                label: "Nombre d'annonces par état",
                backgroundColor: ['#B21F00',
                    '#C9DE00',
                    '#2FDE00',
                    '#00A6B4',
                    '#A3CAE5'
                ],
              data: [nombann('Posté'), nombann('pas encore'),nombann('archivé')]
        
            }
        ]

    }
  return (
    <>
        {isLoading ? (<p className='loading'>Chargement...</p>) :
            fetchError ? (<p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>) :
                <div className='chars-admin'>
                <div className='char-elem'>
                    <div className='char-titre'>
                        <h3>Nombre d'annonces par état :</h3>
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
                </div>
        }</>
  )
}

export default Statrespre