import ReactDOM from 'react-dom/client';
import { UIProvider } from './context/UIContext';
import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UIProvider>
    <App />
  </UIProvider>
);
