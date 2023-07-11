import React, { useState } from 'react';
import MenuList from '../helpers/MenuList';
import MenuItem from '../components/MenuItem';
import MenuSearch from '../components/MenuSearch';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import '../styles/Menu.css';

function Menu() {
    const [searchText, setSearchText] = useState('');

    const filteredMenuList = MenuList.filter((menuItem) => {
        return menuItem.searchMenu.includes(searchText);
    });

    const NewMenuSearch = <MenuSearch value = {searchText} onValueChang = {setSearchText}/>

    const menuList = filteredMenuList.map((menuItem, key) => {
        return <MenuItem key={key} menuItem={menuItem}/>
    });

    return (
        <div className="menu">
            <h1 className="menuTitle"><RestaurantMenuIcon/> Our Menu <RestaurantMenuIcon/></h1>
            {NewMenuSearch}
            <div className="menuList">
                {menuList}
            </div>
        </div>
    )
}

export default Menu;
