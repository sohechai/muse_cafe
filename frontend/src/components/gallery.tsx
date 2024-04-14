import image01 from "../assets/image-01.png";
import image02 from "../assets/image-02.png";
import image03 from "../assets/image-03.png";
import image04 from "../assets/image-04.png";
import image05 from "../assets/image-05.png";

function Gallery() {
  return (
    <div className="gallery-container" id="gallery">
      <h1>Galerie</h1>
      <div className="gallery">
        <div className="gallery-inner">
          <div className="gallery-item">
            <img src={image01} alt="image01" />
          </div>
          <div className="gallery-item">
            <img src={image02} alt="image02" />
          </div>
          <div className="gallery-item">
            <img src={image03} alt="image03" />
          </div>
          <div className="gallery-item">
            <img src={image04} alt="image04" />
          </div>
          <div className="gallery-item">
            <img src={image05} alt="image05" />
          </div>
          <div className="gallery-item">
            <img src={image01} alt="image01" />
          </div>
          <div className="gallery-item">
            <img src={image02} alt="image02" />
          </div>
          <div className="gallery-item">
            <img src={image03} alt="image03" />
          </div>
          <div className="gallery-item">
            <img src={image04} alt="image04" />
          </div>
          <div className="gallery-item">
            <img src={image05} alt="image05" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
