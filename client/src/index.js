import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';

// import App from './App.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <div>Hello World</div>
  </StrictMode>
);
