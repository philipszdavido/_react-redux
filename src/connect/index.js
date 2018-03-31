import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types'

function _w(_cmp, mapStateToProps, mapDispatchToProps) {
    class W extends Component {
        constructor(props, context) {
            super(props, context)
        }
        render() {
            const { store } = this.context
            let state = store.getState()
            let dispatch = store.dispatch;

            let _d = mapDispatchToProps(store.dispatch)

            if (typeof mapDispatchToProps == 'object') {
                for (var key in mapDispatchToProps) {
                    mapDispatchToProps[key]()
                }
            }
            let _s = mapStateToProps(state)
            let _props = Object.assign(_s, _d)
            return (
                createElement(_cmp, _props)
            );
        }
    }

    W.contextTypes = {
        store: PropTypes.object.isRequired
    }

    return W
}

/**
 * const mapStateToProps = dispatch => {
 *  calc: dispatch => console.log()
 * }
 * @param {*} mapStateToProps 
 * @param {*} mapDispatchToProps
 */
export function _connect(mapStateToProps, mapDispatchToProps) {
    return function(cmp) {
        return _w(cmp, mapStateToProps, mapDispatchToProps)
    }
}