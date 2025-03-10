import { useEffect } from "react";
import { useParams } from "react-router-dom"
import StudentLogin from "./student/studentlogin";
import TeacherLogin from "./teacher/teacherlogin";
import AdminLogin from "./admin/adminlogin";
import ErrorPage from "../errorpage";
import './authpage.scss'
export default function AuthPage() {
    const { id } = useParams();
    const formComponents = {
        Student: StudentLogin,
        Teacher: TeacherLogin,
        Admin: AdminLogin
    };
    const FormComponent = formComponents[id] || null;

    return (
       <>
            {FormComponent ? 
            <div className="AuthPage">
             <FormComponent /> 
            </div>
            : <ErrorPage/>}
      </>
    );
}
