import React from "react";
import { FaRegEye, FaStar } from "react-icons/fa6";
import { Navigation, Pagination, Zoom } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import tamara from "./../../../assets/tamara.png";
import "./style.css";
export default function Suggestion() {
  return (
    <>
      {/* <suggestion>

            <Swiper

                slidesPerView={5}
                spaceBetween={10}
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                zoom={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Zoom, Navigation, Pagination]}
                className="mySwiper rounded-md my-10"
            >

                <SwiperSlide className="">
                    <div className="flex flex-col w-52 border rounded-md shadow-sm hover:shadow-2xl overflow-hidden ">
                        <div className="img ">
                            <img className="w-full" src={tamara} alt="tamara" />
                        </div>
                        <quick className="text-gray-700 hover:text-[#CAF1E3] hover:duration-300 flex flex-row p-2 cursor-pointer gap-1 items-center border rounded-pill shadow-sm w-fit bg-white -translate-x-[50%] -translate-y-[50%]">
                            <span>
                                <FaRegEye />
                            </span>
                            عرض سريع
                        </quick>
                        <button className="text-black hover:text-[#CAF1E3] hover:underline mb-1">التسجيل في تابي وتمارا</button>
                        <body className="flex flex-col  ">
                            <div className="flex flex-row justify-between items-center mb-3">
                                <h4 className="text-xs">مدة التسليم</h4>
                                <h6 className="text-xs text-[#004956] fw-bold">6 ايام</h6>
                            </div>
                            <div className="flex flex-row justify-between items-center ">
                                <h4 className="text-sm">السعر يبدأ من</h4>
                                <h6 className="text-sm text-[#004956] fw-bold">120 <span className="text-black fw-normal text-sm">ر.س</span></h6>
                            </div>
                        </body>
                        <footer className="flex flex-row items-center my-3 border-t-2 pt-3 ps-2 gap-2">
                            <div className="img rounded-full w-10 overflow-hidden">
                                <img className="w-full" src={tamara} alt="tamara" />
                            </div>
                            <div className="flex flex-col items-start gap-1">
                                <h5 className="hover:underline cursor-pointer">
                                    احمد العلاسي
                                </h5>
                                <h6 className="flex flex-row gap-1 items-center ">
                                    <FaStar className="text-yellow-500" />
                                    5 <span>(4)</span>
                                </h6>
                            </div>

                        </footer>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="flex flex-col w-52 border rounded-md shadow-sm hover:shadow-2xl overflow-hidden ">
                        <div className="img ">
                            <img className="w-full" src={tamara} alt="tamara" />
                        </div>
                        <quick className="text-gray-700 hover:text-[#CAF1E3] hover:duration-300 flex flex-row p-2 cursor-pointer gap-1 items-center border rounded-pill shadow-sm w-fit bg-white -translate-x-[50%] -translate-y-[50%]">
                            <span>
                                <FaRegEye />
                            </span>
                            عرض سريع
                        </quick>
                        <button className="text-black hover:text-[#CAF1E3] hover:underline mb-1">التسجيل في تابي وتمارا</button>
                        <body className="flex flex-col  ">
                            <div className="flex flex-row justify-between items-center mb-3">
                                <h4 className="text-xs">مدة التسليم</h4>
                                <h6 className="text-xs text-[#004956] fw-bold">6 ايام</h6>
                            </div>
                            <div className="flex flex-row justify-between items-center ">
                                <h4 className="text-sm">السعر يبدأ من</h4>
                                <h6 className="text-sm text-[#004956] fw-bold">120 <span className="text-black fw-normal text-sm">ر.س</span></h6>
                            </div>
                        </body>
                        <footer className="flex flex-row items-center my-3 border-t-2 pt-3 ps-2 gap-2">
                            <div className="img rounded-full w-10 overflow-hidden">
                                <img className="w-full" src={tamara} alt="tamara" />
                            </div>
                            <div className="flex flex-col items-start gap-1">
                                <h5 className="hover:underline cursor-pointer">
                                    احمد العلاسي
                                </h5>
                                <h6 className="flex flex-row gap-1 items-center ">
                                    <FaStar className="text-yellow-500" />
                                    5 <span>(4)</span>
                                </h6>
                            </div>

                        </footer>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="flex flex-col w-52 border rounded-md shadow-sm hover:shadow-2xl overflow-hidden ">
                        <div className="img ">
                            <img className="w-full" src={tamara} alt="tamara" />
                        </div>
                        <quick className="text-gray-700 hover:text-[#CAF1E3] hover:duration-300 flex flex-row p-2 cursor-pointer gap-1 items-center border rounded-pill shadow-sm w-fit bg-white -translate-x-[50%] -translate-y-[50%]">
                            <span>
                                <FaRegEye />
                            </span>
                            عرض سريع
                        </quick>
                        <button className="text-black hover:text-[#CAF1E3] hover:underline mb-1">التسجيل في تابي وتمارا</button>
                        <body className="flex flex-col  ">
                            <div className="flex flex-row justify-between items-center mb-3">
                                <h4 className="text-xs">مدة التسليم</h4>
                                <h6 className="text-xs text-[#004956] fw-bold">6 ايام</h6>
                            </div>
                            <div className="flex flex-row justify-between items-center ">
                                <h4 className="text-sm">السعر يبدأ من</h4>
                                <h6 className="text-sm text-[#004956] fw-bold">120 <span className="text-black fw-normal text-sm">ر.س</span></h6>
                            </div>
                        </body>
                        <footer className="flex flex-row items-center my-3 border-t-2 pt-3 ps-2 gap-2">
                            <div className="img rounded-full w-10 overflow-hidden">
                                <img className="w-full" src={tamara} alt="tamara" />
                            </div>
                            <div className="flex flex-col items-start gap-1">
                                <h5 className="hover:underline cursor-pointer">
                                    احمد العلاسي
                                </h5>
                                <h6 className="flex flex-row gap-1 items-center ">
                                    <FaStar className="text-yellow-500" />
                                    5 <span>(4)</span>
                                </h6>
                            </div>

                        </footer>
                    </div>
                </SwiperSlide>
            </Swiper>
        </suggestion> */}
    </>
  );
}
