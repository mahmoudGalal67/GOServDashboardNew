import React from 'react';
import './MarketingDiscounts.css';

const MarketingDiscounts = () => {
  return (
    <div className="discounts-container">
      <h2 className="discounts-title">الخصومات</h2>
      <div className="discounts-cards">
        <div className="discount-card">
            <span className="icon-marketingDiscount coupon-icon"><i className='sicon-ticket'></i></span>
            <h3 className="marketingDiscount-card-title">كوبونات التخفيض</h3>
            <p className="marketingDiscount-card-description">إنشاء كوبون أو مجموعة كوبونات</p>
        </div>

        <div className="discount-card">
          <span className="icon-marketingDiscount offers-icon"><i className='sicon-special-discount'></i></span>
          <h3 className="marketingDiscount-card-title">العروض الخاصة</h3>
          <p className="marketingDiscount-card-description">تفعيل وإدارة العروض ومتابعة إحصائياتها</p>
        </div>

        <div className="discount-card">
          <span className="icon-marketingDiscount bank-icon"><i className='sicon-bank-building'></i></span>
          <h3 className="marketingDiscount-card-title">عرض البنك</h3>
          <p className="marketingDiscount-card-description">إنشاء عروض وخصومات عند الدفع ببطاقة بنك محدد</p>
        </div>
      </div>
    </div>
  );
};

export default MarketingDiscounts;
