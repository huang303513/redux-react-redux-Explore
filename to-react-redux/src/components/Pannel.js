import React, { Component } from "react";
import actions from "../store/actions/theme";
import { connect } from "../react-redux";
class Pannel extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div id="header" style={this.props.color}>
          自己实现Redux
        </div>
        <div id="main">
          <div id="content" style={this.props.color}>
            大家好，我是隔壁老黄
          </div>
          <button
            className="change-theme"
            id="to-blue"
            onClick={() => {
              this.props.clickBlue("rgb(0, 51, 254)");
            }}
          >
            蓝色
          </button>
          <button
            className="change-theme"
            id="to-pink"
            onClick={() => {
              this.props.clickPink("rgb(247, 109, 132)");
            }}
          >
            粉色
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state, props) => ({
  color: state.theme
});

const mapDispatchToProps = (dispatch, props) => ({
  clickBlue: color => {
    dispatch(actions.changeColor(color));
  },
  clickPink: color => {
    dispatch(actions.changeColor(color));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Pannel);
