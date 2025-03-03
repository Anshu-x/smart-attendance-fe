import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/attendee/Dashboard";
import AttendanceHistory from "./pages/attendee/AttendanceHistory";
import ScanAttendance from "./pages/attendee/ScanAttendance";
import Profile from "./pages/attendee/Profile";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateEvent from "./pages/admin/CreateEvent";
import AttendanceRecords from "./pages/admin/AttendanceRecords";
import QRCodeDisplay from "./components/QRCodeDisplay";
import MyEvents from "./pages/admin/MyEvents";
import Settings from "./pages/admin/Settings";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Auth from "./pages/Auth";

function App() {
  return (
    <Router>
      <Routes>
        {/* Attendee Routes */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/history" element={<AttendanceHistory />} />
        <Route path="/scan-attendance" element={<ScanAttendance />} />
        <Route path="/profile" element={<Profile />} />

        {/* Admin Routes */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/attendance-records" element={<AttendanceRecords />} />
        <Route path="/qr-display" element={<QRCodeDisplay />} />
        <Route path="/my-events" element={<MyEvents />} />
        <Route path="/settings" element={<Settings />} />

        {/* Authentication Routes */}
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;