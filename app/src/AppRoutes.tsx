import { Routes, Route } from "react-router-dom";
import Login from "./pages/not-authenticated/Login.tsx";
import CreateAccount from "./pages/not-authenticated/CreateAccount.tsx";
import TeachersHome from "./pages/teachers/TeachersHome.tsx";
import StudentsClasses from "./pages/students/StudentsClasses.tsx";
import StudentsHome from "./pages/students/StudentsHome.tsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create" element={<CreateAccount />} />

      {/* Students Routes */}
      <Route path="/students/" element={<StudentsHome />} />
      <Route path="/students/classes" element={<StudentsClasses />} />

      {/* Teachers Routes */}
      <Route path="/teachers/" element={<TeachersHome />} />
    </Routes>
  );
}
