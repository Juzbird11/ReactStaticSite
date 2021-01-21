import {
    Switch,
    Route
} from "react-router-dom";
import TremDates from "./Components/TermDates";
import RegistrationFees from "./Components/RegistrationFees";
import Testimonial from "./Components/Testimonial";
import Newsletter from "./Components/Newsletter";
import JobVacancy from "./Components/JobVacancy";

const Routes = () => (
    <Switch>
        <Route path="/term-dates"><TremDates/></Route>
        <Route path="/registration-fees"><RegistrationFees/></Route>
        <Route path="/testimonial"><Testimonial/></Route>
        <Route path="/newsletter"><Newsletter/></Route>
        <Route path="/job-vacancy"><JobVacancy/></Route>
    </Switch>
)

export default Routes;