import React from 'react';

export interface IProps {
  visible: boolean;
  onCancel?: React.MouseEventHandler;
  maskClosable?: boolean;
}

const Modal: React.FC<IProps> = (props: IProps) => {
  const { visible, maskClosable = true, onCancel } = props;

  const cancelHandle = (e: React.MouseEvent) => {
    if (onCancel && typeof onCancel === 'function') {
      onCancel(e);
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
        <div>Header</div>
        <div>Main</div>
        <div>Footer</div>
      </div>
    </>
  ) : null;
};

export default Modal;
