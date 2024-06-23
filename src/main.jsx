import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import { Provider } from 'react-redux'
import { store } from './Redux/store.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyState from './Context/MyState.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyState>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
      <ToastContainer />
    </MyState>
  </React.StrictMode>,
)
