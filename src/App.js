
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Home from './components/Home';
import StudentForm from './components/StudentReg';
import About from './components/Student';
import StudentDetail from "./components/StudentDetail";
import Profile from './components/Profile';
import Notfound from './components/Utility/Notfound';
import Header from './components/Dasboard.jsx/Header';
import Privteroute from './components/PrivateRoute/Privteroute';
import Dashboard from './components/Dasboard.jsx/Dasboard';
import Teachers from './components/Teacher/Teachers';
import Student from './components/Student';
import TeacherDetails from './components/Teacher/TeacherDetails';
import TeacherReg from "./components/Teacher/TeacherReg";
import TeacherForm from "./components/Teacher/TeacherReg"
import Update from './components/Update';
import UpdateTeacher from './components/Teacher/UpdateTeacher';
import DasboardPage from './components/Dasboard.jsx/DasboardPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Notfound />} />

          <Route path='/' element={<Dashboard />}>
            <Route path="" element={<Privteroute><DasboardPage /></Privteroute>} />
            <Route path="student" element={<Privteroute><Student /></Privteroute>} />
            <Route path="/studentform" element={<Privteroute><StudentForm /></Privteroute>} />
            <Route path="/teacherDetails/:id" element={<Privteroute><TeacherDetails /></Privteroute>} />
             <Route path="/teacherform" element={<Privteroute><TeacherForm /></Privteroute>} />
            <Route path="/studentDetail/:id" element={<Privteroute><StudentDetail /></Privteroute>} />
            <Route path="profile" element={<Privteroute><Profile /></Privteroute>} />
            <Route path="header" element={<Privteroute><Header /></Privteroute>} />
            <Route path="/teachers" element={<Privteroute><Teachers /></Privteroute>} />
            <Route path="update" element={<Privteroute><Update /></Privteroute>} />
             <Route path="updateTeacher" element={<Privteroute><UpdateTeacher /></Privteroute>} />
            <Route path="teacherReg" element={<Privteroute><TeacherReg /></Privteroute>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
