import React from "react"
import { Header } from "../../layouts/header/header"
import { HeaderFinca } from "./headerFinca"
import { FooterFinca } from "./footerFinca"
import { HomeFinca } from "./pagesFinca/Home"

const Finca = () => {
  return(
    <>
    <Header></Header>
    <HeaderFinca></HeaderFinca>
    <HomeFinca></HomeFinca>
    <FooterFinca></FooterFinca>
    </>
  )
}
export {Finca}