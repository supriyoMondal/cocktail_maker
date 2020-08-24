import React, { useState, Fragment } from 'react'
import Logo from '../assets/cocktail.png'
import Liquor from '../assets/liquor.png'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import CancelIcon from '@material-ui/icons/Cancel';
import { motion, AnimatePresence } from 'framer-motion'

const variant = {
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: .4,
            ease: 'easeOut'
        }
    },
    hidden: {
        x: '-100vw',
        opacity: 0
    }
}

const Header = () => {
    const [drawerVisibility, setDrawerVisibility] = useState(false);
    return (
        <Fragment>
            <div className="header">
                <div
                    onClick={() => setDrawerVisibility(!drawerVisibility)}
                >
                    <MenuIcon
                        className="icon" style={{ fontSize: 30, color: '#fff', cursor: 'pointer', paddingLeft: 8 }} />
                </div>
                <div className="main-heading">

                    <h1>Cocktail Maker</h1>
                    <img src={Logo} alt="Cocktail" />
                </div>
                <SearchIcon className="icon" style={{ fontSize: 25, color: '#fff', marginLeft: 'auto', padding: 5 }} />
            </div>

            <AnimatePresence
            >
                {drawerVisibility &&
                    <motion.div
                        className="drawerOverlay"
                        variants={variant}
                        animate='visible'
                        initial='hidden'
                        exit='hidden'
                    >
                        <div className="drawer">
                            <div
                                onClick={() => setDrawerVisibility(false)}
                                style={{
                                    position: 'absolute', top: 3, right: 3
                                }}>
                                <CancelIcon />
                            </div>
                            <div className="drawerHeading">
                                <div className="img-container">
                                    <img src={Liquor} alt="Cocktail" />
                                </div>
                                <h2>Cocktail Maker</h2>
                            </div>


                            {/* Close Icon at bottom */}
                        </div>

                    </motion.div>
                }
            </AnimatePresence>

        </Fragment>
    )
}

export default Header
