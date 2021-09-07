import React, { useState } from 'react';
import './App.scss';
import { Button, Modal } from '../lib/index';

const App = (): React.ReactElement => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className="demo-container">
        <Button size="small" onClick={handleClick}>
          Show Modal
        </Button>
        <Button size="small" loading disabled>
          Button
        </Button>
        <Modal visible={visible}></Modal>
      </div>
    </>
  );
};

export default App;
