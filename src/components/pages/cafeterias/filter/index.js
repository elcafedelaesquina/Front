import React from 'react'
import'./style.css'
const FilterCafeterias = () => {
  return (
    < >
        <select className="select">
           <option>Café</option>
           <option>Café</option>
           <option>Café</option>
           <option>Café</option>
           <option>Café</option>
           <option>Café</option>
           
        </select>
        <div className='check'>
         <input type="checkbox"></input> 
         <p>cafes cerca</p>
        </div>
        <div className='check'>
         <input type="checkbox"></input> 
         <p>cafes cerca</p>
        </div>
        <div className='check'>
         <input type="checkbox"></input> 
         <p>cafes cerca</p>
        </div>
        <div className='check'>
         <input type="checkbox"></input> 
         <p>cafes cerca</p>
        </div>
        <div className='check'>
         <input type="checkbox"></input> 
         <p>cafes cerca</p>
        </div>

        <div className='iframe' >
          <iframe title='h' width="100%" height="190" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=salento%20quindio+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/car-satnav-gps/">Car Navigation Systems</a>
          </iframe>
          </div>
        
      
    </>
  )
}

export { FilterCafeterias}
