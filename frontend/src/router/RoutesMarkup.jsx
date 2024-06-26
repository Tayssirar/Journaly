import React from 'react';
import { Routes, Route } from 'react-router-dom';

//css
//Dashboard
import AdminDashboard from '../pages/admin/AdminDashboard';
import AssistantDashboard from '../pages/assistant/AssistantDashboard';
import HeadmasterDashboard from '../pages/headmaster/HeadmasterDashboard';
import InspectorDashboard from '../pages/inspector/InspectorDashboard';
import TeacherDashboard from '../pages/teacher/TeacherDashboard';
//Error
import Error404 from '../pages/error/Error404';
import Error403 from '../pages/error/Error403';
import Error400 from '../pages/error/Error400';
import Error500 from '../pages/error/Error500';
import Error503 from '../pages/error/Error503';
import LockScreen from '../pages/error/LockScreen';
//Layout
import MainLayout from './MainLayout';
import ScrollToTop from '../layout/scrollToTop';
// Teacher
import AllTeachers from '../pages/teacher/AllTeachers';
import AddTeacher from '../pages/teacher/AddTeacher';
import UpdateTeacher from '../pages/teacher/UpdateTeacher';
import  TeacherProfile from '../pages/teacher/TeacherProfile';
import  UpdateTeacherProfile from '../pages/teacher/UpdateTeacherProfile';
import DeleteTeacher from '../pages/teacher/DeleteTeacher';

//Student
import AllStudents from '../pages/student/AllStudents';
import AddStudent from '../pages/student/AddStudent';
import UpdateStudent from '../pages/student/UpdateStudent';
import  StudentProfile from '../pages/student/StudentProfile';
import StudentPerformance from '../pages/student/StudentPerformance';
//Inspector
import AllInspectors from '../pages/inspector/AllInspectors';
import AddInspector from '../pages/inspector/AddInspector';
import UpdateInspector from '../pages/inspector/UpdateInspector';
import  InspectorProfile from '../pages/inspector/InspectorProfile';
import UpdateInspectorProfile from '../pages/inspector/UpdateInspectorProfile';
import DeleteInspector from '../pages/inspector/DeleteInspector';

//Assistant
import AllAssistants from '../pages/assistant/AllAssistants';
import AddAssistant from '../pages/assistant/AddAssistant';
import UpdateAssistant from '../pages/assistant/UpdateAssistant';
import  AssistantProfile from '../pages/assistant/AssistantProfile';
import UpdateAssistantProfile from '../pages/assistant/UpdateAssistantProfile';
import DeleteAssistant from '../pages/assistant/DeleteAssistant';
//Headmaster
import AllHeadmasters from '../pages/headmaster/AllHeadmasters';
import AddHeadmaster from '../pages/headmaster/AddHeadmaster';
import UpdateHeadmaster from '../pages/headmaster/UpdateHeadmaster';
import  HeadmasterProfile from '../pages/headmaster/HeadmasterProfile';
import UpdateHeadmasterProfile from '../pages/headmaster/UpdateHeadmasterProfile';
import DeleteHeadmaster from '../pages/headmaster/DeleteHeadmaster';
//School
import AllSchools from '../pages/school/AllSchools';
import AddSchool from '../pages/school/AddSchool';
import UpdateSchool from '../pages/school/UpdateSchool';
import  SchoolProfile from '../pages/school/SchoolProfile';
//Planification
import AllPlan from '../pages/planification/AllPlan';
import AddPlan from '../pages/planification/AddPlan';
import UpdatePlan from '../pages/planification/UpdatePlan';
//Journal
import AddJournal from '../pages/Journal/AddJournal';
import AllJournal from '../pages/Journal/AllJournal';
//Events
import AllEvents from '../pages/event/AllEvents';
import AddEvent from '../pages/event/AddEvent';
import UpdateEvent from '../pages/event/UpdateEvent';
//Calendar
import Calendar from '../pages/calendar/Calendar';
import Home from '../pages/home';
import Login from '../pages/authentication/Login';
import ChooseUser from '../pages/authentication/chooseUser';
import Register from '../pages/authentication/Registration';
//Note
import AllResults from '../pages/note/AllResults';
import AddNote from '../pages/note/AddNote';
import ErrorClassification from '../components/ErrorClassification';
//Exams
import AllExams from '../pages/exams/AllExams';
import AddExam from '../pages/exams/AddExam';
import Dicte from '../components/Exam/examTemplate/Dicte';
import Lecture from '../components/Exam//examTemplate/Lecture';
import Langue from '../components/Exam/examTemplate/Langue';
import Ecriture from '../components/Exam/examTemplate/Ecriture';
import Production from '../components/Exam/examTemplate/Production';
//program
import AllProgram from '../pages/program/AllProgram';
import AddProgram from '../pages/program/AddProgram';
//rapport
import AllRapports from '../pages/rapport/AllRaports';
import AddRapportVisite from '../pages/rapport/AddRapportVisite';
import UpdateRapport from '../pages/rapport/UpdateRapport';
import DeleteRapport from '../pages/rapport/DeleteRapport';


const RoutesMarkup = () => {
  const allRoutes = [
    //Dashboard
    { url: "/AdminDashboard", component: AdminDashboard },
    { url: "/AssistantDashboard", component: AssistantDashboard },
    { url: "/HeadmasterDashboard", component: HeadmasterDashboard },
    { url: "/InspectorDashboard", component: InspectorDashboard },
    { url: "/TeacherDashboard", component: TeacherDashboard },
    //Teacher
    { url: "/AllTeachers", component: AllTeachers },
    { url: "/AddTeacher", component: AddTeacher },
    { url: "/UpdateTeacher/:id", component: UpdateTeacher },
    { url: "/TeacherProfile", component:  TeacherProfile },
    { url: "/UpdateTeacherProfile", component: UpdateTeacherProfile },
    {url:"/DeleteTeacher", component:DeleteTeacher },
    //Headmaster
    { url: "/AllHeadmasters", component: AllHeadmasters },
    { url: "/AddHeadmaster", component: AddHeadmaster },
    { url: "/UpdateHeadmaster/:id", component: UpdateHeadmaster },
    { url: "/HeadmasterProfile", component:  HeadmasterProfile },
    { url: "/UpdateHeadmasterProfile", component: UpdateHeadmasterProfile },
    {url:"/DeleteHeadmaster", component:DeleteHeadmaster },
    //Inspector
    { url: "/AllInspectors", component: AllInspectors },
    { url: "/AddInspector", component: AddInspector },
    { url: "/UpdateInspector/:id", component: UpdateInspector },
    { url: "/InspectorProfile", component:  InspectorProfile },
    { url: "/UpdateInspectorProfile", component: UpdateInspectorProfile },
    {url:"/DeleteInspector", component:DeleteInspector },
    //Student
    { url: "/AllStudents", component: AllStudents },
    { url: "/AddStudent", component: AddStudent },
    { url: "/UpdateStudent/:id", component: UpdateStudent },
    { url: "/StudentProfile", component:  StudentProfile },
    {url:"/Delete", component:DeleteRapport },
    {url:"/StudentPerformance", component: StudentPerformance},
    //Assistant
    { url: "/AllAssistants", component: AllAssistants },
    { url: "/AddAssistant", component: AddAssistant },
    { url: "/UpdateAssistant/:id", component: UpdateAssistant },
    { url: "/AssistantProfile", component:  AssistantProfile },
    { url: "/UpdateAssistantProfile", component: UpdateAssistantProfile },
    {url:"/DeleteAssistant", component:DeleteAssistant },
    //School
    { url: "/AllSchools", component: AllSchools },
    { url: "/AddSchool", component: AddSchool },
    { url: "/UpdateSchool/:id", component: UpdateSchool },
    { url: "/SchoolProfile", component:  SchoolProfile },
    {url:"/Delete", component:DeleteRapport },
    //Planification
    { url: "/AllPlan", component: AllPlan},
    {url: "/AddPlan", component: AddPlan},
    {url:"/Delete", component:DeleteRapport },
    {url:"/UpdatePlan/:id", component: UpdatePlan},
    //Journal
    {url: "/AddJournal", component: AddJournal},
    {url: "/AllJournal", component: AllJournal},
    {url:"/Delete", component:DeleteRapport },
    {url:"/Update", component: UpdateRapport},
    //Event
    {url: "/AllEvents", component: AllEvents},
    {url: "/AddEvent", component: AddEvent},
    {url: "/UpdateEvent/:id", component: UpdateEvent},
    //Calendar
    {url:"/Calendar", component: Calendar},
    //Note
    {url: "/AllNotes", component: AllResults},
    {url:"/AddNote", component: AddNote},
    {url:"/Delete", component:DeleteRapport },
    {url:"/Update", component: UpdateRapport},
    {url: "/ErrorClassification", component: ErrorClassification},
    //Exams
    {url: "/AllExams", component: AllExams},
    {url:"/AddExam", component: AddExam},
    {url:"/Delete", component:DeleteRapport },
    {url:"/Update", component: UpdateRapport},
    {url:"/Lecture", component: Lecture},
    {url:"/Production" ,component: Production},
    {url:"/Langue", component: Langue},
    {url:"/Dictee", component: Dicte},
    {url:"/Ecriture" ,component: Ecriture},

    //Program
    {url: "/AllProgram", component: AllProgram},
    {url:"/AddProgram", component: AddProgram},
    {url:"/Delete", component:DeleteRapport },
    {url:"/Update", component: UpdateRapport},
    //Rapport
    {url: "/AllRapport", component: AllRapports},
    {url:"/AddRapport", component: AddRapportVisite},
    {url:"/DeleteRapport", component:DeleteRapport },
    {url:"/UpdateRapport/:id", component: UpdateRapport},

  ];

  function NotFound(){    
    const url = allRoutes.map((route) => route.url);
    let path = window.location.pathname
    path = path.split('/')
    path = path[path.length - 1]    
      
    if(url.indexOf(path) <= 0){     
      return <Error404 />
    }
  }   


  return (
    <>
      <Routes>
        <Route path='/page-lock-screen' element={<LockScreen />} />
        <Route path='/page-error-400' element={<Error400 />} />
        <Route path='/page-error-403' element={<Error403 />} />
        <Route path='/page-error-500' element={<Error500 />} />
        <Route path='/page-error-503' element={<Error503 />} />
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/chooseUser' element={<ChooseUser/>}/>
        <Route path='/Register' element={<Register />}/>

        <Route element={<MainLayout />}>

          {allRoutes.map((data, i) => (
            <Route
              key={i}
              path={data.url}
              element={<data.component />}
            />
          ))}
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </>
  );
};

export default RoutesMarkup;
