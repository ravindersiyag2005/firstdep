import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './Store'
import App from './App.jsx'






createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <ControlledComponent1 /> */}
  {/* <FormValidation /> */}
  {/* <HTTPFetchMethod /> */}
  {/* <Httptask /> */}
  {/* <HTTPAxiosMethod /> */}
  {/* <ParentRouting /> */}
  {/* <AxiosTask /> */}
  {/* <AxTask /> */}
 {/* <ParentRouting2 /> */}

 <Provider store={store}>
  <App />
 </Provider>
 
  </StrictMode>
)
