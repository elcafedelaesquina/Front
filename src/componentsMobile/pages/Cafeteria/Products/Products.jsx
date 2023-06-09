import React from 'react'
import { NavBar } from '../../../layouts/navbar/Navbar'
import { GridProducts } from '../../../layouts/layoutsCafeteria/GridProducts/GridProducts'
import { FooterCafeteria } from '../../../layouts/layoutsCafeteria/footercafeteria/FooterCafeteria'

export const Products = () => {
  return (
    <>
        <NavBar />
        <main>
            <GridProducts />
        </main>
        <FooterCafeteria />
    </>
  )
}
