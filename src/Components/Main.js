import React, { Component } from 'react'
import mainCard from '../images/codeTyping.svg'
import styles from '../Components/Main.module.css'


export default class Main extends Component {
    render() {
        return (
            <div>
                <main className={styles.main__content}>
                    <img src={mainCard} className={styles.main__content__image}/>
                    <div className={styles.main__content__message}>
                    <h1>Where <span>developers</span> share knowledge</h1>
                    <p>Connect and find jobs</p>
                    <button className={styles.main__content__button}>Sign up for free!</button>
                    </div>
                </main>
            </div>
        )
    }
}
