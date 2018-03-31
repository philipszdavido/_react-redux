(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types'], factory) :
    (factory((global._ReactRedux = {}),global.react,global.PropTypes));
}(this, (function (exports,react,PropTypes) { 'use strict';

    var react__default = 'default' in react ? react['default'] : react;
    PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;

    class StoreProvider extends react.Component {

        constructor(props, ctx) {
            super(props, ctx);
            this.store = this.props.store;
        }

        getChildContext() {
            const { store } = this.props;
            return { store }
        }

        render() {
            return (
                react.Children.only(this.props.children)
            );
        }
    }

    StoreProvider.contextTypes = {
        store: PropTypes.object.isRequired
    };

    StoreProvider.childContextTypes = {
        store: PropTypes.object.isRequired
    };

    function _w(_cmp, mapStateToProps, mapDispatchToProps) {
        class W extends react.Component {
            constructor(props, context) {
                super(props, context);
            }
            render() {
                const { store } = this.context;
                let state = store.getState();
                let dispatch = store.dispatch;

                let _d = mapDispatchToProps(store.dispatch);

                if (typeof mapDispatchToProps == 'object') {
                    for (var key in mapDispatchToProps) {
                        mapDispatchToProps[key]();
                    }
                }
                let _s = mapStateToProps(state);
                let _props = Object.assign(_s, _d);
                return (
                    react.createElement(_cmp, _props)
                );
            }
        }

        W.contextTypes = {
            store: PropTypes.object.isRequired
        };

        return W
    }

    /**
     * const mapStateToProps = dispatch => {
     *  calc: dispatch => console.log()
     * }
     * @param {*} mapStateToProps 
     * @param {*} mapDispatchToProps
     */
    function _connect(mapStateToProps, mapDispatchToProps) {
        return function(cmp) {
            return _w(cmp, mapStateToProps, mapDispatchToProps)
        }
    }

    exports.Provider = StoreProvider;
    exports._connect = _connect;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
