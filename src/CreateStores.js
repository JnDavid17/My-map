import React, { useState } from 'react'
import axios from 'axios';




function CreateStores(props) {
  const [changeClass, setchangeClass] = useState("information-collapse")
  const [id, setId] = useState("")
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const [name, setName] = useState("")
  const [type, setType] = useState("")

    const create = async (event) => {
    event.preventDefault();

    if (id === "" || latitude === "" || longitude === "" || name === "" || type === "" ) {
      alert("Please fill the fields")
    }else{

      const newStore = {store_id: id, lat:parseFloat(latitude), lng:parseFloat(longitude), name:name, type:type, calification:0}
      await axios.post(`http://localhost:3002/stores`, newStore)
      props.refreshPlaces(newStore);
    }
    }
  
  
    return (
        <div className='sectionLeft'>
          <div className='sectionTitle'>
            <h1>Create your store</h1>

            <button id='min_max_button' onClick={() =>{
              if (changeClass === "information-collapse") {
                setchangeClass("information-no-collapse")
              }else{
                setchangeClass("information-collapse")

              }
            }}>-</button>
          </div>
        <form onSubmit={create}>
        <div className={changeClass} >

        <div className='inputContainer'>
          <label for="id">
            <span>Store ID</span>
            <input type="number" id='ID' onChange={event => setId(event.target.value)}/>
          </label>
          </div>

          <div className='inputContainer'>
          <label for="latitude">
            <span>Latitude</span>
            <input type="number" id='latitude' step= '0.0000000000000001' onChange={event => setLatitude(event.target.value)}  />
          </label>
          </div>

          <div className='inputContainer'>

          <label for="longitude">
            <span>Longitude</span>
            <input type="number" id='longitude' step= '0.0000000000000001' onChange={event => setLongitude(event.target.value)} />
          </label>
          </div>

          <div className='inputContainer'>
          <label for="name">
            <span>Name</span>
            <input type="text" id='name' onChange={event => setName(event.target.value)} />
          </label>
          </div>

          <div className='inputContainer'>
          <label for="type">
            <span>Type</span>
            <input type="text" id='type' onChange={event => setType(event.target.value)} />
          </label>
          </div>

          <button id='button-submit' type='submit'>
            Create
          </button>
            </div>
            </form> 
        </div>
    )
}

export {CreateStores}
