import React from 'react'
import { NavBar } from '../../../layouts/navbar/Navbar'
import { MenuProducts } from '../../../layouts/layoutsCafeteria/MenuProducts/MenuProducts'
import { FooterCafeteria } from '../../../layouts/layoutsCafeteria/footercafeteria/FooterCafeteria'

export const Menu = () => {
  return (
    <>
        <NavBar />
        <main>
          <MenuProducts />
        </main>
        <FooterCafeteria />
    </>
  )
}
