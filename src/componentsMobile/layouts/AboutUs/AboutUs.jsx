import React from 'react'
import Style from './aboutus.module.css'

export const AboutUs = () => {

const imgtest = 'https://res.cloudinary.com/dmrq9n2im/image/upload/v1683225148/El%20caf%C3%A9%20de%20la%20esquina/Finca-tematica-Quindio-Colombia_oj1lyo.jpg'

  return (
    <div className={Style.aboutus}>
      <h2 className={Style.subtitle}>Nuestra historia</h2>
      <div className={Style.imgMain}>
      <img className={Style.imgReference} src={imgtest} alt="" />
      </div>
      <p className={Style.txt}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugit odio sunt dignissimos, tenetur autem itaque nam vel facere, voluptatibus ullam, rem veniam qui totam corporis eos accusamus eum hic?</p>
    </div>
  )
}
