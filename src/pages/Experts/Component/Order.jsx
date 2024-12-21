import React from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { IoIosStar, IoMdHeadset } from "react-icons/io";

export default function Order() {
  return (
    <>
      <order className="bg-gray-200 p-3 w-full  flex flex-col lg:flex-row justify-between items-center rounded-md border">
        <div className="flex flex-col">
          <h3 className="fw-bold ">اطلب خدماتك بثقة</h3>
          <p className="my-3">
            تساعدك خدمات التاجر في إنجاز مختلف المشاريع والمهام بأيدي مزوِّدي
            خدمات معتمدين من سلة.
          </p>
          <div className="flex flex-col gap-4 text-black">
            <div className="flex flex-row items-center gap-2 text-black">
              <IoIosStar className="text-black  p-3 rounded-md border" />
              <div className="flex flex-col   ">
                <h5>موثوقية في التعامل</h5>
                <p>
                  كافة مزوِّدي الخدمات موثّقون، ويكون التعامل بإشراف سلة لضمان
                  التزام الطرفين.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <CiCreditCard1 className="text-black  p-3 rounded-md border" />
              <div className="flex flex-col   ">
                <h5>موثوقية في التعامل</h5>
                <p>
                  كافة مزوِّدي الخدمات موثّقون، ويكون التعامل بإشراف سلة لضمان
                  التزام الطرفين.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <IoMdHeadset className="text-black text-2xl p-3 rounded-md border" />
              <div className="flex flex-col   ">
                <h5>موثوقية في التعامل</h5>
                <p>
                  كافة مزوِّدي الخدمات موثّقون، ويكون التعامل بإشراف سلة لضمان
                  التزام الطرفين.
                </p>
              </div>
            </div>
          </div>
        </div>
        <iframe
          className="rounded-md"
          width="500"
          height="300"
          src="https://www.youtube.com/embed/1tcUe3eWge0"
          title="أنجِز أعمالك مع خدمات التاجر"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </order>
    </>
  );
}
