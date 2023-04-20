import React from "react";
import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/styles'
import { createTheme } from '@mui/material'
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
const App = () => {
    const theme = createTheme();
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Container maxWidth="lg">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/auth" element={<Auth />} />
                    </Routes>
                </Container>
            </BrowserRouter>
        </ThemeProvider>

    )
}
export default App;