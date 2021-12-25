

import React, { useEffect, useState } from 'react'
import { GoogleMap,  LoadScript} from '@react-google-maps/api';
import MarkerComponent from './MarkerGenerator'
import axios from 'axios';
import { CreateStores } from './CreateStores';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: 4.649147080262025,
  lng: -74.07764444639595
};







function Map() {

  const [places, setPlaces] = useState([])

  const [loading, setLoading] = useState(true)

  function refreshPlaces(newStore) {
    if (newStore == null) {
      setPlaces([...places]);
    }else{
      setPlaces([...places, newStore ]);
    }
    
  }

  useEffect( () => {
    setLoading(true)
    const fetchStores = async () => {
      return await axios.get(`http://localhost:3002/stores`)
    }
    fetchStores()
    .then(response => {
      setPlaces(response.data)
      setLoading(false)
    } )
  }, [])

  
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCuzFvzPVILxkDPi-n2qqzeQ-qjDuiKCio"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >

    <CreateStores
    refreshPlaces = {refreshPlaces}
    />

        
    {
      !loading && (
        places.map(place => (

          <MarkerComponent
          
          id = {place.store_id}
          lat={place.lat}
          lng = {place.lng}
          name = {place.name}
          type = {place.type}
          calification = {place.calification}
          refreshPlaces = {refreshPlaces}

          />
        ))
      )
      
    }



      <div className='optionButtons'>
        <button
          onClick={()=>{
          }}
          type='button'
        >
          Sign up
        </button>

        <button
          onClick={()=>{
          }}
          type='button'
        >
          Create store
        </button>

          
      </div>

          </GoogleMap>
    </LoadScript>
  )
}

export default Map


