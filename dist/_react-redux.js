(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types'], factory) :
    (factory((global._ReactRedux = {}),global.react,global.PropTypes));
}(this, (function (exports,react,PropTypes) { 'use strict';

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

    class Subscription {
        constructor(store, stateChange) {
            this.store = store;
            this.stateChange = stateChange;
        }

        trySubscribe() {
            this.store.subscribe(this.stateChange);
        }
    }

    function _w(_cmp, mapStateToProps, mapDispatchToProps) {
        class W extends react.Component {
            constructor(props, context) {
                super(props, context);
                this.store = this.context['store'];
                this.state = {};
                this.initSubscription();
            }
            componentDidMount() {
                this.subscription.trySubscribe();
            }
            componentWillUnmount() {
                this.subscription = null;
            }

            initSubscription() {
                this.subscription = new Subscription(this.store, this.stateChange.bind(this));
            }

            stateChange() {
                this.setState({});
            }

            render() {
                let state = this.store.getState();
                let dispatch = this.store.dispatch;

                let _d = mapDispatchToProps(this.store.dispatch);

                /*if (typeof mapDispatchToProps == 'object') {
                    for (var key in mapDispatchToProps) {
                        mapDispatchToProps[key]()
                    }
                }*/
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
