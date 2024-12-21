import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import './ReportHeader.css';

const ReportHeader = () => {
  const [startDate, setStartDate] = useState(new Date('2024-10-01'));
  const [endDate, setEndDate] = useState(new Date('2024-10-31'));



  const handlePrint = () => {
    const newWindow = window.open('https://demo.salla.sa/reports/section/components/1/print#print', '_blank');

    if (newWindow) {
      newWindow.onload = () => {
        newWindow.print();
      };
    }
  };

  // const [startDate, setStartDate] = useState(new Date('2024-10-01'));
  // const [endDate, setEndDate] = useState(new Date('2024-10-31'));
  const [showDropdown, setShowDropdown] = useState(false); 

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };


  return (
    <div className="report-component-container">
       <div className="report-date-picker-container">
        <button className="report-custom-date-input" onClick={toggleDropdown}>
          <span style={{marginLeft:"10px" ,borderLeft:"1px solid #ddd" ,padding:"0 5px"}}> <i className="fa-solid fa-calendar-days report-calender" aria-hidden="true"></i> تاريخ التقرير</span>
        
          <span>  October 23, 2024 - October 23, 2024    <i class="fa-solid fa-chevron-down mx-1"></i></span> 
        
            {/* {startDate.toDateString()} - {endDate.toDateString()} */}
        </button>
        
        {showDropdown && (
          <ul className="report-dropdown-list">
            <li onClick={() => { setStartDate(new Date()); setEndDate(new Date()); }}>اليوم</li>
            <li onClick={() => { /* Logic for setting date to yesterday */ }}>بالأمس</li>
            <li onClick={() => { /* Logic for setting date to last week */ }}>الاسبوع الماضي</li>
            <li onClick={() => { /* Logic for setting date to last month */ }}>الشهر الماضي</li>
            <li onClick={() => { /* Logic for setting date to this month */ }}>هذا الشهر</li>
            <li onClick={() => { /* Logic for setting date to this year */ }}>السنة الحالية</li>
            <li onClick={() => { /* Logic for setting date to last year */ }}>السنة الماضية</li>
            <li onClick={() => { /* Logic for setting date to "Since Beginning" */ }}>منذ البداية</li>
            <li onClick={() => { /* Logic for setting custom date range */ }}>تحديد الفترة</li>
          </ul>
        )}
      </div>

      <div className="report-print-button">
        <button onClick={handlePrint}>
          <i className="sicon-printer2" style={{color:"black"}}></i>
          <span>طباعة</span>
        </button>
      </div>
    </div>
  );
};

// const CustomDateInput = ({ value, onClick }) => (
//   <button className="report-custom-date-input" onClick={onClick}>
//     {value} <i className="fa fa-calendar report-calender"></i>
//   </button>
// );

export default ReportHeader;
