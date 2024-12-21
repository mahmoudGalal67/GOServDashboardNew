import React from "react";
import { OverlayTrigger } from "react-bootstrap";
import { BsPerson } from "react-icons/bs";
import { CiBullhorn } from "react-icons/ci";
import { MdOutlineInsertPhoto, MdStorefront } from "react-icons/md";
import { FaFileInvoiceDollar, FaRegFileCode } from "react-icons/fa6";
import { GiNotebook } from "react-icons/gi";
import { FaRegPlayCircle } from "react-icons/fa";
import { RiBankLine } from "react-icons/ri";
import { LuFileSpreadsheet } from "react-icons/lu";
import "./style.css";
export default function Services() {
  return (
    <>
      <services className="flex my-4 text-[#067DD3] cursor-pointer gap-3 xl:flex-row  flex-wrap flex-col m-4">
        <OverlayTrigger
          className="bg-red-900 parent"
          placement="top"
          overlay={
            <div
              className="bg-[#CAF1E3] tooltip text-green-700 text-sm w-60 rounded-md p-2"
              id="tooltip"
            >
              انطلق في تجارتك بسهولة مع خدمات إعداد وتخصيص المتجر، من إضافة
              المنتجات وحجز الدومين إلى تفعيل طرق الدفع.
            </div>
          }
        >
          <div className="border rounded-md child p-4 xl:w-[210px] md:w-full flex flex-col items-center justify-center gap-2">
            <MdStorefront className="text-6xl" />
            <h3>إعداد وتخصيص المتجر والمنتجات</h3>
          </div>
        </OverlayTrigger>
        <OverlayTrigger
          className="bg-red-900 parent"
          placement="top"
          overlay={
            <div
              className="bg-[#CAF1E3] tooltip text-green-700 text-sm w-60 rounded-md p-2"
              id="tooltip"
            >
              اجذب العملاء لمتجرك عبر خدمات إنشاء وإدارة حملات تسويقية وتحسين
              ظهور المتجر في محركات البحث (SEO).
            </div>
          }
        >
          <div className="border rounded-md child p-4 xl:w-[210px] md:w-full flex flex-col items-center justify-center gap-2">
            <CiBullhorn className="text-6xl" />
            <h3>التسويق والإعلانات</h3>
          </div>
        </OverlayTrigger>
        <OverlayTrigger
          className="bg-red-900 parent"
          placement="top"
          overlay={
            <div
              className="bg-[#CAF1E3] tooltip text-green-700 text-sm w-60 rounded-md p-2"
              id="tooltip"
            >
              روِّج لمنتجاتك عبر محتوى مرئي يُصوَّر بطريقة عفوية ويُنشر من قبل
              مستخدمين على مواقع التواصل الاجتماعي.
            </div>
          }
        >
          <div className="border rounded-md child p-4 xl:w-[210px] md:w-full flex flex-col items-center justify-center gap-2">
            <BsPerson className="text-6xl" />
            <h3> التسويق عبر UGC</h3>
          </div>
        </OverlayTrigger>
        <OverlayTrigger
          className="bg-red-900 parent"
          placement="top"
          overlay={
            <div
              className="bg-[#CAF1E3] tooltip text-green-700 text-sm w-60 rounded-md p-2"
              id="tooltip"
            >
              أبرِز الهوية البصرية لعلامتك التجارية وعزِّز حضورك الرقمي عبر
              خدمات تصميم متنوعة ومميزة.
            </div>
          }
        >
          <div className="border rounded-md child p-4 xl:w-[210px] md:w-full flex flex-col items-center justify-center gap-2">
            <MdOutlineInsertPhoto className="text-6xl" />
            <h3>التصاميم الإبداعية</h3>
          </div>
        </OverlayTrigger>
        <OverlayTrigger
          className="bg-red-900 parent"
          placement="top"
          overlay={
            <div
              className="bg-[#CAF1E3] tooltip text-green-700 text-sm w-60 rounded-md p-2"
              id="tooltip"
            >
              استعن بخبراء لتطوير وتصميم متجرك برمجيًا وربطه مع أهم التطبيقات
              والخدمات.
            </div>
          }
        >
          <div className="border rounded-md child p-4 xl:w-[210px] md:w-full flex flex-col items-center justify-center gap-2">
            <FaRegFileCode className="text-6xl" />
            <h3> خدمات التقنية والربط</h3>
          </div>
        </OverlayTrigger>
        {/*  */}
        <OverlayTrigger
          className="bg-red-900 parent"
          placement="top"
          overlay={
            <div
              className="bg-[#CAF1E3] tooltip text-green-700 text-sm w-60 rounded-md p-2"
              id="tooltip"
            >
              تعاون مع صُنّاع المحتوى في كتابة نصوص إبداعية تزيد من تفاعل
              العملاء مع متجرك.
            </div>
          }
        >
          <div className="border rounded-md child p-4 xl:w-[210px] md:w-full flex flex-col items-center justify-center gap-2">
            <GiNotebook className="text-6xl" />
            <h3>إدارة وصناعة المحتوى</h3>
          </div>
        </OverlayTrigger>
        <OverlayTrigger
          className="bg-red-900 parent"
          placement="top"
          overlay={
            <div
              className="bg-[#CAF1E3] tooltip text-green-700 text-sm w-60 rounded-md p-2"
              id="tooltip"
            >
              اطلب خدمات تعليق صوتي وتصوير ومونتاج مقاطع فيديو حسب رغبتك.
            </div>
          }
        >
          <div className="border rounded-md child p-4 xl:w-[210px] md:w-full flex flex-col items-center justify-center gap-2">
            <FaRegPlayCircle className="text-6xl" />
            <h3>الفيديو والصوتيات</h3>
          </div>
        </OverlayTrigger>
        <OverlayTrigger
          className="bg-red-900 parent"
          placement="top"
          overlay={
            <div
              className="bg-[#CAF1E3] tooltip text-green-700 text-sm w-60 rounded-md p-2"
              id="tooltip"
            >
              تاجر بثقة واطلب الاستشارات وخدمات كتابة العقود والمستندات
              القانونية من مختصّين قانونيين.
            </div>
          }
        >
          <div className="border rounded-md child p-4 xl:w-[210px] md:w-full flex flex-col items-center justify-center gap-2">
            <RiBankLine className="text-6xl" />
            <h3>خدمات قانونية</h3>
          </div>
        </OverlayTrigger>
        <OverlayTrigger
          className="bg-red-900 parent"
          placement="top"
          overlay={
            <div
              className="bg-[#CAF1E3] tooltip text-green-700 text-sm w-60 rounded-md p-2"
              id="tooltip"
            >
              استشر خبراء ماليين في إدارة الشؤون المحاسبية وإعداد وتحليل القوائم
              المالية وغيرها.
            </div>
          }
        >
          <div className="border rounded-md child p-4 xl:w-[210px] md:w-full flex flex-col items-center justify-center gap-2">
            <FaFileInvoiceDollar className="text-6xl" />
            <h3>خدمات مالية</h3>
          </div>
        </OverlayTrigger>
        <OverlayTrigger
          className="bg-red-900 parent"
          placement="top"
          overlay={
            <div
              className="bg-[#CAF1E3] tooltip text-green-700 text-sm w-60 rounded-md p-2"
              id="tooltip"
            >
              خدمات متنوعة ذات صلة بالتجارة الإلكترونية.
            </div>
          }
        >
          <div className="border rounded-md child p-4 xl:w-[210px] md:w-full flex flex-col items-center justify-center gap-2">
            <LuFileSpreadsheet className="text-6xl" />
            <h3>خدمات أخرى</h3>
          </div>
        </OverlayTrigger>
      </services>
    </>
  );
}
