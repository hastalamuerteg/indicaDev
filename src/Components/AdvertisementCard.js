import React, { Component } from 'react'
import styles from './AdvertisementCard.module.css'

export default class AdvertisementCard extends Component {
    render() {
        return (
            <div>
                 <div className={styles.advertisement__box__plans}>
                        <div className={styles.advertisement__box__plans__card}>
                            <h3>{this.props.title}</h3>
                            <span>{this.props.pricetag}</span>
                            <p>{this.props.content}</p>
                            <a href="#">{this.props.anchor}</a>
                        </div>
                    </div>
            </div>
        )
    }
}
