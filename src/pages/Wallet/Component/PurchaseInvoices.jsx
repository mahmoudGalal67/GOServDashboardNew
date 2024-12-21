import React from "react";
import { IoReceiptOutline } from "react-icons/io5";

export default function PurchaseInvoices() {
  return (
    <>
      <div className="my-4 rounded-md border">
        <header className="md:text-lg text-xs flex flex-row items-center bg-gray-200 gap-2 p-3">
          <IoReceiptOutline className="text-2xl" />
          <h2>فواتير المشتريات</h2>
        </header>
        <body>
          <head className="md:text-lg text-xs p-6 flex flex-row bg-gray-400 justify-between items-center">
            <h5>رقم الفاتورة</h5>
            <h5> المجموع</h5>
            <h5>تاريخ الفاتورة </h5>
            <h5> </h5>
          </head>
          <info className="p-6 flex flex-row justify-between items-center">
            <h5># 1451798</h5>
            <h5> 1.43 ر.س</h5>
            <h5> 31-07-2024</h5>
            <button className="text-black">طباعة</button>
          </info>
        </body>
      </div>
    </>
  );
}
