import React from "react";
import'./style.css'

 const FilterFincas = () => {
  return (
    < >
    <select className="select">
       <option>Finca</option>
       <option>Finca</option>
       <option>Finca</option>
       <option>Finca</option>
       <option>Finca</option>
       <option>Finca</option>      
    </select>
    <div className='check'>
     <input type="checkbox"></input> 
     <p>Fincas cerca</p>
    </div>
    <div className='check'>
     <input type="checkbox"></input> 
     <p>Fincas cerca</p>
    </div>
    <div className='check'>
     <input type="checkbox"></input> 
     <p>Fincas cerca</p>
    </div>
    <div className='check'>
     <input type="checkbox"></input> 
     <p>Fincas cerca</p>
    </div>
    <div className='check'>
     <input type="checkbox"></input> 
     <p>Fincas cerca</p>
    </div>

    <div className='iframe' >
      <iframe title='h' width="100%" height="190" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=salento%20quindio+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/car-satnav-gps/">Car Navigation Systems</a>
      </iframe>
      </div>
    </>
  )
}

export {FilterFincas}