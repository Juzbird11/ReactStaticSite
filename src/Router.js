import {
    Switch,
    Route
} from "react-router-dom";
import TremDates from "./Components/TermDates";
import AboutTheSchool from "./Components/AboutTheSchool";
import AboutTheHeadTeacher from "./Components/AboutTheHeadTeacher";
import RegistrationFees from "./Components/RegistrationFees";
import Newsletter from "./Components/Newsletter";
import JobVacancy from "./Components/JobVacancy";
import Contact from "./Components/Contact";

const Routes = () => (
    <Switch>
        <Route path="/about-the-school"><AboutTheSchool/></Route>
        <Route path="/about-the-head-teacher"><AboutTheHeadTeacher/></Route>
        <Route path="/term-dates"><TremDates/></Route>
        <Route path="/registration-fees"><RegistrationFees/></Route>
        <Route path="/newsletter"><Newsletter/></Route>
        <Route path="/job-vacancy"><JobVacancy/></Route>
        <Route path="/contact"><Contact/></Route>
    </Switch>
)

export default Routes;