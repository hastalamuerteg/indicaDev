import React, { Component } from 'react'
import styles from './Footer.module.css'
import logo from '../images/Logo.jpeg'
import gitlogo from '../images/github.png'
import linkedinlogo from '../images/linkedin.png'
import instalogo from '../images/instagram.png'


export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className={styles.footer}>
                    <div>
                        <img src={logo}/>
                    </div>
                    <div className={styles.footer__links}>
                        <h4>Functionalities</h4>
                        <a href="#">Friends finder</a>
                        <a href="#">Messenger</a>
                        <a href="#">Publisher</a>
                        <a href="#">Network</a>
                    </div>
                    <div className={styles.footer__links}>
                        <h4>Resources</h4>
                        <a href="#">Support</a>
                        <a href="#">Community</a>
                        <a href="#">My account</a>
                        <a href="#">Purchase</a>
                    </div>
                    <div className={styles.footer__links}>
                        <h4>About indicaDev</h4>
                        <a href="#">Company</a>
                        <a href="#">Careers</a>
                        <a href="#">Events</a>
                        <a href="#">Blogs</a>
                    </div>
                </div>
                <div className={styles.footer__copy}>
                    <p>Privacy Policy</p>
                    <p>Terms</p>
                    <p>Copyright © 2021 indicaDev</p>
                    <div className={styles.footer__external__links}>
                        <a href="https://github.com/hastalamuerteg" target="blank"><img src={gitlogo}/></a>
                        <a href="https://www.linkedin.com/in/gabriel--vicente/" target="blank"><img src={linkedinlogo}/></a>
                        <a href="https://www.instagram.com/gabrielo.vicent/" target="blank"><img src={instalogo}/></a>
                    </div>
                </div>
            </div>
        )
    }
}
