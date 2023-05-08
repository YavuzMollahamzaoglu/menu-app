import React from 'react'
import { MenuList } from '../helper/MenuList.js'

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Menümüz</h1>
        <div className='menuList'>
            {MenuList.map((menuItem,key)=>{
                return(
                    <div className='menuItem' key={key}>
                        <img src={menuItem.image} alt={menuItem.name}/>
                        <h3 className='menuItemName'>{menuItem.name}</h3>
                        <p className='menuItemPrice'>{menuItem.price} TL</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Menu
