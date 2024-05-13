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
//Student
import AllStudents from '../pages/student/AllStudents';
import AddStudent from '../pages/student/AddStudent';
import UpdateStudent from '../pages/student/UpdateStudent';
import  StudentProfile from '../pages/student/StudentProfile';
//Inspector
import AllInspectors from '../pages/inspector/AllInspectors';
import AddInspector from '../pages/inspector/AddInspector';
import UpdateInspector from '../pages/inspector/UpdateInspector';
import  InspectorProfile from '../pages/inspector/InspectorProfile';
//Assistant
import AllAssistants from '../pages/assistant/AllAssistants';
import AddAssistant from '../pages/assistant/AddAssistant';
import UpdateAssistant from '../pages/assistant/UpdateAssistant';
import  AssistantProfile from '../pages/assistant/AssistantProfile';
//Headmaster
import AllHeadmasters from '../pages/headmaster/AllHeadmasters';
import AddHeadmaster from '../pages/headmaster/AddHeadmaster';
import UpdateHeadmaster from '../pages/headmaster/UpdateHeadmaster';
import  HeadmasterProfile from '../pages/headmaster/HeadmasterProfile';
//School
import AllSchools from '../pages/school/AllSchools';
import AddSchool from '../pages/school/AddSchool';
import UpdateSchool from '../pages/school/UpdateSchool';
import  SchoolProfile from '../pages/school/SchoolProfile';
//Planification
import AllPlan from '../pages/planification/AllPlan';
import AddPlan from '../pages/planification/AddPlan';
//Journal
import AddJournal from '../pages/Journal/AddJournal';
//Events
import AllEvents from '../pages/event/AllEvents';
import AddEvent from '../pages/event/AddEvent';
import UpdateEvent from '../pages/event/UpdateEvent';
//Calendar
import Calendar from '../pages/calendar/Calendar';



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
    { url: "/UpdateTeacher", component: UpdateTeacher },
    { url: "/TeacherProfile", component:  TeacherProfile },
    //Headmaster
    { url: "/AllHeadmasters", component: AllHeadmasters },
    { url: "/AddHeadmaster", component: AddHeadmaster },
    { url: "/UpdateHeadmaster", component: UpdateHeadmaster },
    { url: "/HeadmasterProfile", component:  HeadmasterProfile },
    //Inspector
    { url: "/AllInspectors", component: AllInspectors },
    { url: "/AddInspector", component: AddInspector },
    { url: "/UpdateInspector", component: UpdateInspector },
    { url: "/InspectorProfile", component:  InspectorProfile },
    //Student
    { url: "/AllStudents", component: AllStudents },
    { url: "/AddStudent", component: AddStudent },
    { url: "/UpdateStudent", component: UpdateStudent },
    { url: "/StudentProfile", component:  StudentProfile },
    //Assistant
    { url: "/AllAssistants", component: AllAssistants },
    { url: "/AddAssistant", component: AddAssistant },
    { url: "/UpdateAssistant", component: UpdateAssistant },
    { url: "/AssistantProfile", component:  AssistantProfile },
    //School
    { url: "/AllSchools", component: AllSchools },
    { url: "/AddSchool", component: AddSchool },
    { url: "/UpdateSchool", component: UpdateSchool },
    { url: "/SchoolProfile", component:  SchoolProfile },
    //Planification
    { url: "/AllPlan", component: AllPlan},
    {url: "/AddPlan", component: AddPlan},
    //Journal
    {url: "/AddJournal", component: AddJournal},
    //Event
    {url: "/AllEvents", component: AllEvents},
    {url: "/AddEvent", component: AddEvent},
    {url: "/UpdateEvent", component: UpdateEvent},
    //Calendar
    {url:"/Calendar", component: Calendar},

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
