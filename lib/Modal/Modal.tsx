import React from 'react';
import ReactDOM from 'react-dom';
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
  zIndex?: number;
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
    zIndex,
  } = props;

  const { okHandle, cancelHandle } = useEvent(onOk, onCancel);
  const { footerNode } = useFooter({ okHandle, cancelHandle, footer });

  const maskClick = (e: React.MouseEvent) => {
    if (maskClosable) {
      cancelHandle(e);
    }
  };

  const style = { zIndex };

  return ReactDOM.createPortal(
    visible ? (
      <>
        {mask && <div className="e-modal__mask" style={style} onClick={maskClick} />}
        <div className="e-modal" style={style}>
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
    ) : null,
    document.body,
  );
};

export default Modal;
