import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Weather from './Weather'
import ReportDetail from './ReportDetail'
import Error from './Error'
const { WEATHER_URL } = process.env
function InputLocation() {

   const [locationName, setLoactionName] = useState('')
   const [weatherReport, setWetherReport] = useState('')
   const [error, setError] = useState(false)


   function getWetherDetail() {
      axios.get(`http://api.weatherapi.com/v1/current.json?key=aad712da5f574113b4b90050232203&q=${locationName}&aqi=no`)
         .then(response => {
            setWetherReport(response.data)
            setError(false);
         })
         .catch(err => {
            setWetherReport(null);
            setError(true)
         })
   }
   return (
      <>
         <div className='col-md-12 d-flex justify-content-between selectCountry mt-4 mb-4' >
            <div className='col-4'>
               <label className='fs-5 fw-bold '>Enter Your location :</label>
            </div>
            <div className='col-6'><input className='' type='text' onChange={(event) => setLoactionName(event.target.value)} /></div>
            <div className='col-2'>
               <button className='' onClick={getWetherDetail}>Submit</button>
            </div>
         </div>
         {error && <Error />}
         {weatherReport && <Weather weatherReport={weatherReport} />}
         {weatherReport && <ReportDetail weatherReport={weatherReport} />}
      </>
   )
}

export default InputLocation
