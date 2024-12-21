import React from "react";
import { IoStorefrontOutline } from "react-icons/io5";

export default function Subscription() {
  return (
    <>
      <subscription className="bg-green-200 md:p-10 p-4 flex flex-row justify-between items-center rounded-md border my-5">
        <div className="flex flex-row items-center gap-2">
          <IoStorefrontOutline className="text-3xl" />
          <div className="flex-col gap-4">
            <h4 className="text-2xl"> مهتم تقدِّم خدماتك للتجار؟</h4>
            <p>
              انضم لشركاء سلة وابدأ بيع خدماتك للآلاف من تجار سلة الباحثين عن
              خدمات احترافية وموثوقة.
            </p>
          </div>
        </div>
        <button className="text-black border rounded-md p-2 bg-green-400">
          انضم كشريك
        </button>
      </subscription>
    </>
  );
}
