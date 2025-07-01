import { Routes, Route } from "react-router-dom";
import Login from "./pages/not-authenticated/Login.tsx";
import CreateAccount from "./pages/not-authenticated/CreateAccount.tsx";
import TeachersHome from "./pages/teachers/TeachersHome.tsx";
import StudentsClasses from "./pages/students/StudentsClasses.tsx";
import StudentsHome from "./pages/students/StudentsHome.tsx";
import StudentsChatBot from "./pages/students/StudentsChatBot.tsx";
import StudentsProfile from "./pages/students/StudentsProfile.tsx";
import StudentsRanking from "./pages/students/StudentsRanking.tsx";
import NotFound from "./pages/not-found/NotFound.tsx"; 
import TeachersFile from "./pages/teachers/TeachersFile.tsx";
import TeachersRanking from "./pages/teachers/TeachersRanking.tsx";
import TeachersProfile from "./pages/teachers/TeachersProfile.tsx";
import TeachersClasses from "./pages/teachers/TeachersClasses.tsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createUser" element={<CreateAccount />} />

      {/* Students Routes */}
      <Route path="/students/" element={<StudentsHome />} />
      <Route path="/students/classes" element={<StudentsClasses />} />
      <Route path="/students/chatbot" element={<StudentsChatBot />} />
      <Route path="/students/profile" element={<StudentsProfile />} />
      <Route path="/students/ranking" element={<StudentsRanking />} />

      {/* Teachers Routes */}
      <Route path="/teachers/" element={<TeachersHome />} />
      <Route path="/teachers/classes" element={<TeachersClasses />} />
      <Route path="/teachers/files" element={<TeachersFile />} /> 
      <Route path="/teachers/profile" element={<TeachersProfile />} />
      <Route path="/teachers/ranking" element={<TeachersRanking />} />

      {/* Catch-all route for 404 page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
