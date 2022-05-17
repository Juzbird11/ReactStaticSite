import Navbar from "./Navbar";
import img from "../Img/logo.png";

const Header = () => (
    <div>
        <div className="Hero">
            <h1>Maple Montessori</h1>
            <h2>Preschool</h2>
        </div>

        <img src={img} alt="Logo" className="hero-img"/>

        <Navbar/>
    </div>
)

export default Header;