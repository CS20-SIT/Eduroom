import React, { Fragment,useState,useEffect } from 'react'
import style from '../../styles/package/createpackage'

const Upload = ({index}) => {
  const [image,setImage] = useState(null);
  useEffect(() => {
    if (image) {
      var reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("show-image" + index).src = e.target.result;
      };
      reader.readAsDataURL(image);
    };
  }, [image]);
  const handleUplaodFile = (e) => {
    let newValue = e.target.files[0];
    let type = "image";
    console.log(newValue);
    setImage(newValue);
  };

  return (
    <Fragment>
      <div>
        <div className="imageupload"
          onClick={() => {
            document.getElementById("image" + index).click();
          }}
        >
          <input
            id={"image" + index}
            type="file"
            accept="image/*"
            hidden={true}
            onChange={handleUplaodFile}
          />
          {image ? (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "contents",
              }}
            >
              <img
                src=""
                id={"show-image" + index}
                style={{ maxWidth: "600px", maxHeight: "250px" }}
              />
            </div>
          ) : (
              <div>
                <div><i className="fas fa-camera"></i></div>
                <div>Click here to add photo</div>
              </div>
            )}
        </div>
        <style jsx>{style}</style>
  </div>
  </Fragment>
  )
  }
  export default Upload