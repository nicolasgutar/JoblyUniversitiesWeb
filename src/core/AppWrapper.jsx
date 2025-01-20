import { StrictMode } from 'react'
import AppLayout from "./AppLayout.jsx";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@material-tailwind/react";

const AppWrapper = () => {
    return (
        <StrictMode>
            <ThemeProvider>
                <BrowserRouter>
                    <AppLayout />
                </BrowserRouter>
            </ThemeProvider>
        </StrictMode>
    )
}

export default AppWrapper;