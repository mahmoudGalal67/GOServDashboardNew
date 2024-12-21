import React from "react";
import Button from "react-bootstrap/Button";
import "./ProfilepageHead.css";
const ProfilepageHead = () => {
  return (
    <>
      <div className="header-container-profilepages-head">
        <div className="header-right-profilepages">
          <Button className="btn-add-profilepages">
            <span className="spanIcon-profilepages" style={{ marginLeft: "20px" }}>
              <i className="sicon-add mx-2 icon-profilepages"></i>
                 صفحة جديدة
            </span>
          </Button>
        </div>
        <div className="header-left-profilepages">
          <Button className="btn-services-profilepages">
            <i className="sicon-toolbox icon-toolbox sicon-tool-profilepages mx-2"></i>
            خدمات
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProfilepageHead;
