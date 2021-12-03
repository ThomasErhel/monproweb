/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom';
import './index.scss'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getPerformance } from 'firebase/performance'
import ReactBreakpoints from 'react-breakpoints'

const breakpoints = {
  mobile: 320,
  mobileLandscape: 480,
  tablet: 768,
  tabletLandscape: 1024,
  desktop: 1200,
  desktopLarge: 1500,
  desktopWide: 1920,
}

const firebaseConfig = {
    apiKey: 'AIzaSyBcxpWbGYVFvVJM4NZmG8Uk-qKjkbfhBco',
    authDomain: 'mon-pro-web.firebaseapp.com',
    databaseURL: 'https://mon-pro-web-default-rtdb.firebaseio.com',
    projectId: 'mon-pro-web',
    storageBucket: 'mon-pro-web.appspot.com',
    messagingSenderId: '525128482932',
    appId: '1:525128482932:web:eb3de96c568a2ce87b5121',
    measurementId: 'G-4GV65QSVDM',
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const perf = getPerformance(app)

ReactDOM.render(
  <React.StrictMode>
    <ReactBreakpoints breakpoints={breakpoints}>
      <App />
    </ReactBreakpoints>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register()
reportWebVitals()
