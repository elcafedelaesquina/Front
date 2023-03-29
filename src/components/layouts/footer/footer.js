import React from 'react'
import'./footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <ul>
            <li><ion-icon name="logo-gitlab"></ion-icon></li>
            <li>Términos y configuración Privacidad y cookiesTérminos y condiciones</li>
            <li>Esta es la versión de nuestro sitio web destinada a quienes hablen español en Colombia. Si eres residente de otro país o región, selecciona la versión correcta</li>
            <li>Información Sobre Booking.com Cómo trabajamos Sostenibilidad</li>
        </ul>
        <div className="icons"><ion-icon name="logo-youtube"></ion-icon><ion-icon name="logo-whatsapp"></ion-icon><ion-icon name="logo-facebook"></ion-icon><ion-icon name="logo-github"></ion-icon></div>
      
    </div>
  )
}

export {Footer}
