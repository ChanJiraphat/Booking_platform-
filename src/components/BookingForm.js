import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Confirmation from "./components/Confirmation";

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/booking" element={<Booking />} />
                        <Route path="/confirmation" element={<Confirmation />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;