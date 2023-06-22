import React from 'react'
import { NavBar } from '../../../layouts/navbar/Navbar'
import { CarProducts } from '../../../layouts/layoutsCafeteria/CarProducts/CarProducts'
import { FooterCafeteria } from '../../../layouts/layoutsCafeteria/footercafeteria/FooterCafeteria'

export const Carrito = () => {
  return (
    <>
        <NavBar />
        <main>
            <CarProducts />
        </main>
        <FooterCafeteria />
    </>
  )
}
