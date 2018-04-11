import { Component, createElement } from 'react';
import PropTypes from 'prop-types'
import Subscription from './../utils/Subscription'

function _w(_cmp, mapStateToProps, mapDispatchToProps) {
    class W extends Component {
        constructor(props, context) {
            super(props, context)
            this.store = this.context['store']
            this.state = {}
            this.initSubscription()
        }
        componentDidMount() {
            this.subscription.trySubscribe()
        }
        componentWillUnmount() {
            this.subscription = null
        }

        initSubscription() {
            this.subscription = new Subscription(this.store, this.stateChange.bind(this))
        }

        stateChange() {
            this.setState({})
        }

        render() {
            let state = this.store.getState()
            let dispatch = this.store.dispatch;

            let _d = mapDispatchToProps(this.store.dispatch)

            /*if (typeof mapDispatchToProps == 'object') {
                for (var key in mapDispatchToProps) {
                    mapDispatchToProps[key]()
                }
            }*/
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