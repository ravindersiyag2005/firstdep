import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ControlledComponent from './ContolledComponent'
import ControlledComponent1 from './ControlledComponent1'
import FormValidation from './FormValidation'
import Httptask from './HTTPMethod/httptask'
import HTTPAxiosMethod from './HTTPMethod/HTTPAxiosMethod'
import ParentRouting from './Routing/ParentRouting'
import AxiosTask from './HTTPMethod/AxiosTask'
import AxTask from './HTTPMethod/AxTask'
import ParentRouting2 from './Routing Example/ParentRouting2'
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
