import React from 'react'

function ReportDetail(props) {

   return (
      <>
         <div className='col-md-12 d-flex justify-content-between mt-3'>
            <div className='col-md-5 mt-1 mb-1'>
               <label className='fs-3 d-flex justify-content-between'>
                  <label className='fs-3 fw-bolder'>
                     {props.weatherReport.current.condition.text}
                  </label>
                  <label className='fs-3 '>
                     {`${props.weatherReport.current.temp_c}`}
                     <span>&#176;</span>
                  </label>
               </label>
               <hr className='dashed' />
            </div>
            <div className='col-md-5 mt-1 mb-1'>
               <label className='fs-3 d-flex justify-content-between'>
                  <label className='fs-3 fw-bolder'>Wind</label>
                  <label className='fs-3 '>
                     {`${props.weatherReport.current.wind_kph
                        }km/h`}
                  </label>
               </label>
               <hr className='dashed' />
            </div>
         </div>

         <div className='col-md-12 d-flex justify-content-between'>
            <div className='col-md-5 mt-1 mb-1'>
               <label className='fs-3 d-flex justify-content-between'>
                  <label className='fs-3 fw-bolder'>Humidity</label>
                  <label className='fs-3 '>
                     {`${props.weatherReport.current.humidity}%`}
                  </label>
               </label>
               <hr className='dashed' />
            </div>
            <div className='col-md-5 mt-1 mb-1'>
               <label className='fs-3 d-flex justify-content-between'>
                  <label className='fs-3 fw-bolder'>
                     Wind Degree
                  </label>
                  <label className='fs-3 '>
                     {`${props.weatherReport.current.wind_degree}`}
                     <span>&#176;</span>
                  </label>
               </label>
               <hr className='dashed' />
            </div>
         </div>

         <div className='col-md-12 d-flex justify-content-between'>
            <div className='col-md-5 mt-1 mb-1'>
               <label className='fs-3 d-flex justify-content-between'>
                  <label className='fs-3 fw-bolder'>Pressure</label>
                  <label className='fs-3 '>
                     {`${props.weatherReport.current.pressure_mb}hPa`}
                  </label>
               </label>
               <hr className='dashed' />
            </div>
            <div className='col-md-5 mt-1 mb-1'>
               <label className='fs-3 d-flex justify-content-between'>
                  <label className='fs-3 fw-bolder'>
                     Wind Dir.
                  </label>
                  <label className='fs-3 '>
                     {`${props.weatherReport.current.wind_dir}`}
                  </label>
               </label>
               <hr className='dashed' />
            </div>
         </div>
      </>

   )
}

export default ReportDetail

