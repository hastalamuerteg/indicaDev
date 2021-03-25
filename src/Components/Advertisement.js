import React, { Component } from 'react'
import styles from './Advertisement.module.css'


export default class Advertisement extends Component {
    render() {
        return (
        <div>
            <div className={styles.advertisement__box}>
                <div className={styles.advertisement__box__message}>
                    <h3>{this.props.title}</h3>
                    <a href="#">{this.props.content}</a>
                </div>
                    <div className={styles.advertisement__box__plans}>
                    {this.props.children}
                    </div>
            </div>
        </div>
        )
    }
}
