import React, { useEffect, useState } from "react";
import './CustomerGroups.css';
import { FaPlus } from 'react-icons/fa';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomerGroups = () => {

    const [showCustomerModal, setShowCustomerModal] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);

    const handleCustomerModalClose = () => setShowCustomerModal(false);
    const handleCustomerModalShow = () => setShowCustomerModal(true);

    const handleSave = () => {
        handleCustomerModalClose();
        setShowConfirmationModal(true);
    };

    const handleConfirmationClose = () => setShowConfirmationModal(false);
    useEffect(() => {
        let timer;
        if (showConfirmationModal) {
            timer = setTimeout(() => {
                handleConfirmationClose();
            }, 1000); 
        }
        return () => clearTimeout(timer);
    }, [showConfirmationModal]);

    return (
        <>
            <div className="customer-groups-container">
                <h4 style={{marginBottom:"25px"}}><i className="sicon-group mx-2" style={{fontSize:"25px"}}></i>مجموعات العملاء <span>(2 مجموعات)</span></h4>
                <div className="customer-card-container">
                    <div className="customer-card all-customers" onClick={handleCustomerModalShow} >
                        <i className="sicon-group sicon-customer"></i>
                        <div style={{ marginTop: "15px" }}>
                            <h5>جميع العملاء</h5>
                            <p style={{marginRight:"50px"}}>91 عميل</p>
                        </div>
                    </div>
                    <div className="customer-card order-group">
                        <i className="sicon-users sicon-customer"></i>
                        <div style={{ marginTop: "15px"}}>
                            <h5 style={{}}>اول طلب</h5>
                            <p style={{marginRight:"50px"}}>85 عميل</p>
                        </div>
                    </div>
                    <div className="customer-card new-group">
                        <FaPlus className="icon-customer" />
                        <h5>مجموعة جديدة</h5>
                    </div>
                </div>
            </div>

            <Modal
                show={showCustomerModal}
                onHide={handleCustomerModalClose}
                centered
                size="lg"
                style={{ zIndex: 9999999999 }}
                contentLabel="Client Modal"
                overlayClassName="custom-overlay"
                className="all-customers-modal"
            >
                <div className="modal-header">
                    <Button
                        variant="link"
                        onClick={handleCustomerModalClose}
                        className="close-button"
                    >
                        &times;
                    </Button>

                    <h4>جميع العملاء</h4>
                </div>

                <Modal.Body className="text-center">
                    <div className="modal-body">
                        <div style={{display:"flex",justifyContent:"space-around",alignItems:"center" ,border:"1px solid #eee",height:"60px", borderRadius:"10px",width:"100%"}}>
                            <div style={{width:"80%"}}>
                                <input type="text" placeholder="جميع العملاء" className="search-input-client" style={{border:"none"}}/>
                            </div>
                            <div className="" style={{width:"20%",borderLeft:"1px solid #eee"}}>
                                <select name="" placeholder="" style={{border:"none"}}>
                                    <option value=""><i className="sicon-group icon-list" style={{color:"black"}}></i></option>
                                </select>
                            </div>
                        </div>

                        <h3 style={{marginTop:"10px"}}>مزايا المجموعة</h3>
                        <p>
                            يمكنك تخصيص مزايا المجموعة العملاء عبر إعدادات المتجر، من خلال قيود شركات الشحن.
                            يمكنك التحكم في أي شركة شحن تظهر لعملاء المجموعة. ومن خلال قيود طرق الدفع،
                            يمكنك التحكم في أي طرق دفع تظهر لعملاء المجموعة.
                        </p>
                        <ul>
                            <li>الحماية من الاحتيال</li>
                            <li>قيود شركات الشحن</li>
                        </ul>
                    </div>

                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: "#f2f5f7" }}>
                    <Button
                        variant="secondary"
                        onClick={handleSave}
                        className="save-btn"
                    >
                        حفظ
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={showConfirmationModal}
                onHide={handleConfirmationClose}
                centered
                className="confirmation-modal"
            >
                <Modal.Body className="text-center">
                    <div style={{ fontSize: "24px", color: "#4caf50" }}>
                        <i className="fas fa-check-circle"></i>
                    </div>
                    <h4>تم تحديد المجموعة بنجاح</h4>
                </Modal.Body>
            </Modal>
        </>



    );
};

export default CustomerGroups;