import React, { useState } from 'react';
import { Building2, Globe } from 'lucide-react';
import './App.css';

const App = () => {
  const [selectedKnowledge, setSelectedKnowledge] = useState('company');

  return (
    <div className="app-container">
      <div className="knowledge-toggle">
        <div className="knowledge-toggle__container">
          <button
            onClick={() => setSelectedKnowledge('company')}
            className={`knowledge-toggle__button ${
              selectedKnowledge === 'company' ? 'knowledge-toggle__button--active' : ''
            }`}
          >
            <Building2 className="knowledge-toggle__icon" />
            <span className="knowledge-toggle__label">Company knowledge</span>
          </button>

          <button
            onClick={() => setSelectedKnowledge('general')}
            className={`knowledge-toggle__button ${
              selectedKnowledge === 'general' ? 'knowledge-toggle__button--active' : ''
            }`}
          >
            <Globe className="knowledge-toggle__icon" />
            <span className="knowledge-toggle__label">General knowledge</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
