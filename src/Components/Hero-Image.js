import img from "../Img/logo.png";
import "./Hero-image.css";

const HeroImage = () => {
    return (
        <div className="Hero-image">
            <img src= {img} alt="Logo"/>
        </div>
    )
}

export default HeroImage;