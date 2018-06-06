import React, { Component } from 'react';
import { connect } from 'dva';
import Websocket from 'react-websocket';

@connect(({ login, loading }) => ({
  login,
  submitting: loading.effects['login/login'],
}))
export default class Socket extends Component {
  render() {
    return (
      <div>
        <Websocket
          url="ws://localhost:8888/live/product/12345/"
          onMessage={this.handleData.bind(this)}
        />
      </div>
    );
  }
}
