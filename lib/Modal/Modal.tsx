import React from 'react';
import { Icon, Button } from '../index';
import { Type } from '../util/index';

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
    if (onCancel && Type.Function(onCancel)) {
      onCancel(e);
    }
  };

  const okHandle = (e: React.MouseEvent) => {
    if (onOk && Type.Function(onOk)) {
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
      <div className="e-modal__mask" onClick={maskClick}></div>
      <div className="e-modal">
        <div className="e-modal__header">
          Header
          {closable && (
            <span className="e-modal__close" onClick={cancelHandle}>
              <Icon name="close" />
            </span>
          )}
        </div>
        <div className="e-modal__main">Main</div>
        <div className="e-modal__footer">
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
