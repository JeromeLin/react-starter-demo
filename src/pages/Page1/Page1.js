
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import './Page1.scss';

import Mask from '../../components/Mask';
import Modal from '../../components/Modal';
import ModalHeader from '../../components/ModalHeader';
import ModalBody from '../../components/ModalBody';
import ModalFooter from '../../components/ModalFooter';
import Alert from '../../components/Alert';

class Page1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal   : false,
      confirm : false,
      alert   : false,
      mask    : false,
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
        <p><button type="button" onClick={() => this._onClickOpen('modal')}>模态框</button></p>
        <p><button type="button" onClick={() => this._onClickOpen('confirm')}>确认框</button></p>
        <p><button type="button" onClick={() => this._onClickOpen('alert')}>警告框</button></p>
        <p><button type="button" onClick={() => this._onClickOpen('mask')}>遮罩层</button></p>

        { this.state.modal ?
          <Modal width={270} onMaskClick={() => this._onClickClose('modal')}>
            <ModalHeader title="标题" onClose={() => this._onClickClose('modal')}></ModalHeader>
            <ModalBody height={1000}>
              我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮
            </ModalBody>
            <ModalFooter>
              <button type="button" onClick={() => this._onClickClose('modal')}>取消</button>
              <button type="button" onClick={() => this._onClickOpen('alert')}>选项一</button>
              <button type="button" onClick={() => {
              }}>确定</button>
            </ModalFooter>
          </Modal>
        : null }

        { this.state.confirm ?
          <Modal width={270}>
            <ModalBody>
              <p style={{textAlign: 'center'}}>确定要删除吗？</p>
            </ModalBody>
            <ModalFooter>
              <button type="button" onClick={() => this._onClickClose('confirm')}>取消</button>
              <button type="button" onClick={() => this._onClickOpen('alert')}>确定</button>
            </ModalFooter>
          </Modal>
        : null }

        { this.state.alert ?
          <Alert message="这是一个警告框！" onClose={() => this._onClickClose('alert')} />
        : null }

        { this.state.mask ?
          <Mask onClose={() => this._onClickClose('mask')} />
        : null }

      </div>
    );
  }
}

export default Page1;