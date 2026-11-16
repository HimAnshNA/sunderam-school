
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Admissions from "./pages/Admissions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public website */}
        <Route path="/" element={<Home />} />

        {/* Unified login */}
        <Route path="/login" element={<Login />} />

        {/* Future dashboards */}
        <Route path="/student/dashboard" element={<div>Student Dashboard Coming Soon</div>} />
        <Route path="/parent/dashboard" element={<div>Parent Dashboard Coming Soon</div>} />
        <Route path="/teacher/dashboard" element={<div>Teacher Dashboard Coming Soon</div>} />
        <Route path="/admin/dashboard" element={<div>Admin Dashboard Coming Soon</div>} />
<Route path="/admissions" element={<Admissions />} />
        {/* Unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
