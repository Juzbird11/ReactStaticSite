import "./NavItem.css";
import {
    Link
} from "react-router-dom";

const NavItem = (props) => {
    return (
        <div className="NavItem">
            <li>
                <Link to={props.to}>{props.name}</Link>
            </li>
        </div>
    )
}

export default NavItem;