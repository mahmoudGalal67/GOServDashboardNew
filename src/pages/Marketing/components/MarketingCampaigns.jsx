import React from 'react';
import './MarketingCampaigns.css';
const MarketingCampaigns = () => {
  return (
    <div className="campaigns-container">
     <h2 className="campaign-title">الحملات</h2>
     <div className="campaigns-cards">
        <div className="campaign-card">
          <div className="campaign-icon"><i className='sicon-user-check'></i></div>
          <h3 className="campaign-card-title">السلات المتروكة</h3>
          <p className="campaign-description">إرسال تذكير للعملاء لإتمام الشراء</p>
        </div>
        <div className="campaign-card">
          <div className="campaign-icon"><i className='sicon-megaphone'></i></div>
          <h3 className="campaign-card-title">إعلانات سويبلي</h3>
          <p className="campaign-description">إنشاء وإدارة حملات إعلانية في عدة منصات</p>
          <span className="new-badge"> جديد <i className="sicon-snapchat mx-1 mt-1"></i></span>
        </div>
        <div className="campaign-card">
          <div className="campaign-icon"><i className='sicon-megaphone'></i></div>
          <h3 className="campaign-card-title">الحملات التسويقية</h3>
          <p className="campaign-description">التسويق عبر الرسائل النصية والإشعارات</p>
        </div>
        <div className="campaign-card">
          <div className="campaign-icon"><i className='sicon-special-money'></i></div>
          <h3 className="campaign-card-title">التسويق بالعمولة</h3>
          <p className="campaign-description">إنشاء رابط أو كوبون تسويقي</p>
        </div>
        </div>
    </div>
  );
}

export default MarketingCampaigns;
