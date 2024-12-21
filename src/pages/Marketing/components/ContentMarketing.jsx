import React from 'react';
import './ContentMarketing.css';
const ContentMarketing = () => {
  return (
    <div className="contentmarketing-container">
      <h2 className="contentmarketing-title">التسويق بالمحتوى</h2>
      <div className="contentmarketing-cards">
        <div className="contentmarketing-card">
            <span className="icon-contentmarketing coupon-icon"><i className='sicon-megaphone'></i></span>
            <h3 className="contentmarketing-card-title">الإعلانات</h3>
            <p className="contentmarketing-card-description">عرض شريط إعلانى في صفحات المتجر</p>
        </div>

        <div className="contentmarketing-card">
          <span className="icon-contentmarketing offers-icon"><i className='sicon-journal-pencil'></i></span>
          <h3 className="contentmarketing-card-title">المدونة</h3>
          <p className="contentmarketing-card-description">نشر مقالات عن منتجاتك وخدماتك</p>
        </div>

        <div className="contentmarketing-card">
          <span className="icon-contentmarketing bank-icon"><i className='sicon-search'></i></span>
          <h3 className="contentmarketing-card-title">تحسين محركات البحث</h3>
          <p className="contentmarketing-card-description">زيادة عدد مرات طهور متجرك وزياراته</p>
        </div>
      </div>
  </div>
  );
}

export default ContentMarketing;
