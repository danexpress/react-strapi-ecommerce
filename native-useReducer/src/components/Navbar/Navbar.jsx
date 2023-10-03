import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { useSelector } from 'react-redux'
import Cart from '../Cart/Cart';
import "./Navbar.scss"

const Navbar = () => {
  const [open,setOpen] = useState(false)
  const products = useSelector(state=> state.cart.products)

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='left'>
          <div className='item'>
          <Link className='link'to="/">
            <img src='/img/logo.png' alt=''/>
            </Link>
            <KeyboardArrowDownIcon /> 
          </div>
          
          <div className="item">
            <Link className='link'to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className='link'to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className='link'to="/products/3">Children</Link>
          </div>

        </div>
        <div className='center'>
          <Link className='link'to='/'>UrrBAN STORE</Link>
        </div>
        <div className='right'>
        

        <div className="icons">
          
          
          <div className="cartIcon" onClick={()=>setOpen(!open)}>
            <ShoppingCartIcon/>
            <span>{products.length}</span>
          </div>
          </div>

        </div>
      </div>
      {open && <Cart/>}
    </div>
  )
}

export default Navbar;