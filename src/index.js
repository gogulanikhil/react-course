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
import App from './useRef/useRefex2';
// import App from './ContextApi';
// import App from './useContextApi'
// import { UserContextProvider } from './userContextProvider';
// import ParentComponent from './ContextApi';
// import ParentComponent from './example';
// import Final from './useReducer/useReducerOne';
// import App from './useReducer/useReducerOne';
// import App from './useReducer/useReducerTwo'
// import App from './useEffectFetchingCocktail';
// import App from './useEffectFetching';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <UserContextProvider>
//   <ParentComponent/>
//   </UserContextProvider>)
root.render(
<React.StrictMode>
    {/* oldApp */}
    {/* propsapp */}
    {/* Eventsapp */}
    {/* Hooksapp */}
    {/* BasicThings app*/}
    {/* AdvancedHooks */}
    {/* ArrayHooks*/}
    {/* usestateexapls */}
    {/* <Usehook/> */}
    <App/>
  </React.StrictMode>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// =======================================================
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './useReducer/useReducerOne';

// // Import your components
// // import OldApp from './OldApp';
// // import PropsApp from './PropsApp';
// // import EventsApp from './EventsApp';
// // import HooksApp from './HooksApp';
// // import BasicThingsApp from './BasicThingsApp';
// // import AdvancedHooksApp from './AdvancedHooksApp';
// // import ArrayHooksApp from './ArrayHooksApp';
// // import UseStateExamplesApp from './UseStateExamplesApp';
// // import UseHook from './UseHook';
// // import App from './App';

// // Render the components
// ReactDOM.render(
//   <React.StrictMode>
//     {/* <OldApp /> */}
//     {/* <PropsApp /> */}
//     {/* <EventsApp /> */}
//     {/* <HooksApp /> */}
//     {/* <BasicThingsApp /> */}
//     {/* <AdvancedHooksApp /> */}
//     {/* <ArrayHooksApp /> */}
//     {/* <UseStateExamplesApp /> */}
//     {/* <UseHook /> */}
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
