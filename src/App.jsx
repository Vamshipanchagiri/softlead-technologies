import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import HomePage from "./pages/HomePage.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import CareersPage from "./pages/CareersPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-offwhite font-sans text-charcoal">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/:serviceId" element={<ServicePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<CareersPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
