import React from 'react'
import Logo from '../img/logo-symbol.svg'
import Colors from '../constants/colors'

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <a className="ml-3" href="httpw://my828.github.io/color-swatches">
                <img src={Logo} alt="logo" width="40" height="40" style={styles.logo}/>
            </a>
        </nav>
    )
}

const styles = {
    navbar: {
        backgroundColor: Colors.base
    },
    logo: {
        margin: 15
    }
}

export default Navbar;
