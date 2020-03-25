import React, { Component } from 'react';
import { bindActionCreators } from "../redux";
import store from '../store';
import actions from '../store/actions/counter';

const bindCounter = bindActionCreators(actions, store.dispatch);

export default class Counter extends Component {
    constructor() {
        super();
        this.state = {
            number: store.getState().counter.number
        }
    }
    componentDidMount() {
        this.unsub = store.subscribe(()=>{
            this.setState({
                number: store.getState().counter.number
            })
        })
    }
    render() {
        return (
            <div>
                <button 
                    className="counter"
                    onClick={()=>{
                        // store.dispatch(actions.add(2));
                        bindCounter.add(2);
                    }}
                >
                    +
                </button>
                <span>{this.state.number}</span>
                <button 
                    className="counter"
                    onClick={()=>{
                        bindCounter.minus(3);
                    }}
                >
                    -
                </button>
            </div>
        )
    }
    componentWillUnmount() {
        this.unsub();
    }
}