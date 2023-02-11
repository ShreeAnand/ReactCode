import React, { useState } from 'react';
import Menu from './MenuApi';
import MenuCard from './MenuCard';
import './style.css';

const Resturant = () => {
const [menuData,setMenudata]= useState(Menu)
  return (
    <>
    <MenuCard  menuData={menuData} />
    </>
  )
}

export default Resturant