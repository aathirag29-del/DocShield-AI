import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import UploadPage from "./pages/UploadPage";
import DashboardPage from "./pages/DashboardPage";
import ReportPage from "./pages/ReportPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <UploadPage />
            </>
          }
        />

        <Route path="/dashboard" element={<DashboardPage />} />

        <Route path="/report" element={<ReportPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;