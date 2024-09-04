import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from './redux/store.js'
import {Provider} from 'react-redux'

import {createRoutesFromElements,Route} from 'react-router';
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Register from "./pages/auth/Register.jsx";
import Login from "./pages/auth/Login.jsx";
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>} >
            <Route  path="signup" element={<Register/>}/>
            <Route  path="login" element={<Login/>}/>
        </Route>
    )
)

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
