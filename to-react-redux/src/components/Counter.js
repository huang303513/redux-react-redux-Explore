import React, { Component } from "react";
import {add, minus} from "../store/actions/counter";
import { connect } from "../react-redux";

class Counter extends Component {
  render() {
    return (
      <div>
        <p>{`number: ${this.props.number}`}</p>
        <button
          onClick={() => {
            this.props.add(2);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.props.minus(2);
          }}
        >
          -
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  number: state.counter.number
});

const mapDispatchToProps = (dispatch, props) => ({
  add: num => {
    dispatch(add(num));
  },
  minus: num => {
    dispatch(minus(num));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
