import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import IncContext from './component/ShowMoreProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <IncContext.Provider>
    </IncContext.Provider> */}
  </React.StrictMode>,
)
