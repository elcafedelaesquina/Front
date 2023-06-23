import React from 'react'
import Style from './carrito.module.css'
import { NavBar } from '../../../layouts/navbar/Navbar'
import { CarProducts } from '../../../layouts/layoutsCafeteria/CarProducts/CarProducts'
import { FooterCafeteria } from '../../../layouts/layoutsCafeteria/footercafeteria/FooterCafeteria'

export const Carrito = () => {
  return (
    <div className={Style.container}>
        <NavBar />
        <main className={Style.containerMain}>
            <CarProducts />
        </main>
        <FooterCafeteria />
    </div>
  )
}
