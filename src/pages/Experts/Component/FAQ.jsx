import React from 'react'
import { Accordion } from 'react-bootstrap'

export default function FAQ() {
    return <>

        <faq className='grid-rows-1 grid xl:grid-cols-2  mx-3 gap-3'>
            <div className="leftside gap-3 flex flex-col">

                <Accordion className="">
                    <Accordion.Item eventKey="0" className='overflow-hidden  bg-[#F8F8F8]'>
                        <Accordion.Header className='overflow-hidden  focus:bg-[#BAF3E5]'>
                            <div style={{ flexGrow: 1, textAlign: "right" }}>
                                ما هي منصة خدمات التاجر؟
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            هي منصة تجمع بين مقدمي الخدمات المحترفين والتجار الباحثين عن خدمات لمتاجرهم. يمكن للمستخدمين الاطلاع على مجموعة متنوعة من الخدمات واختيار ما يناسب احتياجاتهم بسهولة
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Accordion defaultActiveKey={null} className="">
                    <Accordion.Item eventKey="2" className='overflow-hidden  bg-[#F8F8F8]'>
                        <Accordion.Header className='overflow-hidden  focus:bg-[#BAF3E5]'>
                            <div style={{ flexGrow: 1, textAlign: "right" }}>
                                ما هي ضمانات الجودة للخدمات المقدمة عبر المنصة؟
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            نضمن جودة الخدمات المقدمة عبر المنصة من خلال تقييمات المستخدمين ومع ضمان استعادة الأموال في حال عدم الرضا عن العمل المسلّم
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey={null} className="">
                    <Accordion.Item eventKey="4" className='overflow-hidden  bg-[#F8F8F8]'>
                        <Accordion.Header className='overflow-hidden  focus:bg-[#BAF3E5]'>
                            <div style={{ flexGrow: 1, textAlign: "right" }}>
                                هل يمكنني إلغاء الخدمة بعد طلبها واستعادة أموالي؟
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            نعم، يمكنك إلغاء حجزك واسترداد الأموال وفقًا لسياسة الإلغاء المتاحة لكل خدمة
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey={null} className="">
                    <Accordion.Item eventKey="6" className='overflow-hidden  bg-[#F8F8F8]'>
                        <Accordion.Header className='overflow-hidden  focus:bg-[#BAF3E5]'>
                            <div style={{ flexGrow: 1, textAlign: "right" }}>
                                هل يمكنني التواصل مع مزود الخدمة؟
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            يمكنك التواصل مع مزود الخدمة بعد طلب الخدمة واتمامك للدفع
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey={null} className="">
                    <Accordion.Item eventKey="8" className='overflow-hidden  bg-[#F8F8F8]'>
                        <Accordion.Header className='overflow-hidden  focus:bg-[#BAF3E5]'>
                            <div style={{ flexGrow: 1, textAlign: "right" }}>
                                هل يمكنني شراء الخدمات بدون التسجيل مع سلة كتاجر؟
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            يتطلب أن تكون تاجرًا في سلة للاستفادة من خدمات التاجر
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div className="rightside gap-3 flex flex-col">

                <Accordion defaultActiveKey={null} className="">
                    <Accordion.Item eventKey="1" className='overflow-hidden  bg-[#F8F8F8]'>
                        <Accordion.Header className='overflow-hidden  focus:bg-[#BAF3E5]'>
                            <div style={{ flexGrow: 1, textAlign: "right" }}>
                                لماذا خدمات التاجر عن باقي المنصات؟
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            يمكنك من خلالها معرفة الأشخاص أو الجهات الذين تتعامل معهم بشكل مباشر، مع وجود جهات وأشخاص مؤهلين ومحترفين لهذه الخدمة
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey={null} className="">
                    <Accordion.Item eventKey="3" className='overflow-hidden  bg-[#F8F8F8]'>
                        <Accordion.Header className='overflow-hidden  focus:bg-[#BAF3E5]'>
                            <div style={{ flexGrow: 1, textAlign: "right" }}>
                                هل تدعم منصة خدمات التاجر ميزة الدفع الآمنة؟
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            نعم، نحن ندعم عدة خيارات دفع آمنة وموثوقة لتسهيل عمليات الدفع عبر المنصة
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey={null} className="">
                    <Accordion.Item eventKey="5" className='overflow-hidden  bg-[#F8F8F8]'>
                        <Accordion.Header className='overflow-hidden  focus:bg-[#BAF3E5]'>
                            <div style={{ flexGrow: 1, textAlign: "right" }}>
                                ماهي المجالات التي يتم تقديم الخدمات فيها؟
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            تتوفر الخدمات في عدة مجالات مثل تأسيس وتجهيز المتاجر، التسويق والإعلانات، كتابة وصناعة المحتوى، التصاميم، الفيديوهات، الخدمات القانونية والخدمات المالية وغيرها
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey={null} className="">
                    <Accordion.Item eventKey="7" className='overflow-hidden  bg-[#F8F8F8]'>
                        <Accordion.Header className='overflow-hidden  focus:bg-[#BAF3E5]'>
                            <div style={{ flexGrow: 1, textAlign: "right" }}>
                                كيف أستطيع تتبع طلبي واستلام الخدمة؟
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            توفر سلة نظامًا متكاملًا لإدارة الطلب واستلامه والتواصل مع مزود الخدمة من خلال لوحة التحكم الخاصة بالتاجر
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey={null} className="">
                    <Accordion.Item eventKey="9" className='overflow-hidden  bg-[#F8F8F8]'>
                        <Accordion.Header className='overflow-hidden  focus:bg-[#BAF3E5]'>
                            <div style={{ flexGrow: 1, textAlign: "right" }}>
                                هل يمكنني الانضمام كمقدم للخدمات؟
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            نعم، يمكن للمهتمين بتقديم خدماتهم عبر المنصة التسجيل كشركاء في سلة والبدء في عرض خدماتهم للمستخدمين
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </faq>
    </>
}