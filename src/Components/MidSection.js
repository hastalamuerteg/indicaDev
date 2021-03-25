import React, { Component } from 'react'
import styles from '../Components/MidSection.module.css'

export default class MidSection extends Component {
    render() {
        return (
            <div>
            <div className={styles.home__midSection}>
            <h2>{this.props.title}</h2>
            <p>{this.props.content}</p>
            </div>
            </div>
        )
    }
}
