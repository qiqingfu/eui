import React from 'react';
import { Icon, Button } from '../index';

export interface IProps {
  visible: boolean;
  onCancel?: React.MouseEventHandler;
  onOk?: React.MouseEventHandler;
  maskClosable?: boolean;
  closable?: boolean;
}

const Modal: React.FC<IProps> = (props: IProps) => {
  const { visible, maskClosable = true, closable = true, onCancel, onOk } = props;

  const cancelHandle = (e: React.MouseEvent) => {
    // 待优化
    if (onCancel && typeof onCancel === 'function') {
      onCancel(e);
    }
  };

  // 待优化 代码太多重复
  const okHandle = (e: React.MouseEvent) => {
    if (onOk && typeof onOk === 'function') {
      onOk(e);
    }
  };

  const maskClick = (e: React.MouseEvent) => {
    if (maskClosable) {
      cancelHandle(e);
    }
  };

  return visible ? (
    <>
      <div className="__e-ui-modal-mask" onClick={maskClick}></div>
      <div className="__e-ui-modal">
        <div className="__e-ui-modal__header">
          Header
          {closable && (
            <span className="__e-ui-modal__close" onClick={cancelHandle}>
              <Icon name="close" />
            </span>
          )}
        </div>
        <div className="__e-ui-modal__main">Main</div>
        <div className="__e-ui-modal__footer">
          <Button size="small" onClick={cancelHandle}>
            取消
          </Button>
          <Button size="small" onClick={okHandle}>
            确认
          </Button>
        </div>
      </div>
    </>
  ) : null;
};

export default Modal;
