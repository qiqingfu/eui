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

  return (
    <>
      <div className="demo-container">
        <Button size="small" onClick={handleClick}>
          Show Modal
        </Button>
        <Button size="small" type="primary">
          Button
        </Button>
        <Modal visible={visible} onCancel={modalCancel} onOk={okHandle}></Modal>
      </div>
    </>
  );
};

export default App;
