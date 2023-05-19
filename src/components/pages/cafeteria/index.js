import React from 'react'
import { Header } from '../../layouts/header/header';
import { HeaderCafeteria } from './headerCafeteria';
import { HomeCafeteria } from './pagesCafeteria/home';
import { FooterCafeteria } from './footerCafeteria';


 const Cafeteria = () => {
  return (
    <>
        <Header></Header>
        <HeaderCafeteria></HeaderCafeteria>
        <HomeCafeteria></HomeCafeteria>
        <FooterCafeteria></FooterCafeteria>
    </>
  )
}
export {Cafeteria};
