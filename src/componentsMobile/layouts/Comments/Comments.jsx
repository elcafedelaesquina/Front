import React from 'react'
import Style from './comments.module.css'

export const Comments = () => {

    let imgTest = 'https://res.cloudinary.com/dmrq9n2im/image/upload/v1683225617/El%20caf%C3%A9%20de%20la%20esquina/imgtest3_m4hqtw.jpg' 

  return (
    <div className={Style.containerComments}>
        <section className={Style.containerInfo}>
            <h2 className={Style.title}>Tu opinion es importante para nosotros...</h2>
            <h3 className={Style.subTitle}>El cafe de la esquina</h3>
            <p className={Style.ubicationSite}>Salento, Quindio</p>
            <img src={imgTest} alt="" className={Style.imgSite} />
        <h3 className={Style.subTitle}>Califica tu experiencia</h3>
        </section>


        <section className={Style.rating}>
            <input type="radio" id="star5" name="rate" value="5"/>
            <label for="star5" title="Excelente"></label>
            <input type="radio" id="star4" name="rate" value="4"/>
            <label for="star4" title="Bueno"></label>
            <input type="radio" id="star3" name="rate" value="3"/>
            <label for="star3" title="Regular"></label>
            <input type="radio" id="star2" name="rate" value="2"/>
            <label for="star2" title="Mala"></label>
            <input type="radio" id="star1" name="rate" value="1"/>
            <label for="star1" title="Muy mala"></label>
        </section>

        <section className={Style.comment}>
            <h3 className={Style.subTitle}>Tu opinion</h3>
            <textarea name="" id="" cols="30" rows="10" />
            <button>Enviar</button>
        </section>
    </div>
  )
}
