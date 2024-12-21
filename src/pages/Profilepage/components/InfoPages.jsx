import React, { useState } from "react";
import "./InfoPages.css";

const InfoPages = () => {
  // Define state for each toggle switch
  const [toggles, setToggles] = useState({
    policy1: true,
    policy2: false,
    policy3: true,
  });

  // Toggle function
  const handleToggle = (policy) => {
    setToggles((prevState) => ({
      ...prevState,
      [policy]: !prevState[policy],
    }));
  };
  const [activePopup1, setActivePopup1] = useState(false);

  const handlePopupToggle1 = () => {
    setActivePopup1((prev) => (!prev));
  };

  const [activePopup2, setActivePopup2] = useState(false);

  const handlePopupToggle2 = () => {
    setActivePopup2((prev) => (!prev));
  };

  const [activePopup3, setActivePopup3] = useState(false);

  const handlePopupToggle3 = () => {
    setActivePopup3((prev) => (!prev));
  };

  return (
    <div className="info-pages-container">
      <div className="Infopages-header">
        <p style={{color:"#666"}}><i className="sicon-newspaper mx-2" style={{color:"#666"}}></i>الصفحات التعريفية   <span className="Infopages-count">(3 صفحات)</span> </p>
      
      </div>
      <div className="info-page-list">
        <div className="info-page-item">
         <span className="Infopages-title">سياسة الاستبدال والاسترجاع</span>
          <div className="Infopages-toggle-container">
            <label className="Infopages-switch">
              <input
                type="checkbox"
                checked={toggles.policy1}
                onChange={() => handleToggle("policy1")}
              />
              <span className="Infopages-slider Infopages-round"></span>
            </label>
          </div>
          <span className="Infopages-menu-icon"  onClick={() => handlePopupToggle1()}>⋮</span>
        </div>

        <div className="info-page-item">
          <span className="Infopages-title">سياسة الاستخدام والخصوصية</span>
        
          <div className="Infopages-toggle-container">
            <label className="Infopages-switch">
              <input
                type="checkbox"
                checked={toggles.policy2}
                onChange={() => handleToggle("policy2")}
              />
              <span className="Infopages-slider Infopages-round"></span>
            </label>
          </div>
          <span className="Infopages-menu-icon"  onClick={() => handlePopupToggle2()}>⋮</span>
        </div>

        <div className="info-page-item">
        <span className="Infopages-title">الأحكام والشروط</span>
          <div className="Infopages-toggle-container">
            <label className="Infopages-switch">
              <input
                type="checkbox"
                checked={toggles.policy3}
                onChange={() => handleToggle("policy3")}
              />
              <span className="Infopages-slider Infopages-round"></span>
            </label>
          </div>
      
          <span className="Infopages-menu-icon" onClick={() => handlePopupToggle3()}>⋮</span>
        </div>
          {activePopup1 && (
              <div className="Infopages-popup1" onClick={() => handlePopupToggle1()}>
                <span className="copy-icon sicon-swap-fill flip-x text-tiffany mr-5 font-14"></span>
                <span>نسخ الرابط</span>
              </div>
            )}
          {activePopup2 && (
              <div className="Infopages-popup2" onClick={() => handlePopupToggle2()}>
                <span className="copy-icon sicon-swap-fill flip-x text-tiffany mr-5 font-14"></span>
                <span>نسخ الرابط</span>
              </div>
            )}
            {activePopup3 && (
              <div className="Infopages-popup3" onClick={() => handlePopupToggle3()}>
                <span className="copy-icon sicon-swap-fill flip-x text-tiffany mr-5 font-14"></span>
                <span>نسخ الرابط</span>
              </div>
            )}
      </div>
    </div>
  );
};

export default InfoPages;
