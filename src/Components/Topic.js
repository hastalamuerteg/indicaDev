import React, { Component } from 'react'
import styles from './Topic.module.css'

export default class Topic extends Component {
    render() {
        return (
            <div>
                <div className={styles.topic__box}>
                <img src={this.props.image} className={styles.topic__image}/>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.content}</p>
                    <a href="#">{this.props.anchor}</a>
                </div>
            </div>
        )
    }
}
