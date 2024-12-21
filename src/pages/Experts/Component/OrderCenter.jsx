import { Dropdown } from "react-bootstrap";
import { IoIosArrowBack, IoIosArrowForward, IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { SlMagnifier } from "react-icons/sl";
import { TbDeviceIpadSearch } from "react-icons/tb";

export default function OrderCenter() {

    return <>
        <div className="border rounded-md mt-10 my-4">

            <header className="bg-gray-200 ">
                <label className="p-3 ">
                    مركز الطلبات
                    <span className="ps-2">(0)</span>
                </label>
                {/* search */}
                <search className="flex items-center justify-end bg-white ps-3  gap-3">
                    <label htmlFor="search">

                        <SlMagnifier className="text-xl" />
                    </label>
                    <input id="search" className="w-full p-3 focus:outline-none" type="search" placeholder="كلمة البحث" />
                </search>
                {/* actions */}
                <actions className="flex items-center justify-between ps-3 py-1 gap-3">
                    <h4>الطلبات</h4>
                    <h4 className="flex flex-row gap-1 items-center">
                        تاريخ الطلب
                        <div className="flex flex-col items-center">
                            <IoMdArrowDropup className="hover:bg-gray-100" onClick={() => alert('up')} />
                            <IoMdArrowDropdown className="hover:bg-gray-100" onClick={() => alert('down')} />
                        </div>
                    </h4>
                    <h4>حالة الطلب
                    </h4>
                </actions>
            </header>
            <body className="flex justify-center px-3 py-10 items-center">
                <div className="flex flex-col items-center gap-3 text-gray-600">
                    <TbDeviceIpadSearch className="text-6xl" />
                    <h5>لا توجد طلبات بعد </h5>
                    <h6>ابدأ بتصفّح الخدمات واطلب الخدمة التي تحتاجها لمتجرك.</h6>
                    <button className="bg-green-200 p-2 rounded-md hover:bg-green-300">تصفح الخدمات</button>
                </div>
            </body>
            <footer className="flex flex-row justify-between items-center bg-gray-200 py-2">
                <div className="flex items-center ">
                    <button onClick={() => alert('back')} className="text-black  flex flow-row items-center gap-1">
                        <IoIosArrowForward />
                        السابق
                    </button>
                    <button onClick={() => alert('next')} className="text-black  flex flow-row items-center gap-1">
                        التالي
                        <IoIosArrowBack />
                    </button>
                </div>
                <div className="flex items-center gap-2">
                    <h5>عدد الصفوف في الصفحة الواحدة</h5>
                    <Dropdown >
                        <Dropdown.Toggle className="bg-transparent rounded-pill border-gray-500 border-1 hover:border-gray-900  text-center " id="dropdown-basic">
                            10
                        </Dropdown.Toggle>

                        <Dropdown.Menu >
                            <Dropdown.Item href="#/action-1">10</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">20</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">30 </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">40 </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">50 </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </footer>
        </div>
    </>
}
