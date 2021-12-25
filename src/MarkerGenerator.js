import React, { useState } from 'react';
import { InfoWindow, Marker} from '@react-google-maps/api';
import StarRating from './StarsRating';
import axios from 'axios';

 

const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 20,
}





function MarkerGenerator(props) {

  const [showInfoWindow, setShowInfoWindow] = useState(false)

  const [rating, setRating] = useState(props.calification);


  const handleChange = async (value) => {
    const id = props.id
    setRating(value);
    await axios.put(`http://localhost:3002/stores/${id}`,{calification: value})
  }


  const deleteStore = async (event) => {
    event.preventDefault();

      await axios.delete(`http://localhost:3002/stores/${props.id}`)
      alert("Deleted store")
      props.refreshPlaces();


    }



  return(
    <React.Fragment>
    <Marker
    
    position={{lat: props.lat, lng: props.lng}} 
    onClick={() =>{
      setShowInfoWindow(!showInfoWindow);
    }}
    />


  { (showInfoWindow && (

  <InfoWindow
      onCloseClick={() =>{
        setShowInfoWindow(!showInfoWindow)
      }}
      
      position={{lat: props.lat, lng: props.lng}}
    >
      <div style={divStyle}>
        <h1>{props.name}</h1>
        <h2>{props.type}</h2>
        <h2>Calification</h2>

        <StarRating 
        count={5}
        size={40}
        value={rating}
        activeColor ={'#FFD700'}
        inactiveColor={'#ddd'}
        onChange={handleChange}  />
        <form onSubmit={deleteStore}>
        <button id='deleteButton' type='submit'>
          Delete store
        </button>
        </form>
      </div>
    </InfoWindow>
  ))

  

  }



    </React.Fragment>
  )
}
export default MarkerGenerator