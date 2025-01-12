import React, { lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './App.scss';
import App from './App';

const Entry = lazy(() => import('./Components/Entry'));

const container = document.getElementById('root') as HTMLElement;

const root = createRoot(container);
root.render(<App />);

