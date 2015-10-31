
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import './Page1.scss';

import Mask from '../../components/Mask';
import Modal from '../../components/Modal';
import ModalHeader from '../../components/ModalHeader';
import ModalFooter from '../../components/ModalFooter';

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

  _CreateModal() {
    let target = document.createElement('div');
    document.body.appendChild(target);

    let close = () => {
      ReactDOM.unmountComponentAtNode(target);
      document.body.removeChild(target);
    }

    ReactDOM.render(
      <Modal visable={true} onMaskClick={close}>
        <ModalHeader title="标题" onClose={() => close()}></ModalHeader>
        <div className="ui-modal-body">
          这里是模态框内容部分
        </div>
        <ModalFooter>
          <button type="button" onClick={() => close()}>取消</button>
          <button type="button" onClick={() => {
            alert('你点击了选项一');
          }}>选项一</button>
          <button type="button" onClick={() => {
            alert('你点击了确定');
          }}>确定</button>
        </ModalFooter>
      </Modal>
    , target);
  }

  render() {
    return (
      <div>
        <p>This is Page1</p>
        <p><Link to="/Page2">=> Goto Page2</Link></p>
        <p><button type="button" onClick={() => this._CreateModal()}>动态创建PC端大模态框</button></p>
        <p><button type="button" onClick={() => this._onClickOpen('modal')}>模态框</button></p>
        <p><button type="button" onClick={() => this._onClickOpen('confirm')}>确认框</button></p>
        <p><button type="button" onClick={() => this._onClickOpen('alert')}>警告框</button></p>
        <p><button type="button" onClick={() => this._onClickOpen('mask')}>遮罩层</button></p>

        <Modal visable={this.state.modal}
          width={270}
          height={250}>
          <ModalHeader title="标题"></ModalHeader>
          <div className="ui-modal-body">
            我是对话框，禁止遮罩层关闭窗口，不显示右上角关闭按钮
          </div>
          <ModalFooter>
            <button type="button" onClick={() => this._onClickClose('modal')}>取消</button>
            <button type="button" onClick={() => {
              alert('你点击了选项一');
            }}>选项一</button>
            <button type="button" onClick={() => {
              alert('你点击了确定');
            }}>确定</button>
          </ModalFooter>
        </Modal>

        <Modal visable={this.state.confirm} 
          width={270}
          height={150}>
          <div className="ui-modal-body">
            <p style={{textAlign: 'center'}}>确定要删除吗？</p>
          </div>
          <ModalFooter>
            <button type="button" onClick={() => this._onClickClose('confirm')}>取消</button>
            <button type="button" onClick={() => {
              alert('你点击了确定');
            }}>确定</button>
          </ModalFooter>
        </Modal>

        <Modal visable={this.state.alert} 
          width={270}
          height={150}>
          <div className="ui-modal-body">
            <p style={{textAlign: 'center'}}>这是一个警告信息！</p>
          </div>
          <ModalFooter>
            <button type="button" onClick={() => this._onClickClose('alert')}>关闭</button>
          </ModalFooter>
        </Modal>

        <Mask visable={this.state.mask} onClose={() => this._onClickClose('mask')} />
      </div>
    );
  }
}

export default Page1;