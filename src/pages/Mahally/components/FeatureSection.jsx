import React from 'react';
import './FeatureSection.css'; 

const yourPhoneImage="https://cdn.assets.salla.network/dash/vendor/mahlydash//images/mahally_app_showcase.png?77d1c26640125cf080a46d0be122d2ab";
const playStore="https://cdn.assets.salla.network/dash/vendor/mahlydash/images/playstore-white-bg.svg";
const appStore="https://cdn.assets.salla.network/dash/vendor/mahlydash/images/appstore-white-bg.svg";

const controlDetails="https://cdn.assets.salla.network/dash/vendor/mahlydash/images/settings-sliders-icon.svg";
const connectYourStore="https://cdn.assets.salla.network/dash/vendor/mahlydash/images/cursor-finger-icon.svg";
const FeatureSection = () => {
  return (
    <div className="feature-section">
      <div className="feature-container">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-div">
              <i className="sicon-bag-dollar feature-icon"></i>
            </div>
            <h3>عزز مبيعات متجرك</h3>
            <p>اجذب شريحة عملاء أكبر ومبيعات أكثر عبر ربط متجرك بمحلي وعرض منتجاتك لجمهور مستعد للشراء!</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-div">
              <i className="sicon-user-square feature-icon"></i>
            </div>
            <h3>إنضم بدون أي رسوم</h3>
            <p> محلي توفر لتجار باقتي سلة بلس وسلة برو قناة بيع وحل تسويقي مجاني وبدون أي تكاليف إضافية!</p>
          </div>
          <div className="feature-card">
           <div className="feature-icon-div">
              <img src={controlDetails} alt="icon" className="sicon-user-square feature-icon"/>
            </div>
            <h3>تحكم بكل التفاصيل</h3>
            <p>بإمكانك إدراة عرض منتجات متجرك في محلي والتحكم بإظهار أو إخفاء أي من منتجاتك بضغطة زر.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-div">
              <img src={connectYourStore} alt="icon" className="sicon-user-square feature-icon"/>
            </div>
            <h3>اربط متجرك بخطوة واحدة</h3>
            <p>أضف منتجاتك لمحلي عبر اختيار التصنيف المناسب لكل منتج، وسهِّل على عملاء محلي العثور على منتجاتك</p>
          </div>
        </div>

        <div className="phone-section">
          <img src={yourPhoneImage} alt="Phone" className="phone-image" />
          <div className="phone-div">
            <p className="phone-text">
              خذ نظرة على متجرك
              <br />
              سجل في تطبيق محلي وكن جاهزًا لمتجرك الخاص.
            </p>
            <div className="app-buttons">
              <img src={appStore} alt="App Store" className="app-button" />
              <img src={playStore} alt="Google Play" className="app-button" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
