import React from 'react'
import PageStyle from './PageStyle.module.css'
import img_user from "../Pages_Registration/img/user.png";
import img_cafe from "../Pages_Registration/img/cafe.png";
import img_farm from "../Pages_Registration/img/farm.png";

export function PagesRegistration() {
  return ( 
      <div className={PageStyle.bowl}>
        <div className={PageStyle.cards}>
          <div className={[PageStyle.face,PageStyle.face1]}>
            <div className='contents'>
              <img className='image_face1' src={img_user} alt=''/>
              <h3 className='title_face1'>Log In user</h3>
            </div>
          </div>
          <div className='face face2'>
            <div className='contents'>
              <p className='p_face2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia accusamus id, quis assumenda dolores expedita sequi dicta perspiciatis quo odio in mollitia recusandae incidunt tenetur aut vel ex harum sit.</p>
              <button className='boton buttons'><span className='span_cards'>Check in</span></button>
            </div>
          </div>
        </div>        
        <div className='cards'>
          <div className='face face1'>
            <div className='contents'>
              <img className='image_face1' src={img_cafe} alt=''/>
              <h3 className='title_face1'>Log In cafe</h3>
            </div>
          </div>
          <div className='face face2'>
            <div className='contents'>
              <p className='p_face2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia accusamus id, quis assumenda dolores expedita sequi dicta perspiciatis quo odio in mollitia recusandae incidunt tenetur aut vel ex harum sit.</p>
              <button className='boton buttons'><span className='span_cards'>Check in</span></button>
            </div>
          </div>
        </div>        
        <div className='cards'>
          <div className='face face1'>
            <div className='contents'>
              <img className='image_face1' src={img_farm} alt=''/>
              <h3 className='title_face1'>Log In farm</h3>
            </div>
          </div>
          <div className='face face2'>
            <div className='contents'>
              <p className='p_face2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia accusamus id, quis assumenda dolores expedita sequi dicta perspiciatis quo odio in mollitia recusandae incidunt tenetur aut vel ex harum sit.</p>
              <button className='boton buttons'><span className='span_cards'>Check in</span></button>
            </div>
          </div>
        </div>
      </div>
  )
}

