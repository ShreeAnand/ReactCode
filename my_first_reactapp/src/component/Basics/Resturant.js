import React, { useState } from 'react';
import Menu from './MenuApi';
import MenuCard from './MenuCard';
import NavBar from './NavBar';
import './style.css';

const uniqueList = [...new Set(Menu.map((currElement) => {
  return currElement.category
})), "All", ]

const Resturant = () => {
const [menuData, setMenudata]= useState(Menu)
const [menuList, setMenuList] =useState(uniqueList)
const filterItems =(category)=>{
if(category ==="All"){
  setMenudata(Menu)
  return;
}
const updatedList = Menu.filter((curElement) => {
  return curElement.category ===category;
})
setMenudata(updatedList);
};
  return (
    <>
     <NavBar  filterItems={filterItems} menuList={menuList}/>
    <MenuCard  menuData={menuData} />
    </>
  )
}

export default Resturant