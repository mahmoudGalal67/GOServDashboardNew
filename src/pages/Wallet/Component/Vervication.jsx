import React from 'react'
import { GoShieldCheck } from 'react-icons/go'
import { IoIosArrowBack } from 'react-icons/io'

export default function Vervication() {
    return <>

        <verification className='flex cursor-pointer flex-row justify-between items-center border rounded-md p-4'>
            <div className="flex flex-row items-center gap-2">
                <div className="border rounded-full p-3 bg-green-200">
                    <GoShieldCheck className='text-2xl' />
                </div>
                <div className="flex flex-col  items-start gap-2">
                    <h3 className='text-gray-700'>توثيق المتجر
                        <span>(مكتمل)</span>
                    </h3>
                    <p className='text-gray-300'>يمكنك الان الاستفادة الكاملة من امكانيات المنصة</p>
                    <p className='text-red-500'>فقط ملك المتجر يستطيع الدخول لتوثيق المتجر.</p>
                </div>
            </div>
            <IoIosArrowBack className='text-2xl' />
        </verification>
    </>
}
