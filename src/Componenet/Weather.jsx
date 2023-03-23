import React, { useState } from 'react'
import moment from 'moment/moment'

function Weather(props) {



   return (
      <>

         <div>
            <div className='col-md-12 d-flex justify-content-center '>
               {/* Temrature Detail Box */}
               <div className='col-md-12  temp border border-dark border-2 px-3 py-2 '>
                  <div className='col-md-12 '>
                     <div className='fs-3 col-md-12 d-flex justify-content-start'>
                        {`${props.weatherReport.location.name}- ${props.weatherReport.location.region}/${props.weatherReport.location.country.substr(0, 2).toUpperCase()} Weather`}
                        < br />
                     </div>
                     <div className='col-md-12 d-flex justify-content-start ' ><label className='fs-5 time'>As of {
                        moment(props.weatherReport.current.last_updated,).format("	llll")
                     }
                     </label></div>
                  </div>
                  <div className='col-md-12 mt-2 text-center '>
                     <span className='degree'>
                        {props.weatherReport.current.temp_c}<span>&#176;</span>
                        <img className='img-fluid' src={props.weatherReport.current.condition.icon} alt={'weather'} />
                        <label className='fs-4'>{props.weatherReport.current.condition.text}</label>
                     </span>
                  </div>
                  <div className='col-md-12 text-start mb-2'>
                     <label className='fs-4'>{props.weatherReport.current.condition.text}</label>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Weather
