import React, { useState } from 'react';
import './App.scss';
import { Button, Modal } from '../lib/index';

const App = (): React.ReactElement => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  const okHandle = () => {
    console.log('ok');
  };

  const modalCancel = () => {
    setVisible(false);
  };

  const clickHandle = () => {
    Modal.confirm();
  };

  return (
    <>
      <div className="demo-container">
        <Button size="small" onClick={handleClick}>
          Show Modal
        </Button>
        <Button size="small" type="primary" onClick={clickHandle}>
          Button
        </Button>
        <p className="z-index">zIndex 10</p>
        <Modal visible={visible} onCancel={modalCancel} onOk={okHandle}>
          Content
        </Modal>
      </div>
    </>
  );
};

export default App;
