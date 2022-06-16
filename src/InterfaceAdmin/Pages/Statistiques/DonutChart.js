import React, { useState, useEffect } from 'react'
import Chart from 'chart.js/auto';
import { Bar ,Doughnut,PolarArea} from 'react-chartjs-2';
import "../../Accessoirs/Admin.css"

const DoughnutChart = () => {

    const [chart, setChart] = useState([])
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [empty, setempty] = useState(false)

    useEffect(() => {

        const fetchItems = async () => {
          try {
            const response = await fetch("http://localhost:2000/Admin/ConsulterComptes");
            if (!response.ok) throw Error("les données n'ont pas été reçus");
            const listItems = await response.json();
            setChart(listItems.usersTable);
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

    function nombreserv(y) {
        let x = 0;
        chart.map((n) => {
            if (y.toLocaleLowerCase() == n.role.toLocaleLowerCase()) {
                x++;
            }
        })
        return x;

    }
    function nombreetate(y) {
        let x = 0;
        chart.map((n) => {
            if (y == n.Etat) {
                x++;
            }
        })
        return x;

    }

    const state = {
        labels: ['Administrateur', 'Administrateur-Secondaire', 'Chef de service', 'responsable des relations extérieures',
            " responsable d'aiguillage"],
        datasets: [
            {
                label: "Nombre d'utilisateur par role",
                backgroundColor: ['#B21F00',
                    '#C9DE00',
                    '#2FDE00',
                    '#00A6B4',
                    '#A3CAE5'
                ],
              data: [nombreserv('administrateur'), nombreserv('administrateur-secondaire'), nombreserv('chef de service'), nombreserv('responsable des RE'), nombreserv("responsable d'aiguillage")]
        
            }
        ]

    }
    const state2 = {
        labels: ['Activé', 'Désactivé'],
        datasets: [
            {
                label: ' ',
                backgroundColor: [
                    '#EE66D8',
                    '#1F234E',
                ],
                borderColor: '#1F234E',
                borderWidth: 0.5,
                data: [nombreetate(1),nombreetate(0)]
             

            }
        ]

    }

    return (<>
        {isLoading ? (<p className='loading'>Chargement...</p>) :
            fetchError ? (<p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>) :
                empty ? (<p> la liste est vide </p>) :
                    <div className='chars-admin'>
                        <div className='char-elem'>
                            <div className='char-titre'>
                                <h3>Nombre de comptes par role :</h3>
                            </div>
                            <div className='Bar-char'>
                                <PolarArea
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
                        <div className='char-elem'>
                            <div className='char-titre'>
                                <h3>Nombre de comptes selon l'état :</h3>
                            </div>
                            <div className='Bar-char'>
                                <Bar
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
                                        animation: false
                                    }}
                                />
                            </div>
                        </div>
                    </div>

        }</>
    )
}

export default DoughnutChart