import React, { Component } from "react";
import "./index.css";
import TimerComp from './TimerComp';
export default class Timer extends Component {
  render() {
    const {initial} = this.props;
    return <TimerComp initial={initial}/>;
  }
}

