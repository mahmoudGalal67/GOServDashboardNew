import React from 'react'
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div
      className="fixed-footer  fixed bottom-0 left-0  h-24 lg:h-[57.5px] p-5 "
    >
      <div
        className="flex justify-center items-center text-white   translate-x-0 lg:translate-x-[-130px]"
        style={{ 
          // transform: "translateX(-130px)",
           height: "100%" }}
      >
        <p>عجبتك التجربة؟ انطلق بتجارتك اليوم مع سلة بسهولة و بدون أي عمولة!</p>
        <a
          href="/"
          style={{
            backgroundColor: "#baf3e6",
            padding: "10px 16px",
            margin: "0 20px 0 5px",
            fontSize: "14px",
            borderRadius: "5px",
            color: "#003c47",
          }}
        >
          {" "}
          انشئ متجرك مجاناً
        </a>
        <button
        className='top-0 lg:top-[-50px] left-3 lg:left-[170px]'
          style={{
            position: "absolute",
            // top: "-50px",
            // left: "170px",
            backgroundColor: "#96edd9",
            borderRadius: "50%",
            width: "56px",
            height: "56px",
            color: "#003c47",
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <MdOutlineEmail />
        </button>
      </div>
    </div>
  );
}

export default Footer
