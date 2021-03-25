import React, { Component } from 'react'
import styles from '../Components/InfoCard.module.css'

export default class InfoCard extends Component {
    render() {
        return (
            <div>
                <div className={styles.card}>
                    <img src={this.props.image}/>
                    <div className={styles.card__message}>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.content}</p>
                    </div>
                </div>
            </div>
        )
    }
}
