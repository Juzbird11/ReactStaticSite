import "./Navbar.css";
import NavItem from "./NavItem";

const Navbar = () => {
    return (
        <nav className="Navbar">
            <NavItem name="Home" to="/"/>
            <NavItem name="ABOUT THE SCHOOL" to="/"/>
            <NavItem name="ABOUT THE HEAD TEACHER" to="/" />
            <NavItem name="GALLERY" to="/" />
            <NavItem name="TERM DATES" to="/term-dates" />
            <NavItem name="REGISTRATIONS AND FEES" to="/registration-fees" />
            <NavItem name="TESTIMONIAL" to="/testimonial" />
            <NavItem name="JOB VACANCY" to="/job-vacancy" />
            <NavItem name="NEWSLETTER" to="/newsletter" />
            <NavItem name="CONTACT" to="/contact" />
        </nav>
    )
}

export default Navbar;