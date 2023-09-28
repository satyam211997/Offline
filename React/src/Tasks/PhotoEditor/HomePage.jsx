import { useRef, useState } from "react";
import "./style.css";
import { toPng } from "html-to-image";

const HomePage = () => {
  const [img, setImg] = useState(null);
  const imgRef = useRef(null);
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImg(URL.createObjectURL(e.target.files[0]));
    }
  };
  const blurX = () => {
    //imgRef.current.style.filter = "blur(5)";
    // console.log(imgRef.current.style);
    imgRef.current.style.filter =
      " sepia(79%) saturate(992%) hue-rotate(33deg) brightness(103%) contrast(98%)";
  };
  const grayscale = () => {
    imgRef.current.style.filter = "grayscale(80%)";
  };
  const dropshadow = () => {
    imgRef.current.style.filter = " drop-shadow(16px 16px 20px blue)";
  };
  const brightnessP = () => {
    imgRef.current.style.filter = "brightness(2.4)";
  };
  const brightnessM = () => {
    imgRef.current.style.filter = "brightness(.4)";
  };
  const normal = () => {
    imgRef.current.style.filter = "brightness(1)";
  };
  const dwlImg = () => {
    toPng(imgRef.current)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>My Editor</h1>
      <p>Choose File to edit</p>

      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={onImageChange}
      />

      <div style={{ display: "flex" }}>
        <img
          style={{ width: 400, height: 500 }}
          src={img}
          alt=""
          ref={imgRef}
        />
        <div className="fil">
          <button className="btn" onClick={blurX}>
            yellowis
          </button>
          <button className="btn" onClick={grayscale}>
            GrayScale
          </button>
          <button className="btn" onClick={dropshadow}>
            drop-shadow
          </button>
          <button className="btn" onClick={brightnessP}>
            brightness +
          </button>
          <button className="btn" onClick={brightnessM}>
            brightness -
          </button>
          <button className="btn" onClick={normal}>
            Normal
          </button>
        </div>
      </div>
      <button
        onClick={dwlImg}
        style={{ width: 500, backgroundColor: "skyBlue" }}
      >
        dwl image
      </button>
    </div>
  );
};

export default HomePage;
