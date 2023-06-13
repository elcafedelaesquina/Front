import React from 'react'
import PageStyle from './PageStyle.module.css'
import img_user from "../Registros/img/user.png";
import img_cafe from "../Registros/img/cafe.png";
import img_farm from "../Registros/img/farm.png";
import { Link } from 'react-router-dom';

export function Registros() {
  return (
      <div className={PageStyle.cn}>
        <div className={PageStyle.container}>
        <div className={PageStyle.card}>
          <div className={`${PageStyle.face} ${PageStyle.face1}`}>
            <div className={PageStyle.content}>          
              <img className={PageStyle.imgface} src={img_user} alt=''/>
              <h3 className={PageStyle.h3face}>Usuarios</h3>
            </div>
          </div>
          <div className={`${PageStyle.face} ${PageStyle.face2}`}>
            <div className={PageStyle.content}>
              <h3 className={PageStyle.h3face}>Inicia Sesión o Registrate</h3>
              <p className={PageStyle.pface}>Te invitamos a crear tu cuenta como usuario o iniciar sesión para poder navegar y disfrutar de todas las increíbles características y funcionalidades que ofrecemos. </p>
              <Link to={'/User'}><button className={`${PageStyle.boton} ${PageStyle.buttons}`}><span className={PageStyle.spanface}>Hazlo Ya!</span></button></Link>
            </div>
          </div>
        </div>        
        <div className={PageStyle.card}>
          <div className={`${PageStyle.face} ${PageStyle.face1}`}>
            <div className={PageStyle.content}>
              <img className={PageStyle.imgface} src={img_cafe} alt=''/>
              <h3 className={PageStyle.h3face}>Cafeterías</h3>
            </div>
          </div>
          <div className={`${PageStyle.face} ${PageStyle.face2}`}>
            <div className={PageStyle.content}>
              <h3 className={PageStyle.h3face}>Inicia Sesión o Registrate</h3>
              <p className={PageStyle.pface}>Te invitamos a crear tu cuenta personalizada para su cafeteria o iniciar sesión para que puedas sumergirte en el fascinante mundo de nuestra pasión por el café.</p>
              <Link to={'/Cafe'}><button className={`${PageStyle.boton} ${PageStyle.buttons}`}><span className={PageStyle.spanface}>Hazlo Ya!</span></button></Link>
            </div>
          </div>
        </div>        
        <div className={PageStyle.card}>
          <div className={`${PageStyle.face} ${PageStyle.face1}`}>
            <div className={PageStyle.content}>
              <img className={PageStyle.imgface} src={img_farm} alt=''/>
              <h3 className={PageStyle.h3face}>Fincas</h3>
            </div>
          </div>
          <div className={`${PageStyle.face} ${PageStyle.face2}`}>
            <div className={PageStyle.content}>
              <h3 className={PageStyle.h3face}>Inicia Sesión o Registrate</h3>
              <p className={PageStyle.pface}>Te invitamos a crear tu cuenta personalizada para su finca o iniciar sesión para que puedas descubrir y explorar todos los servicios que nuestras fincas tiene para ofrecer.</p>
              <Link to={'/Farm'}><button className={`${PageStyle.boton} ${PageStyle.buttons}`}><span className={PageStyle.spanface}>Hazlo Ya!</span></button></Link>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}
