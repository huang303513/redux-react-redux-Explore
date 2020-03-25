import React, { Component } from 'react';
import store from '../../store';

export default function connect(mapStateToProps, mapDispatchToProps) {
    return function wrapWithConnect(WrappedConnect) {
        return class Connect extends Component {
            constructor(props, context) {
                super(props, context);
                // this.store = context.store;
                this.store = store;
                this.state = mapStateToProps(this.store.getState());
                this.mappedDispatch = mapDispatchToProps(this.store.dispatch);
            }

            componentDidMount() {
                this.unsub = this.store.subscribe(() => {
                    const mappedState = mapStateToProps(this.store.getState());
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