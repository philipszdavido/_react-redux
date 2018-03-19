(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (factory((global._ReactRedux = {}),global.react));
}(this, (function (exports,react) { 'use strict';

    var react__default = 'default' in react ? react['default'] : react;

    //import PropTypes from 'prop-types'
    //import { storeShape, subscriptionShape } from '../utils/PropTypes'
    //import warning from '../utils/warning'

    let didWarnAboutReceivingStore = false;

    function warnAboutReceivingStore() {
        if (didWarnAboutReceivingStore) {
            return
        }
        didWarnAboutReceivingStore = true;

        warning(
            '<Provider> does not support changing `store` on the fly. ' +
            'It is most likely that you see this error because you updated to ' +
            'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' +
            'automatically. See https://github.com/reactjs/react-redux/releases/' +
            'tag/v2.0.0 for the migration instructions.'
        );
    }

    function createProvider(storeKey = 'store', subKey) {
        const subscriptionKey = subKey || `${storeKey}Subscription`;

        class Provider extends react.Component {
            getChildContext() {
                return {
                    [storeKey]: this[storeKey],
                    [subscriptionKey]: null
                }
            }

            constructor(props, context) {
                super(props, context);
                this[storeKey] = props.store;
            }

            render() {
                return react.Children.only(this.props.children)
            }
        }

        if (process.env.NODE_ENV !== 'production') {
            Provider.prototype.componentWillReceiveProps = function(nextProps) {
                if (this[storeKey] !== nextProps.store) {
                    warnAboutReceivingStore();
                }
            };
        }

        Provider.propTypes = {
            store: storeShape.isRequired,
            children: PropTypes.element.isRequired,
        };
        Provider.childContextTypes = {
            [storeKey]: storeShape.isRequired,
            [subscriptionKey]: subscriptionShape,
        };

        return Provider
    }

    var Provider = createProvider()

    //import { connect } from './../connect'

    function _w(_cmp) {
        console.log('======= nnamdi =============');
        console.log(_cmp);
        console.log('======= end =============');
        class W extends react.Component {
            render() {
                console.log('======= rendering =============');
                return (
                    react.createElement(_cmp, { nnamdi: 'nnamdi' })
                );
            }
        }
        return W
    }

    /**
     * const mapStateToProps = dispatch => {
     *  calc: dispatch => console.log()
     * }
     * @param {*} mapstateToProps 
     * @param {*} mapStateToDispatch 
     */
    function _connect(mapStateToProps, mapDispatchToProps) {
        console.log(mapStateToProps, mapDispatchToProps);

        return function(cmp) {
            console.log(cmp);
            return _w(cmp)
        }
    }

    exports.Provider = Provider;
    exports._connect = _connect;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
