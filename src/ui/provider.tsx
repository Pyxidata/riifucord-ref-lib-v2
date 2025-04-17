"use client";

import { AuthProvider } from '../context/authContext'
import ScrollToTop from "./util/scrollToTop";
import defaultColor from './colors.json';

interface ProviderProps {
    children: React.ReactNode,
}

export function Provider(props: ProviderProps) {
    return (
        <AuthProvider>
            <div className="flex flex-col"
                style={{ backgroundColor: defaultColor.bbg, color: defaultColor.primary }}> 
                <ScrollToTop />
                {props.children}
            </div>
        </AuthProvider>
    );
}
