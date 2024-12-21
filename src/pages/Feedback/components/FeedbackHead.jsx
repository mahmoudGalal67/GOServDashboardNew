import React from 'react';

const FeedbackHead = () => {
  return (
    <div style={{display:"flex" ,justifyContent:"space-between",width:"100%" ,marginTop:"20px"}}>
      <div>
        <p>الاسئلة والتقييمات (15)</p>
      </div>
      <div>
        <button className="btn-filter">
          <i className="sicon-filter icon-filter"></i> تصفية
        </button>
      </div>
    </div>
  );
}

export default FeedbackHead;
