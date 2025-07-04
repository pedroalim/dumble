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
import StudentsQuestion from "./pages/students/StudentsQuestion.tsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createUser" element={<CreateAccount />} />

      {/* Students Routes */}
      <Route path="/students/classes" element={<StudentsClasses />} />
      <Route path="/students/" element={<StudentsClasses />} />
      <Route path="/students/:classCode" element={<StudentsHome />} />
      <Route path="/students/:classCode/chatbot" element={<StudentsChatBot />} />
      <Route path="/students/:classCode/ranking" element={<StudentsRanking />} />
      <Route path="/students/:classCode/profile" element={<StudentsProfile />} />
      <Route path="/students/:classCode/questions/:questionCode" element={<StudentsQuestion />} />

      {/* Teachers Routes */}
      <Route path="/teachers/classes" element={<TeachersClasses />} />
      <Route path="/teachers/" element={<TeachersClasses />} />
      <Route path="/teachers/:classCode" element={<TeachersHome />} />
      <Route path="/teachers/:classCode/files" element={<TeachersFile />} />
      <Route path="/teachers/:classCode/ranking" element={<TeachersRanking />} />
      <Route path="/teachers/:classCode/profile" element={<TeachersProfile />} />

      {/* Catch-all route for 404 page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
