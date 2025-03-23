// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "./ui/provider.tsx";
import { BrowserRouter, Route, Routes } from "react-router";

import { Menu } from './ui/pages/menu.tsx';
import { Ref } from './ui/pages/ref.tsx';

createRoot(document.getElementById("root")!).render(
    <BrowserRouter basename="/riifucord-ref-lib-v2">
        <Provider>
            <Routes>
                <Route index path="/" element={<Menu />}/>
                <Route path="/ref/" element={<Ref />} /> 
            </Routes>
        </Provider>
    </BrowserRouter>
);
