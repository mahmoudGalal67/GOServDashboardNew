import FAQ from "./FAQ";
import Order from "./Order";
import Services from "./Services";
import Subscription from "./Subscription";
import Suggestion from "./Suggestion";
import "./style.css";

export default function MerchantServices() {
  return (
    <>
      <div className="flex flex-col gap-4 text-[#004956]"></div>
      <h2 className="text-2xl fw-bold">كل الخدمات التي يحتاجها متجرك </h2>
      <Services />

      <Order />
      <h3 className="my-4 text-2xl">الأسئلة الشائعة</h3>
      <FAQ />
      <Subscription />
    </>
  );
}
