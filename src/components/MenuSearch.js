import React from 'react'
import '../styles/MenuSearch.css';

function MenuSearch(props) {
    const { value, onValueChang } = props;
    return (
        <div className="menu-search">
            <input className="menu-search-input" type="text" placeholder="🔍︎ Search Menu" value={value} onChange={(event) => {onValueChang(event.target.value)}}/>
        </div>
    )
}

export default MenuSearch;
