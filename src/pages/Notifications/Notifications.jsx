import React ,{useState} from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
// import Helper from "../../components/Helper";
import HelpModal from "./helper/HelpModal";
import { FaHome } from "react-icons/fa";
import "./Notification.css";
const Notifications = ({ darkMode, setDarkMode }) => {
    const [notificationSettings, setNotificationSettings] = useState({
      app1: true,
      email1: false,
      app2: true,
      email2: true,
      app3: true,
      email3: true,
      app4: true,
      email4: true,
      app5: true,
      email5: true,
      app6: true,
      email6: true,
      app7: true,
      email7: true,
      app8: true,
      email8: true,
      app9: true,
      email9: true,
      app10: true,
      email10: true,
    });
  
  
    const toggleCheckbox = (checkbox) => {
      setNotificationSettings((prevState) => ({
        ...prevState,
        [checkbox]: !prevState[checkbox],
      }));
    };
  return (
    <>
      <div
        className={`flex flex-wrap' ${darkMode ? "dark" : ""}`}
        style={{ backgroundColor: darkMode ? "#282828" : "transparent" }}
      >
        <Sidebar />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main
          className="w-full h-full lg:w-[calc(100%-260px)] pt-0 px-4 lg:px-10 pb-[10px]"
          style={{
            flexGrow: 2,
            marginTop: "80px",
            // padding: "0 40px 60px",
            height: "100%",
            width: "calc(100% - 260px)",
            minHeight: "100vh",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <div class="notifications-container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom:"10px",
            }}
          >
            <div className="nav-items-profile">
                <FaHome className="nav-icon-profile" />
                <span className="nav-item-home-profile">الرئيسية / اعدادات المتجر </span>
                <span className="nav-item-profile">/ الاشعارات</span>
              </div>
            <div>
              < HelpModal/>
            </div>
          </div>
          <div class="notifications-container-box">
            <h4> <i className="sicon-bell v-align ml-1"></i>الإشعارات</h4>
            <table class="notifications-table">
              <thead>
                <tr>
                  <th>نوع الإشعار</th>
                  <th>إشعارات التطبيق</th>
                  <th>البريد الإلكتروني</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>طلبات جديدة</td>
                  <td>
                    <input type="checkbox" id="app-1" checked={notificationSettings.app1} onChange={() => toggleCheckbox("app1")}/>
                    <label for="app-1"></label>
                  </td>
                  <td>
                    <input type="checkbox" id="email-1" checked={notificationSettings.email1} onChange={() => toggleCheckbox("email1")} />
                    <label for="email-1"></label>
                  </td>
                </tr>
                <tr>
                  <td>إضافة منتج للسلة</td>
                  <td>
                    <input type="checkbox" id="app-2"  checked={notificationSettings.app2} onChange={() => toggleCheckbox("app2")} />
                    <label for="app-2"></label>
                  </td>
                  <td>
                    <input type="checkbox" id="email-2"  checked={notificationSettings.email2} onChange={() => toggleCheckbox("email2")} />
                    <label for="email-2"></label>
                  </td>
                </tr>
                <tr>
                  <td>تقييم المتجر</td>
                  <td>
                    <input type="checkbox" id="app-3"  checked={notificationSettings.app3} onChange={() => toggleCheckbox("app3")} />
                    <label for="app-3"></label>
                  </td>
                  <td>
                    <input type="checkbox" id="email-3"  checked={notificationSettings.email3} onChange={() => toggleCheckbox("email3")} />
                    <label for="email-3"></label>
                  </td>
                </tr>
                <tr>
                  <td>تقييم المنتجات</td>
                  <td>
                    <input type="checkbox" id="app-4"  checked={notificationSettings.app4} onChange={() => toggleCheckbox("app4")} />
                    <label for="app-4"></label>
                  </td>
                  <td>
                    <input type="checkbox" id="email-4"  checked={notificationSettings.email4} onChange={() => toggleCheckbox("email4")}/>
                    <label for="email-4"></label>
                  </td>
                </tr>
                <tr>
                  <td>تقييم شركة الشحن</td>
                  <td>
                    <input type="checkbox" id="app-5"  checked={notificationSettings.app5} onChange={() => toggleCheckbox("app5")} />
                    <label for="app-5"></label>
                  </td>
                  <td>
                    <input type="checkbox" id="email-5" checked={notificationSettings.email5} onChange={() => toggleCheckbox("email5")} />
                    <label for="email-5"></label>
                  </td>
                </tr>
                 <tr>
                   <td>إرسال سؤال من عميل</td>
                  <td>
                    <input type="checkbox" id="app-6"  checked={notificationSettings.app6} onChange={() => toggleCheckbox("app6")} />
                    <label for="app-6"></label>
                  </td>
                  <td>
                    <input type="checkbox" id="email-6" checked={notificationSettings.email6} onChange={() => toggleCheckbox("email6")} />
                    <label for="email-6"></label>
                  </td>
                </tr>
                <tr>
                  <td>تفعيل حسابات موظفي المتجر</td>
                  <td>
                    <input type="checkbox" id="app-7"  checked={notificationSettings.app7} onChange={() => toggleCheckbox("app7")} />
                    <label for="app-7"></label>
                  </td>
                  <td>
                    <input type="checkbox" id="email-7" checked={notificationSettings.email7} onChange={() => toggleCheckbox("email7")} />
                    <label for="email-7"></label>
                  </td>
                </tr>
                <tr>
                  <td>المدفوعات الإلكترونية</td>
                  <td>
                    <input type="checkbox" id="app-8"  checked={notificationSettings.app8}  onChange={() => toggleCheckbox("app8")}/>
                    <label for="app-8"></label>
                  </td>
                  <td>
                    <input type="checkbox" id="email-8"  checked={notificationSettings.email8} onChange={() => toggleCheckbox("email8")}/>
                    <label for="email-8"></label>
                  </td>
                </tr>
                <tr>
                  <td>تنبيه قرب إنتهاء كمية منتج</td>
                  <td>
                    <input type="checkbox" id="app-9"  checked={notificationSettings.app9} onChange={() => toggleCheckbox("app9")}/>
                    <label for="app-9"></label>
                  </td>
                  <td>
                    <input type="checkbox" id="email-9" checked={notificationSettings.email9} onChange={() => toggleCheckbox("email9")} />
                    <label for="email-9"></label>
                  </td>
                </tr>
                <tr>
                  <td>مدفوعات الدفع عند الاستلام</td>
                  <td>
                    <input type="checkbox" id="app-10"  checked={notificationSettings.app10} onChange={() => toggleCheckbox("app10")}/>
                    <label for="app-10"></label>
                  </td>
                  <td>
                    <input type="checkbox" id="email-10"  checked={notificationSettings.email10} onChange={() => toggleCheckbox("email10")} />
                    <label for="email-10"></label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Notifications;
