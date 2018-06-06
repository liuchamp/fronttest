import React, { Component } from 'react';
import { connect } from 'dva';

@connect(({ login, loading }) => ({
  login,
  submitting: loading.effects['login/login'],
}))
export default class Socket extends Component {
  render() {
    return <div>开始使用</div>;
  }
}
