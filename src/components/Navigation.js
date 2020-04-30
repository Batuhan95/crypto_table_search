import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Tablo</NavLink>
          <br/>
          <NavLink to="/coinsearch">CoinSearch</NavLink>
          <br/>
          <NavLink to="/contact">Contact</NavLink>
       </div>
    );
}
 
export default Navigation;