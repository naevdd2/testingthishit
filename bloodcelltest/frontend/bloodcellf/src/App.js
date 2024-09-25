import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('intro');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="app">
      <Header activeSection={activeSection} onSectionChange={handleSectionChange} />
      <div className="content">
        {activeSection === 'intro' && <h1>Welcome to the Blood Donation App</h1>}
        {activeSection === 'donor' && <Form formType="donor" />}
        {activeSection === 'patient' && <Form formType="patient" />}
      </div>
    </div>
  );
}

export default App;
