// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "./ui/provider.tsx";
import { HashRouter, Route, Routes } from "react-router-dom";

import { Menu } from './ui/pages/menu.tsx';
import { Ref } from './ui/pages/ref.tsx';

createRoot(document.getElementById("root")!).render(
    <HashRouter>
        <Provider>
            <Routes>
                <Route index element={<Menu />} />
                <Route path="ref" element={<Ref />} />
            </Routes>
        </Provider>
    </HashRouter>
);
