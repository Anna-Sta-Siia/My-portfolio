import { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, useSelector } from 'react-redux';
import { store } from './store';
import App from './App';
import './index.css';

// Composant Root qui injecte la classe du thème sur <body>
function Root() {
  const theme = useSelector(state => state.ui.theme);

  useEffect(() => {
    // Option A : on écrase toute la class
    document.body.className = theme;
    // Option B (préférable si tu as plusieurs classes sur body) :
    // document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return <App />;
}

// Création et montage du root React
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <Provider store={store}>
    <Root />
  </Provider>
);
