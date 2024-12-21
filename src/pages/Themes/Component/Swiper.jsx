import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { IoIosArrowBack } from 'react-icons/io';
import { Navigation, Pagination } from 'swiper/modules';
export default function ThemeSwiper() {
    return (
        <>
            <Swiper
                dir="rtl"
                loop={true}
                zoom={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="flex xl:flex-row flex-col justify-between themeimg items-center bg-opacity-0 bg-cover   ">
                        <div className="flex flex-col gap-3 p-4 w-full ">
                            <h2 className='text-3xl'>اختلافك سر تميزك</h2>
                            <p>تصميم استثنائي مع العديد من البنرات  التفاعلية لتقديم تجربة تسوق مثيرة لعملائك</p>
                            <button className='w-52 py-2 mt-20 flex items-center justify-between bg-green-700 text-white'>
                                معاينة المتجر التجريبي
                                <IoIosArrowBack />
                            </button>
                        </div>
                        <figure>
                            <img className='w-full' src="https://cdn.salla.sa/hUrLh7vMYvVfD70Gxp1pm2cREQyXE8dIrIIEQFiX.png" alt="phone1" />
                        </figure>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex xl:flex-row flex-col justify-between themeimg  items-center bg-opacity-0 bg-cover   ">
                        <div className="flex flex-col gap-3 p-4 w-full ">
                            <h2 className='text-3xl'> متجرك انيق وخالي من التعقيد </h2>
                            <p>تصميم بسيط وميزات حصرية مثل الخرائط والنشرة البريدية</p>
                            <button className='w-52 py-2 mt-20 flex items-center justify-between bg-green-700 text-white'>
                                معاينة المتجر التجريبي
                                <IoIosArrowBack />
                            </button>
                        </div>
                        <figure>
                            <img className='w-full z-30' src="https://cdn.salla.sa/xYq6JFrKLa3yKQP9V0YCmezz7e8VSPUBnfDMSC3a.png" alt="phone3" />
                        </figure>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex xl:flex-row flex-col justify-between themeimg items-center bg-opacity-0 bg-cover   ">
                        <div className="flex flex-col gap-3 p-4 w-full ">
                            <h2 className='text-3xl'>ظهور جذاب يليق بمتجرك</h2>
                            <p>أفضل خيارات التصميم المرنة ليظهر متجرك بشكل أنيق</p>
                            <button className='w-52 py-2 mt-20 flex items-center justify-between bg-green-700 text-white'>
                                معاينة المتجر التجريبي
                                <IoIosArrowBack />
                            </button>
                        </div>
                        <figure>
                            <img className='w-full' src="https://cdn.salla.sa/vCuIoWYtYlGuwNLBdNyXBbBQnQ6A17QzgnYDQQ77.png" alt="phone3" />
                        </figure>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
