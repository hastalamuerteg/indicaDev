import React, { Component } from 'react'
import logo from '../images/Logo.jpeg'
import styles from '../Components/Navbar.module.css'

export default class Navbar extends Component {
    render() {
        return (
            <div>
            <nav className={styles.nav__bar}>
            <img src={logo} alt="Logo" className={styles.Logo}/>
                <ul className={styles.nav__items}>
                    <button className={styles.nav__signup}>Sign up</button>
                    <button className={styles.nav__signin}>Sign in</button>
                </ul>
            </nav>
        </div>
        )
    }
}
