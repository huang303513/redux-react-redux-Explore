import React, { Component } from 'react';
import { bindActionCreators } from '../../redux';
import { ReactReduxContext } from "./Context";
import shallowEqual from '../utils/shallowEqual';


const defaultMapStateToProps = state => ({});
const defaultMapDispatchToProps = dispatch => ({});

export default function connect(mapStateToProps = defaultMapStateToProps, mapDispatchToProps = defaultMapDispatchToProps) {
    return function wrapWithConnect(WrappedConnect) {
        return class Connect extends Component {
            static contextType = ReactReduxContext;
            constructor(props, context) {
                super(props, context);
                this.store = context.store;
                // this.state = mapStateToProps(this.store.getState());
                // this.mappedDispatch = mapDispatchToProps(this.store.dispatch);

                //源码中是将 store.getState() 给了 this.state
                this.state = mapStateToProps(this.store.getState(), this.props);
                if (typeof mapDispatchToProps === 'function') {
                    this.mappedDispatch = mapDispatchToProps(this.store.dispatch, this.props);
                } else {
                    //传递了一个 actionCreator 对象过来
                    this.mappedDispatch = bindActionCreators(mapDispatchToProps, this.store.dispatch);
                }
                
            }

            componentDidMount() {
                this.unsub = this.store.subscribe(() => {
                    const mappedState = mapStateToProps(this.store.getState(), this.props);
                    if (shallowEqual(this.state, mappedState)) {
                        return;
                    }
                    this.setState(mappedState);
                });
            }

            componentWillUnmount() {
                this.unsub();
            }

            render() {
                return (
                <WrappedConnect {...this.props} {...this.state} {...this.mappedDispatch} />
                );
            }
        }
    }
}