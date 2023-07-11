import React from 'react';

function MenuItem(props) {
  const { menuItem } = props;
  return (
    <div className="menuItem">
        <div style={{ backgroundImage: `url(${menuItem.image})`}}></div>
        <h1> {menuItem.name} </h1>
        <p> {menuItem.price} ฿ </p>
    </div>
  )
}

export default MenuItem;
