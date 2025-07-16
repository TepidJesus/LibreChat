import 'regenerator-runtime/runtime';
import { createRoot } from 'react-dom/client';
import './locales/i18n';
import App from './App';
import './style.css';
import './mobile.css';
import { ApiErrorBoundaryProvider } from './hooks/ApiErrorBoundaryContext';
import 'katex/dist/katex.min.css';
import 'katex/dist/contrib/copy-tex.js';

// Inject primary color from env if set
const primaryColor = import.meta.env.VITE_PRIMARY_COLOR;
if (primaryColor) {
  const style = document.createElement('style');
  style.innerHTML = `:root { --primary: ${primaryColor}; }`;
  document.head.appendChild(style);
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ApiErrorBoundaryProvider>
    <App />
  </ApiErrorBoundaryProvider>,
);
