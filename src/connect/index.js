import React, { Component, createElement } from 'react';
import { connect } from './../connect'

function _w(_cmp) {
    console.log('======= nnamdi =============')
    console.log(_cmp)
    console.log('======= end =============')
    class W extends Component {
        render() {
            console.log('======= rendering =============')
            return (
                createElement(_cmp, { nnamdi: 'nnamdi' })
            );
        }
    }
    return W
}

/**
 * const mapStateToProps = dispatch => {
 *  calc: dispatch => console.log()
 * }
 * @param {*} mapStateToProps 
 * @param {*} mapDispatchToDispatch 
 */
export function _connect(mapStateToProps, mapStateToDispatch) {
    return function(cmp) {
        console.log(cmp)
        return _w(cmp)
    }
}