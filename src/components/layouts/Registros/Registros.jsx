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
              <h3 className={PageStyle.h3face}>Log In user</h3>
            </div>
          </div>
          <div className={`${PageStyle.face} ${PageStyle.face2}`}>
            <div className={PageStyle.content}>
              <p className={PageStyle.pface}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia accusamus id, quis assumenda dolores expedita sequi dicta perspiciatis quo odio in mollitia recusandae incidunt tenetur aut vel ex harum sit.</p>
              <Link to={'/User'}><button className={`${PageStyle.boton} ${PageStyle.buttons}`}><span className={PageStyle.spanface}>Check in</span></button></Link>
            </div>
          </div>
        </div>        
        <div className={PageStyle.card}>
          <div className={`${PageStyle.face} ${PageStyle.face1}`}>
            <div className={PageStyle.content}>
              <img className={PageStyle.imgface} src={img_cafe} alt=''/>
              <h3 className={PageStyle.h3face}>Log In cafe</h3>
            </div>
          </div>
          <div className={`${PageStyle.face} ${PageStyle.face2}`}>
            <div className={PageStyle.content}>
              <p className={PageStyle.pface}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia accusamus id, quis assumenda dolores expedita sequi dicta perspiciatis quo odio in mollitia recusandae incidunt tenetur aut vel ex harum sit.</p>
              <Link to={'/Cafe'}><button className={`${PageStyle.boton} ${PageStyle.buttons}`}><span className={PageStyle.spanface}>Check in</span></button></Link>
            </div>
          </div>
        </div>        
        <div className={PageStyle.card}>
          <div className={`${PageStyle.face} ${PageStyle.face1}`}>
            <div className={PageStyle.content}>
              <img className={PageStyle.imgface} src={img_farm} alt=''/>
              <h3 className={PageStyle.h3face}>Log In farm</h3>
            </div>
          </div>
          <div className={`${PageStyle.face} ${PageStyle.face2}`}>
            <div className={PageStyle.content}>
              <p className={PageStyle.pface}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia accusamus id, quis assumenda dolores expedita sequi dicta perspiciatis quo odio in mollitia recusandae incidunt tenetur aut vel ex harum sit.</p>
              <Link to={'/Farm'}><button className={`${PageStyle.boton} ${PageStyle.buttons}`}><span className={PageStyle.spanface}>Check in</span></button></Link>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}
