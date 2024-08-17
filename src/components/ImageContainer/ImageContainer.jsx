
import "./ImageContainer.css";
import PerfumeImage from "../../../public/Images/Perfume.jpg";
function ImageContainer() {
    return (
        <div id="ImageDiv">
            <img id="MyImg" src={PerfumeImage} alt="Description of image" />
        </div>
    );
}

export default ImageContainer;