import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { api } from '../utils/peticiones';

function Prueba() {
    const [habitaciones, setHabitaciones] = useState([]);
    useEffect(() => {
        axios(api).then(res => {
            console.log(res)
            setHabitaciones(res.data)
        })

    }, [])

    const [modal, setModal] = useState(false);
    const [habitacion, setHabitacion] = useState({})

    
    const apidelete = 'https://hoteliakuepa.herokuapp.com/habitaciones/id'


    const handleSelect = async(room, selectedStatus) =>{
        const response = await axios.put(`${api}${room._id}`, {...room, estado: selectedStatus});

    }
  return (
    <div>
        <div className='container-list-habs'>
            <h1>HABITACIONES</h1>

            <div className='cards-list-habitaciones'>
            {
                habitaciones?.map(habitacion => (
                    <div>
                        
                    </div>
                )
                        )
            }

            </div>
        </div>
    </div>
  )
}

export default Prueba