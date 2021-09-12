import React from 'react';
import { Icon } from '../index';
import { useEvent, useFooter } from './hooks';

export interface IProps {
  visible: boolean;
  onCancel?: React.MouseEventHandler;
  onOk?: React.MouseEventHandler;
  maskClosable?: boolean;
  closable?: boolean;
  mask?: boolean;
  footer?: React.ReactNode[] | null;
}

const Modal: React.FC<IProps> = (props: IProps) => {
  const {
    visible,
    maskClosable = true,
    closable = true,
    mask = true,
    onCancel,
    onOk,
    footer,
  } = props;

  const { okHandle, cancelHandle } = useEvent(onOk, onCancel);
  const { footerNode } = useFooter({ okHandle, cancelHandle, footer });

  const maskClick = (e: React.MouseEvent) => {
    if (maskClosable) {
      cancelHandle(e);
    }
  };

  return visible ? (
    <>
      {mask && <div className="e-modal__mask" onClick={maskClick} />}
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
        {footerNode}
      </div>
    </>
  ) : null;
};

export default Modal;
