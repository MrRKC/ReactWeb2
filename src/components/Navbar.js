import React, { useState } from 'react';
import Logo from '../images/pizzaLogo1.png'; 
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function Navbar() {
    
    const [openLinks, setOpenLinks] = useState(false);
    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }

    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ?"open" :"close"}>
                <Link to ="/"><img src={Logo} alt="LogoBran"/></Link>
                {/* <img src={Logo} alt="LogoBran"/> */}
                <div className="hiddenLinks">
                    <Link to ="/"> Home </Link>
                    <Link to ="/menu"> Menu </Link>
                    <Link to ="/about"> About </Link>
                    <Link to ="/contact"> Contact </Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to ="/"> Home </Link>
                <Link to ="/menu"> Menu </Link>
                <Link to ="/about"> About </Link>
                <Link to ="/contact"> Contact </Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon/>
                </button>
                <onreset></onreset>
            </div>
        </div>
    )
}

export default Navbar;
