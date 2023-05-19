import React from "react"
import { Header } from "../../layouts/header/header"
import { HeaderFinca } from "./headerFinca"
import { FooterFinca } from "./footerFinca"

const Finca = () => {
  return(
    <>
    <Header></Header>
    <HeaderFinca></HeaderFinca>
    <FooterFinca></FooterFinca>
    </>
  )
}
export {Finca}