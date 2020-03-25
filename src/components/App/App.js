import React from 'react';
import Form from '../Form/Form';

const App = () => (
  <div className="app-container">
    <Form
      cuisine={['Chinese', 'Japanese', 'Taiwanese']}
    />
  </div>
);

export default App;
