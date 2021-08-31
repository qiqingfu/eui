import React from 'react';
import './App.scss';
import { Button } from '../lib/index';

const App = (): React.ReactElement => {
  return (
    <>
      <div className="demo-container">
        <Button size="small">Button</Button>
        <Button size="small" loading disabled>
          Button
        </Button>
      </div>
    </>
  );
};

export default App;
