import React, { useContext, useState } from "react";
import "../../ProductCard.css";
import "../../ProductsRow.css";
import { Modal, Button } from "react-bootstrap";
import "react-quill/dist/quill.snow.css";
import { ProductContext } from "../../../../../components/context/Product";

const AddNewPhotoModal = ({ isColumn, product, setUpdatedProduct }) => {
  const { dispatch, products } = useContext(ProductContext);

  const [showModal, setShowModal] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);

    setUpdatedProduct((prev) => ({ ...prev, photos: files, updated: true }));

    // dispatch({ type: "updateMainImages", payload: { id: product.id, files } });

    setUploadedImages(files);
  };

  return (
    <>
      {isColumn ? (
        <button
          className="add-media-btn"
          style={{ color: "black" }}
          onClick={handleModalShow}
        >
          <i className="sicon-image add-icon"></i> إضافة صورة أو فيديو
        </button>
      ) : (
        <span className="spanPlusClass" onClick={handleModalShow}>
          +
        </span>
      )}
      <Modal
        show={showModal}
        onHide={handleModalClose}
        centered
        size="lg"
        style={{ zIndex: 9999999999 }}
        className="addnewphoto"
      >
        <div className="modal-header">
          <h4>صور وفيديوهات المنتج</h4>
          <Button
            variant="link"
            onClick={handleModalClose}
            className="close-button"
          >
            &times;
          </Button>
        </div>
        <Modal.Body className="photoPopup">
          <div className="head-section">
            <h4 style={{ color: "black", marginBottom: "7px" }}>صور المنتج</h4>
            <p style={{ fontSize: "14px" }}>
              لمقاس لا يقل عن (100px ارتفاع * 250px عرض) من نوع ( jpg, jpeg, png
              , gif ) ولا يتجاوز 5 ميجابيت لكل صوره بحد اقصي 10 صور
            </p>
          </div>
          <div className="image-upload-area">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileInputChange}
              multiple
              style={{ display: "none" }}
              id="file-input"
            />
            <label htmlFor="file-input" style={{ cursor: "pointer" }}>
              <div className="upload-button">
                <p> تصفح من جهازك</p>
              </div>
            </label>
          </div>
          <div className="input-container">
            <button className="input-button">
              <i className="icon-class">اضافة</i>
            </button>
            <input
              type="text"
              className="text-input"
              placeholder="أضف تعليقاً أو فيديو من اليوتيوب"
            />
            <i
              className="sicon-media-player"
              style={{ color: "#aaa", marginRight: "8px" }}
            ></i>
          </div>
          <div className="uploaded-images-container d-flex">
            {product.photos?.map((image, index) => (
              <div key={index} className="uploaded-image">
                <img
                  src={
                    image instanceof File
                      ? URL.createObjectURL(image)
                      : `https://goservback.alyoumsa.com/public/storage/${image}`
                  }
                  alt={`Uploaded ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleModalClose}
            className="close-btn"
          >
            اغلاق
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddNewPhotoModal;
