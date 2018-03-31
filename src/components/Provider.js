import React, { Component, Children } from 'react';
import PropTypes from 'prop-types'

class StoreProvider extends Component {

    constructor(props, ctx) {
        super(props, ctx)
        this.store = this.props.store
    }

    static contextTypes = {
        store: PropTypes.object.isRequired
    }

    static childContextTypes = {
        store: PropTypes.object.isRequired
    }

    getChildContext() {
        const { store } = this.props
        return { store }
    }

    render() {
        return (
            Children.only(this.props.children)
        );
    }
}
export default StoreProvider