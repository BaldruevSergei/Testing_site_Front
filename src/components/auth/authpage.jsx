import { useEffect } from "react";
import { useParams } from "react-router-dom"
import StudentLogin from "./studentlogin";
import TeacherLogin from "./teacherlogin";
import AdminLogin from "./adminlogin";
import ErrorPage from "../errorpage";
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
