import React from "react";
import { Route, BrowserRouter} from 'react-router-dom'
import Landing from "./pages/Landing";
import TeacherList from "./pages/TeacherList";
import TeacherForm from "./pages/TeacherForm";

function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" Component={Landing}/>
            <Route path="/study" Component={TeacherList}/>
            <Route path="/give-classes" Component={TeacherForm}/>
        </BrowserRouter>
    )
}

export default Routes