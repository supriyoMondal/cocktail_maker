import React from 'react'
import Logo from '../assets/cocktail.png'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
const Header = () => {
    return (
        <div className="header">
            <MenuIcon style={{ fontSize: 30, color: '#fff' }} />
            <div className="main-heading">

                <h1>Cocktail Maker</h1>
                <img src={Logo} alt="Cocktail" />
            </div>
            <SearchIcon style={{ fontSize: 25, color: '#fff', marginLeft: 'auto', padding: 5 }} />
        </div>
    )
}

export default Header
