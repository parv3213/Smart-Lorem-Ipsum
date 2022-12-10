import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TextGeneratorContextProvider } from './context/TextGeneratorContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <TextGeneratorContextProvider>
      <App />
    </TextGeneratorContextProvider>
  </React.StrictMode>,
);
