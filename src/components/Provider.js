import { Component, Children } from 'react';
import PropTypes from 'prop-types'

class StoreProvider extends Component {

    constructor(props, ctx) {
        super(props, ctx)
        this.store = this.props.store
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

StoreProvider.contextTypes = {
    store: PropTypes.object.isRequired
}

StoreProvider.childContextTypes = {
    store: PropTypes.object.isRequired
}

export default StoreProvider