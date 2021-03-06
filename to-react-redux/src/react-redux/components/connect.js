import React, { Component } from "react";
import { bindActionCreators } from "../../redux";
import { ReactReduxContext } from "./Context";
import shallowEqual from "../utils/shallowEqual";

/**
 * mapStateToProps 缺省时，不关联state
 * mapDispatchToProps 缺省时，设置其默认值为 dispatch => ({dispatch})，将`store.dispatch` 方法作为属性传递给组件
 */

const defaultMapStateToProps = state => ({});
const defaultMapDispatchToProps = dispatch => ({ dispatch });

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default function connect(
  mapStateToProps = defaultMapStateToProps,
  mapDispatchToProps = defaultMapDispatchToProps
) {
  return function wrapWithConnect(WrappedComponent) {
    return class Connect extends Component {
      static contextType = ReactReduxContext;
      static displayName = `Connect(${getDisplayName(WrappedComponent)})`;
      constructor(props, context) {
        super(props, context);
        this.store = context.store;
        //源码中是将 store.getState() 给了 this.state
        this.state = mapStateToProps(this.store.getState(), this.props);
        if (typeof mapDispatchToProps === "function") {
          this.mappedDispatch = mapDispatchToProps(
            this.store.dispatch,
            this.props
          );
        } else {
          //传递了一个 actionCreator 对象过来
          this.mappedDispatch = bindActionCreators(
            mapDispatchToProps,
            this.store.dispatch
          );
        }
      }

      componentDidMount() {
        this.unsub = this.store.subscribe(() => {
          const mappedState = mapStateToProps(
            this.store.getState(),
            this.props
          );
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
          <WrappedComponent
            {...this.props}
            {...this.state}
            {...this.mappedDispatch}
          />
        );
      }
    };
  };
}
