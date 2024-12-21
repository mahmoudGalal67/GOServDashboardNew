import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="p-28 gap-6 selection:text-green-500">
        <h1 className="flex flex-row gap-10 items-center text-green-900">
          <img src="/logo.svg" alt="" />
          <span className="text-9xl"> 4 0 4</span>
        </h1>
        <h2 className=" text-5xl text-gray-400 my-4">نأسف, الرابط غير موجود</h2>
        <h3 className=" flex flex-col gap-4 items-start">
          <p>الرابط المطلوب غير موجود،</p>
          <p>من فضلك حاول مرة آخرى أو تواصل مع الدعم الفني</p>
          <Link
            to="/"
            className="text-black text-2xl flex flex-row gap-2 items-center"
          >
            العودة للصفحة الرئيسية
            <span>
              <IoHomeOutline />
            </span>
          </Link>
        </h3>
      </div>
    </>
  );
}
