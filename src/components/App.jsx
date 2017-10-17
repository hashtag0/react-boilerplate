import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';

/**
 * App Component
 */
export default class App extends Component {
    static propTypes = {

    };

    /**
     * react render
     * @return {object} React element
     */
    render() {
        return (
            <div className={ styles.App }>hello boilerplate</div>
        );
    }
}
