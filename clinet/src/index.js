import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
root.render(<RouterProvider router={router} />);

// ReactDOM.hydrate(<App />, document.getElementById('root'));
