import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const firebaseConfig = {
    apiKey: 'AIzaSyCwZWagj7E9hEriK3dvDRe4jrulCN9qGAc',
    authDomain: 'my-chemo.firebaseapp.com',
    databaseURL: 'https://my-chemo-default-rtdb.firebaseio.com',
    projectId: 'my-chemo',
    storageBucket: 'my-chemo.appspot.com',
    messagingSenderId: '1010277893131',
    appId: '1:1010277893131:web:9d0341c0f10b8a56dcb30e',
    measurementId: 'G-KC996KPJ40',
}

const app = initializeApp(firebaseConfig)
getAnalytics(app)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
