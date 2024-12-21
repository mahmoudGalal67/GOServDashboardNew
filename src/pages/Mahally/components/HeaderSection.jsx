import React from 'react';
import './HeaderSection.css';
const logo ="https://cdn.salla.network/images/logo/mahly/logo-wide.svg";
const HeaderSection = () => {
  return (
    <div className="header-section">
      <div className="content-wrapper">
        <img src={logo} alt="Logo" className="logo" />
        <p className="description">
          انطلق بتجارتك لأبعد من حدود متجرك
        </p>
        <p className="sub-description">
          محلي من سلة هي قناة بيع متكاملة تمكّن تجار سلة من عرض وتسويق منتجاتهم مجانًا
          لآلاف العملاء الجدد في مكان واحد. <a href="#">اعرف المزيد</a>
        </p>
      </div>
    </div>
  );
};

export default HeaderSection;
