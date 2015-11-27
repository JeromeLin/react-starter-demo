
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import './Page1.scss';

import {
  Mask,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert,
  Confirm,
  Toast,
  Loading,
} from '../../components';

class Page1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal     : false,
      confirm   : false,
      alert     : false,
      mask      : false,
      toast     : false,
      loading   : false,
    };
  }

  _onClickOpen(component) {
    this.setState({
      [`${ component }`]: true
    });
  }

  _onClickClose(component) {
    this.setState({
      [`${ component }`]: false
    });
  }

  render() {
    return (
      <div>
        <p>This is Page1</p>
        <p><Link to="/page2">=> Goto Page2</Link></p>
        <p><button type="button" onClick={() => this._onClickOpen('mask')}>遮罩层</button></p>
        <p><button type="button" onClick={() => this._onClickOpen('modal')}>模态框</button></p>
        <p><button type="button" onClick={() => this._onClickOpen('confirm')}>确认框</button></p>
        <p><button type="button" onClick={() => this._onClickOpen('alert')}>警告框</button></p>
        <p><button type="button" onClick={() => this._onClickOpen('toast')}>提示信息</button></p>
        <p><button type="button" onClick={() => this._onClickOpen('loading')}>加载中</button></p>

        { this.state.mask ?
          <Mask onClose={() => this._onClickClose('mask')} />
        : null }

        { this.state.modal ?
          <Modal width={270} onMaskClick={() => this._onClickClose('modal')}>
            <ModalHeader title="标题" onClose={() => this._onClickClose('modal')}></ModalHeader>
            <ModalBody height={1000}>
              我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮
            </ModalBody>
            <ModalFooter>
              <button type="button" onClick={() => this._onClickClose('modal')}>取消</button>
              <button type="button" onClick={() => this._onClickOpen('alert')}>选项一</button>
              <button type="button" onClick={() => { alert('你点击了确定') }}>确定</button>
            </ModalFooter>
          </Modal>
        : null }

        { this.state.confirm ?
          <Confirm
            message="确定要删除吗？"
            onOK={() => this._onClickOpen('alert')}
            onCancel={() => this._onClickClose('confirm')}>
          </Confirm>
        : null }

        { this.state.alert ?
          <Alert message="这是一个警告框！" onClose={() => this._onClickClose('alert')} />
        : null }

        { this.state.toast ?
          <Toast message="这是一个提示信息！" onMaskClick={() => this._onClickClose('toast')} />
        : null }

        { this.state.loading ?
          <Loading message="加载中" />
        : null }

      </div>
    );
  }
}

export default Page1;