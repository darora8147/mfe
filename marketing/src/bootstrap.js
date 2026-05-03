import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

// Mount function to start up the app
const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    );
}

// We are running this file in development and in isolation. Mount the app immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');
    if (devRoot) {
        mount(devRoot);
    }
}

// We are exporting the mount function so that the container can use it to mount the app
export { mount };