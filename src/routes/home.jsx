import warning_1 from "../assets/warning_1.jpg";

export const Home = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center gap-20 max-md:mt-15 p-10">
      <section className="flex flex-col justify-center items-center p-5 bg-gray-100/75 border-solid border-[#191970]/25 border-1 rounded-2xl shadow-gray-400 shadow-lg">
        <div className="flex flex-row justify-center p-2">
          <h2 className="max-md:text-sm text-[#191970] font-semibold">
            تعطیلی مدارس  چهارمحال و بختیاری یکشنبه  ۶ مهر ۱۴۰۴
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center p-2">
          <div className="p-5">
            <img className="rounded-2xl" src={warning_1} />
          </div>
          <p className="p-3 max-md:text-xs max-md:leading-5 text-center font-[tahoma]">
            در حال حاضر هیچ اعلام رسمی یا قطعی دربارهٔ تعطیلی مدارس در روز
            یکشنبه ۶ مهر ۱۴۰۴ وجود ندارد. در این تاریخ معمولاً مدارس به دلیل
            بازگشایی فعال هستند. در صورت بروز شرایط خاص (مانند شرایط جوی،
            تعطیلات رسمی یا تصمیمات استانی)، احتمال تعطیلی وجود خواهد داشت که به
            محض اعلام، این خبر بروزرسانی خواهد شد.
          </p>
        </div>
        <div className="w-full border-solid border-t-1 border-gray-300">
          <p className="mt-3 px-5 max-md:text-[10px] text-end font-[BYekan]">1404/10/22</p>
        </div>
      </section>
    </div>
  );
};
