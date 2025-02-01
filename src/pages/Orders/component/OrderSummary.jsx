import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./OrderSummary.css";
import { Modal, Form } from "react-bootstrap";
import Orders from "../Orders";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Request } from "../../../components/utils/Request";
import { dark } from "@mui/material/styles/createPalette";

const Orderdata = [
  {
    title: "جاري التوصيل",
  },
  {
    title: "تم التنفيذ",
  },
  {
    title: "قيد التنفيذ",
  },
  {
    title: "بانتظار المراجعة",
  },
  {
    title: "بانتظار الدفع",
  },
  {
    title: "محذوف",
  },
];

const OrderSummary = ({
  orders,
  setselectedorders,
  selectedorders,
  setorders,
}) => {
  const [cookies, setCookie] = useCookies(["usertoken"]);
  const currentUser = JSON.parse(localStorage.getItem("userInfo"));

  const handleShowReleaseModal = () => setShowReleaseModal(true);
  const handleCloseReleaseModal = () => setShowReleaseModal(false);
  const [showReleaseModal, setShowReleaseModal] = useState(false);

  const handleMouseEnter2 = () => {
    setShowExportDropdown(true);
  };

  const handleMouseLeave2 = () => {
    setShowExportDropdown(false);
  };
  const handleMouseEnter = () => {
    setShowImportDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowImportDropdown(false);
  };
  const [showExportDropdown, setShowExportDropdown] = useState(false);

  const [showImportDropdown, setShowImportDropdown] = useState(false);

  const handlestate = async (state) => {
    const updateOrderState = async () => {
      try {
        await Request({
          url: `/api/Clients/updatestatus?id=${selectedorders[0]}&status=${state}`,
          headers: {
            Authorization: `Bearer ${cookies.usertoken}`,
          },
          method: "PUT",
        });
        setorders((prev) =>
          prev.map((order) => {
            if (selectedorders.includes(order.order_id)) {
              return { ...order, status: state };
            } else {
              return order;
            }
          })
        );
      } catch (error) {
        console.log(error);
      }
    };
    updateOrderState();
  };

  const deleteOrder = async () => {
    if (selectedorders.length < 1) {
      return;
    }
    const deletedorders = selectedorders.map((order) => ({ id: order }));
    try {
      await Request({
        url: `/api/Clients/deleteordersbyadmin?uid=${currentUser.userId}`,
        headers: {
          Authorization: `Bearer ${cookies.usertoken}`,
        },
        method: "DELETE",
        data: deletedorders,
      });
      setorders((prev) =>
        prev.filter((order) => !selectedorders.includes(order.order_id))
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleordersIDS = (e, id) => {
    if (id == "all") {
      if (!e.target.checked) {
        setselectedorders((prev) => []);
        return;
      } else {
        setselectedorders((prev) => []);
        orders.map((order) => {
          setselectedorders((prev) => [...prev, order.order_id]);
        });
        return;
      }
    }
    if (selectedorders.includes(id)) {
      setselectedorders(selectedorders.filter((orderID) => orderID != id));
    } else {
      setselectedorders([...selectedorders, id]);
    }
  };
  return (
    <div className="order-summary">
      <div className="order-header">
        <div className="order-header-title">
          <input
            type="checkbox"
            className="order-header-checkbox mx-3"
            onChange={(e) => handleordersIDS(e, "all")}
            checked={
              orders.length == selectedorders.length &&
              selectedorders.length > 0
            }
          />
          <h2>الطلبات </h2>
          {/* (
            <div className="order-info">
              <span className="order-details">
                {selectedOrder.title} {selectedOrder.count}
              </span>
              <FontAwesomeIcon icon={faTimes} className="order-close-icon" />
            </div>
          )} */}
        </div>
        <button className="order-edit-button" onClick={handleShowReleaseModal}>
          <i className="sicon-magic-wand flip-x"></i> تحرير سريع
        </button>
      </div>
      {orders.map((order, i) => (
        <div className="order-item" key={order.order_id}>
          <div className="order-item-right">
            <div className="order-actions">
              <input
                type="checkbox"
                className="order-header-checkbox mx-2"
                value={order.order_id}
                onChange={(e) => handleordersIDS(e, order.order_id)}
                checked={selectedorders.includes(order.order_id)}
              />
            </div>
            <div className="order-details">
              {/* <p style={{ color: "black" }}>لا توجد طلبات محددة</p> */}
              <Link to={`/order/${order.order_id}`}>
                <p>
                  <span> {order.order_id} </span>
                  <span> عدد المنتجات {order.shopping_carddto.length}</span>
                </p>
              </Link>
            </div>
          </div>

          <div className="order-item-left">
            <div className="order-item-left-1">
              <p style={{ color: "black" }}>
                SAR {order.total_amount || order?.shopping_carddto[0]?.price}{" "}
                <span className="order-item-left-1">{order.status}</span>
              </p>
            </div>
            <div className="order-item-left-2">
              <p>
                {new Date(order.created_at).toLocaleString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        </div>
      ))}

      <Modal
        show={showReleaseModal}
        onHide={handleCloseReleaseModal}
        dialogClassName="left-aligned-service-release"
      >
        <Modal.Body>
          <div
            className="dropdown-item-service"
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            <div className="text-container-service">
              <p>
                <i
                  className="sicon-keyboard_arrow_left"
                  style={{ position: "absolute", left: 2 }}
                ></i>{" "}
                تعديل حالة الطلب
              </p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-inbox-multi"></i>
            </div>
            {showExportDropdown && (
              <div className="dropdown-content p-2">
                {Orderdata.map((state) => (
                  <p onClick={(e) => handlestate(state.title)}>{state.title}</p>
                ))}
              </div>
            )}
          </div>
          <div className="dropdown-item-service">
            <div className="text-container-service">
              <p>اسناد الي الموظفين</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-users"></i>
            </div>
          </div>
          <div className="dropdown-item-service">
            <div className="text-container-service">
              <p>طباعة الفواتير</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-newspaper-alt"></i>
            </div>
          </div>
          <div className="dropdown-item-service">
            <div className="text-container-service">
              <p>طباعة ملخص الفواتير</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-receipt"></i>
            </div>
          </div>
          <div className="dropdown-item-service">
            <div className="text-container-service">
              <p>طباعة قوائم التجهيز</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-barcode-scan"></i>
            </div>
          </div>
          <div className="dropdown-item-service">
            <div className="text-container-service">
              <p>طباعةالبوليصات</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-shipping"></i>
            </div>
          </div>
          <div className="dropdown-item-service">
            <div className="text-container-service">
              <p>تصدير الطلبات</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-share"></i>
            </div>
          </div>
          <div className="dropdown-item-service">
            <div className="text-container-service">
              <p>ارجاع مبلغ الطلب</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-cash-payment"></i>
            </div>
          </div>
          <div className="dropdown-item-service" onClick={deleteOrder}>
            <div className="text-container-service">
              <p>حذف الطلب</p>
            </div>
            <div className="icon-container-drop">
              <i className="sicon-trash"></i>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default OrderSummary;
