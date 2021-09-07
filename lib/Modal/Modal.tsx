import React from 'react';

export interface IProps {
  visible: boolean;
}

const Modal: React.FC<IProps> = (props: IProps) => {
  const { visible } = props;
  return visible ? (
    <>
      <div className="__e-ui-modal-mask"></div>
      <div className="__e-ui-modal">
        <div>Header</div>
        <div>Main</div>
        <div>Footer</div>
      </div>
    </>
  ) : null;
};

export default Modal;
