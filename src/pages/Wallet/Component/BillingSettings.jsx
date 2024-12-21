import React from 'react'
import { BsBriefcase } from 'react-icons/bs'
import { CiCreditCard1, CiMail, CiWallet } from 'react-icons/ci'
import { IoIosArrowBack } from 'react-icons/io'
import { RiBankLine, RiEqualizerLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
export default function BillingSettings() {
    return <>

        <div className='border rounded-lg w-full overflow-hidden'>
            <header className='flex items-center gap-2 bg-gray-200 p-3'>
                <RiEqualizerLine className='text-2xl' />
                <h4>إعدادات الفوترة</h4>
            </header>
            <body className='p-3'>
                <div className="flex cursor-pointer border-b-2 py-4 flex-row items-center gap-2 justify-between">
                    <div className="flex flex-row items-center gap-4">
                        <CiWallet className='text-4xl' />
                        <div className="flex flex-col items-start gap-2">
                            <h3>طريقة الدفع الإفتراضية</h3>
                            <p>المحفظة ( رصيد المتجر والمدفوعات الإلكترونية )</p>
                        </div>
                    </div>
                    <IoIosArrowBack className='text-2xl' />
                </div>
                <div className="flex cursor-pointer border-b-2 py-4 flex-row items-center gap-2 justify-between">
                    <div className="flex flex-row items-center gap-4">
                        <CiCreditCard1 className='text-4xl' />
                        <div className="flex flex-col items-start gap-2">
                            <h3>البطاقة الإئتمانية</h3>
                            <p>لا توجد بطاقات مضافة حتى الآن</p>
                        </div>
                    </div>
                    <IoIosArrowBack className='text-2xl' />
                </div>
                <div className="flex cursor-pointer border-b-2 py-4 flex-row items-center gap-2 justify-between">
                    <div className="flex flex-row items-center gap-4">
                        <RiBankLine className='text-4xl' />
                        <div className="flex flex-col items-start gap-2">
                            <h3>
                                الحساب البنكي لاستقبال الطلبات</h3>
                            <p>قم باضافة الحساب البنكي لتوثيق المعلومات</p>
                        </div>
                    </div>
                    <button className='text-black outline-lime-400 px-6 py-2 border '>
                        اضافة حساب بنكي
                    </button>
                </div>
                <div className="flex cursor-pointer border-b-2 py-4 flex-row items-center gap-2 justify-between">
                    <div className="flex flex-row items-center gap-4">
                        <CiMail className='text-4xl' />
                        <div className="flex flex-col items-start gap-2">
                            <h3>
                                البريد الإلكتروني لاستلام الفواتير</h3>
                            <Link to='https://salla.demo2023@gmail.com'>salla.demo2023@gmail.com</Link>
                        </div>
                    </div>
                    <IoIosArrowBack className='text-2xl' />
                </div>
                <div className="flex cursor-pointer  py-4 flex-row items-center gap-2 justify-between">
                    <div className="flex flex-row items-center gap-4">
                        <BsBriefcase className='text-4xl' />
                        <div className="flex flex-col items-start gap-2">
                            <h3>
                                عنوان الشركة</h3>
                            <p>Makkah Province، السعودية</p>
                        </div>
                    </div>
                    <IoIosArrowBack className='text-2xl' />
                </div>
            </body>
        </div>
    </>
}
