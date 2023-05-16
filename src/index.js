import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './PropsApp';
// import App from './oldApp';
// import App from './App'
// import App from './Hooks'
// import App from './Basicsthings'
// import App from'./EventHandling'
// import App from './AdvancedHooks'
// import App from './ArrayHooks'
// import App from './UseStateExamples'
// import App from './UseStateExample2'
// import App from './UseStateExample3';
// import Usehook from './UseEffectHook';
import reportWebVitals from './reportWebVitals';
import App from './ContextApi';
// import App from './useContextApi'
import { UserContextProvider } from './userContextProvider';
// import App from './useEffectFetchingCocktail';
// import App from './useEffectFetching';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
  <App/>
  </UserContextProvider>)
  // <React.StrictMode>
    {/* oldApp */}
    {/* propsapp */}
    {/* Eventsapp */}
    {/* Hooksapp */}
    {/* BasicThings app*/}
    {/* AdvancedHooks */}
    {/* ArrayHooks*/}
    {/* usestateexapls */}
    {/* <Usehook/> */}
  
    
  {/* </React.StrictMode> */}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
