import React, { useState } from 'react';
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
  showHeader?: boolean;
  title?: React.ReactNode;
  children?: React.ReactNode | undefined;
}

/**
 * 通过 API 调用 Modal 时需要传递的参数类型
 */
interface IPropsWithMethod extends Pick<IProps, 'onCancel' | 'onOk'> {
  content: string;
}

interface IConfirmReturn {
  close: () => void;
}

interface IMethods<T> {
  confirm: (props: T) => IConfirmReturn;
}

const Modal: React.FC<IProps> & IMethods<IPropsWithMethod> = (props: IProps) => {
  const {
    visible,
    maskClosable = true,
    closable = true,
    mask = true,
    onCancel,
    onOk,
    footer,
    showHeader = true,
    title = 'Header',
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
          {showHeader && (
            <div className="e-modal__header">
              <span className="e-modal__title">{title}</span>
              {closable && (
                <span className="e-modal__close" onClick={cancelHandle}>
                  <Icon name="close" />
                </span>
              )}
            </div>
          )}
          <div className="e-modal__main">{props.children}</div>
          {footerNode}
        </div>
      </>
    ) : null,
    document.body,
  );
};

/**
 * https://zh-hans.reactjs.org/docs/react-dom.html#render
 * ReactDOM.render 在提供的 container 里渲染一个 React 元素
 */
Modal.confirm = function (props) {
  const rootModal = document.createElement('div');
  document.body.appendChild(rootModal);
  let visible = true;

  const { content, onOk, onCancel } = props;

  function render() {
    ReactDOM.render(
      React.cloneElement(
        <Modal visible={visible} onOk={onOk} onCancel={onCancel}>
          {content}
        </Modal>,
      ),
      rootModal,
    );
  }

  render();

  return {
    close() {
      visible = false;
      rootModal.remove();
      render();
    },
  };
};

export default Modal;
