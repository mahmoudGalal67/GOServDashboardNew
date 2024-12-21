import React from 'react';
import './AdvancedTools.css';

const AdvancedTools = () => {
  return (
    <div className="AdvancedTools-container">
    <h2 className="AdvancedTools-title">الحملات</h2>
    <div className="AdvancedTools-cards">
       <div className="AdvancedTools-card">
         <div className="AdvancedTools-icon"><i className='sicon-user-heart'></i></div>
         <h3 className="AdvancedTools-card-title">ولاء العملاء</h3>
         <p className="AdvancedTools-description">إكسب العملاء عبر نقاط ولاء ومكافآت</p>
       </div>
       <div className="AdvancedTools-card">
         <div className="AdvancedTools-icon"><i className='sicon-gift-sharing'></i></div>
         <h3 className="AdvancedTools-card-title">الإهداء الرقمى</h3>
         <p className="AdvancedTools-description">إتاحة خيار المشتريات الرقمية</p>
       </div>
       <div className="AdvancedTools-card">
         <div className="AdvancedTools-icon"><i className='sicon-credit-card'></i></div>
         <h3 className="AdvancedTools-card-title">الطلب المباشر</h3>
         <p className="AdvancedTools-description">إختصار خطوات إتمام الطلب على العميل</p>
       </div>
       <div className="AdvancedTools-card">
         <div className="AdvancedTools-icon"><i className='sicon-calendar-date'></i></div>
         <h3 className="AdvancedTools-card-title">الجدول الزمني للتسويق</h3>
         <p className="AdvancedTools-description">معاينة العروض المجدولة</p>
         <span className="AdvancedTools-new-badge"> جديد </span>
       </div>
       </div>
   </div>
  );
}

export default AdvancedTools;
