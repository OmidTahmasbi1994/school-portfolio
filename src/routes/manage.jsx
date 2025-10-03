import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const Manage = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center gap-20 max-md:mt-5 max-md:p-10">
        
      <div className="flex flex-col justify-center items-center p-3 gap-8 bg-gray-100/75 border-solid border-[#191970]/25 border-1 rounded-2xl shadow-gray-400 shadow-lg">

        <div className="flex flex-row justify-center items-start gap-2">

          <div className="h-[200px] flex flex-col justify-start items-center gap-4 p-5 bg-white border-solid border-[#191970]/25 border-1 rounded-2xl shadow-gray-400 shadow-lg">
            <h1 className="text-center max-md:text-xs text-[#191970] font-semibold">
              مدیر آموزشگاه
            </h1>
            <div className="flex flex-col justify-start items-center">
              <div className="rounded-[50%] bg-gray-300 max-md:p-1 max-md:text-xl border-solid border-gray-500 border-1">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="flex flex-col justify-center items-center mt-3 gap-2 text-[#191970]">
                <p className="max-md:text-xs font-semibold">
                  مهرداد کرمی
                </p>
                <p className="max-md:text-xs font-semibold max-md:mt-2">
                  تلفن تماس :
                </p>
                <p className="max-md:text-xs font-semibold">09165142354</p>
              </div>
            </div>
          </div>

          <div className="h-[200px] flex flex-col justify-start items-center gap-4 p-5 bg-white border-solid border-[#191970]/25 border-1 rounded-2xl shadow-gray-400 shadow-lg">
            <h1 className="text-center max-md:text-xs text-[#191970] font-semibold">
              معاون پرورشی
            </h1>
            <div className="flex flex-col justify-start items-center">
              <div className="rounded-[50%] bg-gray-300 max-md:p-1 max-md:text-xl border-solid border-gray-500 border-1">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="flex flex-col justify-center items-center mt-3 gap-2 text-[#191970]">
                <p className="max-md:text-xs font-semibold">
                  محمود نادری
                </p>
                <p className="max-md:text-xs font-semibold max-md:mt-2">
                  تلفن تماس :
                </p>
                <p className="max-md:text-xs font-semibold">09165142354</p>
              </div>
            </div>
          </div>

          <div className="h-[200px] flex flex-col justify-start items-center gap-4 p-5 bg-white border-solid border-[#191970]/25 border-1 rounded-2xl shadow-gray-400 shadow-lg">
            <h1 className="text-center max-md:text-xs text-[#191970] font-semibold">
              معاون آموزشی
            </h1>
            <div className="flex flex-col justify-start items-center">
              <div className="rounded-[50%] bg-gray-300 max-md:p-1 max-md:text-xl border-solid border-gray-500 border-1">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="flex flex-col justify-center items-center mt-3 gap-2 text-[#191970]">
                <p className="max-md:text-xs font-semibold">
                  روح‌الله رفیع‌زاده
                </p>
                <p className="max-md:text-xs font-semibold max-md:mt-2">
                  تلفن تماس :
                </p>
                <p className="max-md:text-xs font-semibold">09165142354</p>
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-row justify-center mb-2">
          <h1 className="text-[#191970] text-sm font-semibold">مدیریت و معاونین</h1>
        </div>

      </div>
    </div>
  );
};
