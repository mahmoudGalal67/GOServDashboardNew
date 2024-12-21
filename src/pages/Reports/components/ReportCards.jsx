import React from "react";
import "./ReportCards.css";

const ReportCards = () => {
  return (
    <>
      <div className="report-cards-container">
        <div className="report-card">
          <div className="report-card-head">
            <p>
              المبيعات{" "}
              <i className="sicon-information font-14 text-tiffany"></i>
              <span>آخر تحديث: منذ 9 دقائق</span>
            </p>
          </div>
          <div className="report-card-main" style={{ marginTop: "0" }}>
            <table>
              <tbody>
                <tr>
                  <td>إجمالي المبيعات (شامل التخفيضات)</td>
                  <td className="text-right text-muted2">
                    <span className="text-muted">—</span>
                  </td>
                </tr>
                <tr>
                  <td>كوبونات التخفيض</td>
                  <td className="text-right text-muted2">
                    <span className="text-muted">—</span>
                  </td>
                </tr>
                <tr>
                  <td>إجمالي المبيعات</td>
                  <td className="text-right text-muted2">
                    <span className="text-muted">—</span>
                  </td>
                </tr>
                <tr>
                  <td>تكاليف المنتجات</td>
                  <td className="text-right text-muted2">
                    <span className="text-muted">—</span>
                  </td>
                </tr>
                <tr>
                  <td>الشحن</td>
                  <td className="text-right text-muted2">
                    <span className="text-muted">—</span>
                  </td>
                </tr>
                <tr>
                  <td>الضرائب</td>
                  <td className="text-right text-muted2">
                    <span className="text-muted">—</span>
                  </td>
                </tr>
                <tr>
                  <td>رسوم الدفع الإلكتروني</td>
                  <td className="text-right text-muted2">
                    <span className="text-muted">—</span>
                  </td>
                </tr>
                <tr className="last-table-item">
                  <td>صافي المبيعات</td>
                  <td className="text-right text-muted2">
                    <span className="text-muted">—</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="report-card">
          <div className="report-card-head">
            <p>
              الطلبات <i className="sicon-information font-14 text-tiffany"></i>
            </p>
          </div>
          <div className="report-card-main">
            <i className="sicon-activity"></i>
            <p className="empty-text">لا توجد بيانات كافية</p>
          </div>
        </div>
        <div className="report-card">
          <div className="report-card-head">
            <p>
              معدل المرتجعات{" "}
              <i className="sicon-information font-14 text-tiffany"></i>
              <span>آخر تحديث: منذ ثانية</span>
            </p>
          </div>
          <div className="report-card-main">
            <i className="sicon-activity"></i>
            <p className="empty-text">لا توجد بيانات كافية</p>
          </div>
        </div>
        <div className="report-card">
          <div className="report-card-head">
            <p>
              معدل تكرار الشراء{" "}
              <i className="sicon-information font-14 text-tiffany"></i>
              <span>آخر تحديث: منذ ثانية</span>
            </p>
          </div>
          <div className="report-card-main">
            <i className="sicon-activity"></i>
            <p className="empty-text">لا توجد بيانات كافية</p>
          </div>
        </div>
      </div>
      <div className="report-card-last">
        <div className="report-card-head">
          <p>
            متوسط سلة المشتريات
            <i className="sicon-information font-14 text-tiffany"></i>
            <span>اخر تحديث: منذ ثانية</span>
          </p>
        </div>
        <div className="report-card-main">
          <i className="sicon-activity"></i>
          <p className="empty-text">لا توجد بيانات كافية</p>
        </div>
      </div>
    </>
  );
};

export default ReportCards;
