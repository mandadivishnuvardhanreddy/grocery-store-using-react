import React from 'react' 
import ReactDOM from 'react-dom/client'
import App from './app'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

//const header=<h1>this is my first project</h1>
//ReactDOM.render(header,document.getElementById('root'))
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)