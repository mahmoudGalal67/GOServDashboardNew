import React from 'react'
import { OverlayTrigger } from 'react-bootstrap'
import { AiOutlineInbox } from 'react-icons/ai'
import { CiWallet } from 'react-icons/ci'
import { GoInfo } from 'react-icons/go'
import { SiSalla } from 'react-icons/si'
export default function Types() {
    return <>

        <types className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-rows-1 gap-3  py-4'>
            <div className="border rounded-md w-full p-3">
                <div className="flex flex-row items-center  gap-2">
                    <CiWallet className='text-2xl' />
                    <h3> رصيد المتجر </h3>

                    <OverlayTrigger
                        className='bg-red-900 parent'
                        placement="top"
                        overlay={
                            <div className="bg-[#CAF1E3] tooltip text-green-700 text-sm w-60 rounded-md p-2 mb-2" id="tooltip">
                                من خلال رصيد المتجر يمكنك تجديد باقتك تلقائياً، والشراء من متجر سلة ، وإصدار بوليصات
                                الشحن ، وغيرها.
                            </div>
                        }>
                        <div className="">
                            <GoInfo />
                        </div>
                    </OverlayTrigger>
                </div>
                <div className="flex flex-col gap-6 my-2 items-center">
                    <CiWallet className='text-9xl' />
                    <strong>لا يوجد لديك رصيد حاليا</strong>
                    <p>أضف رصيد عن طريق إضافة الرصيد</p>
                    <buttons className="flex flex-row items-center gap-2 " >
                        <button className='text-black px-2  py-2 border rounded-md hover:bg-green-400 bg-green-200'>
                            إضافة رصيد
                        </button>
                        <button className='text-black px-2 py-2 border  rounded-md hover:outline-green-400 outline-green-200'>
                            سحب رصيد
                        </button>
                    </buttons>
                    <button className='text-gray-600 px-6 py-2  flex flow-row items-center  whitespace-nowrap underline hover:text-green-300 '>
                        <AiOutlineInbox />
                        سجل العمليات
                    </button>
                </div>
            </div>
            <div className="border rounded-md w-full p-3">
                <div className="flex flex-row items-center  gap-2">
                    <SiSalla className='text-4xl' />
                    <h3> رصيد المدفوعات الإلكترونية   </h3>

                    <OverlayTrigger
                        className='bg-red-900 parent'
                        placement="top"
                        overlay={
                            <div className="bg-[#CAF1E3] tooltip text-green-700 text-sm w-60 rounded-md p-2 mb-2" id="tooltip">
                                الرصيد الحالي لمبيعات متجرك . يمكنك الإستفادة منه بتحويله إلى رصيد المتجر .
                            </div>
                        }>
                        <div className="">
                            <GoInfo />
                        </div>
                    </OverlayTrigger>
                </div>
                <div className="flex flex-col gap-16 justify-between my-2 items-center">
                    <CiWallet className='text-9xl' />
                    <strong>لا يوجد لديك رصيد حاليا</strong>
                    <button className='text-gray-600 px-6 py-2  flex flow-row items-center  whitespace-nowrap underline hover:text-green-300 '>
                        <AiOutlineInbox />
                        سجل العمليات
                    </button>
                </div>
            </div>
            <div className="border rounded-md w-full p-3">
                <div className="flex flex-row items-center  gap-2">
                    <SiSalla className='text-4xl' />
                    <h3>  رصيد مدفوعات الدفع عند الاستلام  </h3>

                    <OverlayTrigger
                        className='bg-red-900 parent'
                        placement="top"
                        overlay={
                            <div className="bg-[#CAF1E3] tooltip text-green-700 text-sm w-60 rounded-md p-2 mb-2" id="tooltip">
                                رصيد مدفوعاتك الحالي لمبيعات الدفع عند الاستلام المؤكد استلامها من العملاء.
                            </div>
                        }>
                        <div className="">
                            <GoInfo />
                        </div>
                    </OverlayTrigger>
                </div>
                <div className="flex flex-col gap-16 justify-between my-2 items-center">
                    <CiWallet className='text-9xl' />
                    <strong>لا يوجد لديك رصيد حاليا</strong>
                    <button className='text-gray-600 px-6 py-2  flex flow-row items-center  whitespace-nowrap underline hover:text-green-300 '>
                        <AiOutlineInbox />
                        سجل العمليات
                    </button>
                </div>
            </div>
        </types>
    </>
}
