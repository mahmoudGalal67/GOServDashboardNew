import React from "react";
import { CiCircleCheck, CiCircleList } from "react-icons/ci";

export default function ActiveSubscriptions() {
  return (
    <>
      <div className="my-4 rounded-md border">
        <header className="flex flex-row items-center md:text-lg text-sm bg-gray-200 gap-2 p-3">
          <CiCircleList className="text-2xl" />
          <h2>الإشتراكات المفعلة</h2>
        </header>
        <body>
          <head className="md:text-lg text-xs p-6 flex flex-row bg-gray-400 justify-between items-center">
            <h5>تفاصيل الإشتراك</h5>
            <h5>مدة الإشتراك</h5>
            <h5>تاريخ الإشتراك</h5>
            <h5> تاريخ التجديد القادم</h5>
            <h5>رسوم الإشتراك</h5>
            <h5> التجديد التلقائي</h5>
            <h5> </h5>
          </head>
          <info className="md:text-lg text-xs p-6 flex flex-row justify-between items-center">
            <h5> سلة سبيشال</h5>
            <h5>سنة </h5>
            <h5> 2023-09-19 </h5>
            <h5> 2030-12-31 </h5>
            <h5> 0.00 ر.س</h5>
            <h5>
              <CiCircleCheck className="text-2xl" />{" "}
            </h5>
            <button className="text-black">... </button>
          </info>
        </body>
      </div>
    </>
  );
}
