import React, { useContext, useState } from "react";
import "../../ProductCard.css";
import "../../ProductsRow.css";
import { Modal, Button } from "react-bootstrap";
import "react-quill/dist/quill.snow.css";
import { useCookies } from "react-cookie";

import { Request } from "../../../../../components/utils/Request";

const AddNewPhotoModal = ({ isColumn, product, setUpdatedProduct }) => {
  const [showModal, setShowModal] = useState(false);
  const [cookies, setCookie] = useCookies(["usertoken"]);

  const [loading, setloading] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const handleFileInputChange = async (e) => {
    const files = Array.from(e.target.files);
    const formData = new FormData();
    files.map((file, i) => {
      formData.append("photos", file);
    });
    // dispatch({ type: "updateMainImages", payload: { id: product.id, files } });

    try {
      setloading(true);
      const { data } = await Request({
        url: `/api/Product_details/upload_multitype_photo`,
        method: "POST",
        data: formData,
        headers: {
          // "Content-Type": "multipart/form-data",
          Authorization: `Bearer  ${cookies.usertoken}`,
        },
      });
      setUpdatedProduct((prev) => ({
        ...prev,
        photoes: data.fileUrls,
        updated: true,
      }));
      console.log(data);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
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
          {loading ? (
            <div style={{ textAlign: "center" }}>Loaidng ...</div>
          ) : (
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
          )}
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
            {product.photoes?.map((image, index) => (
              <div key={index} className="uploaded-image">
                <img
                  src={`https://salla111-001-site1.ptempurl.com/${image}`}
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
