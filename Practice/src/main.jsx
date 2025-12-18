import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { BrowserRouter } from "react-router-dom";
import ToggleContext from './context/ToggleContext.jsx';

createRoot(document.getElementById('root')).render(
    <ToggleContext>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ToggleContext>
);