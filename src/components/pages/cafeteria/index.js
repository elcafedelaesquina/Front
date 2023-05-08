import React from 'react'
import { Header } from '../../layouts/header/header';
import { HeaderCafeteria } from './headerCafeteria';
import { HomeCafeteria } from './pagesCafeteria/home';

 const Cafeteria = () => {
  return (
    <>
        <Header></Header>
        <HeaderCafeteria></HeaderCafeteria>
        <HomeCafeteria></HomeCafeteria>
        
        
    </>
  )
}
export {Cafeteria};
