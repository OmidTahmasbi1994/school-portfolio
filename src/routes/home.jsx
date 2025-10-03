import post1 from '../assets/post1.jpg';
import post2 from '../assets/post2.jpg'

export const Home = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center gap-10 max-md:mt-5 max-md:p-15">
      
      <section className="flex flex-col justify-center items-center p-5 bg-gray-100/75 border-solid border-[#191970]/25 border-1 rounded-2xl shadow-gray-400 shadow-lg">
        <div className="flex flex-row justify-center p-2">
          <h2 className="max-md:text-sm text-[#191970] font-semibold text-center">
            عرض تبریک آغاز سال تحصیلی جدید و هفته دفاع مقدس توسط پژوهش سرای امام صادق بلداجی
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center p-2">
          <div className="p-5">
            <img className="rounded-2xl" src={post2} />
          </div>
          <p className="p-3 max-md:text-xs max-md:leading-5 text-start font-[tahoma]">
            با سلام و عرض تبریک به مناسبت آغاز سال تحصیلی جدید.
            <br />
            انشاالله سالی پر از امید جهت دستیابی به قله های بلند پیشرفت آموزشو
            پرورش و نویدبخش نشاط و تحرک در دانش آموزانباشد.
          </p>
        </div>
        <div className="w-full border-solid border-t-1 border-gray-300">
          <p className="mt-4 px-3 max-md:text-[10px] text-end font-[BYekan]">
            1404/7/1
          </p>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center p-5 bg-gray-100/75 border-solid border-[#191970]/25 border-1 rounded-2xl shadow-gray-400 shadow-lg">
        <div className="flex flex-row justify-center p-2">
          <h2 className="max-md:text-sm text-[#191970] font-semibold text-center">
            ساعات جدید آغاز به کار از ابتدای مهر{" "}
            <span className="font-[BYekan]">1404</span>
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center p-2">
          <div className="p-5">
            <img className="rounded-2xl" src={post1} />
          </div>
          <p className="p-3 max-md:text-xs max-md:leading-5 text-center font-[tahoma]">
            علاءالدین رفیع‌زاده، رئیس سازمان اداری و استخدامی ساعات جدید آغاز به
            کار از ابتدای مهر <span className="font-[BYekan]">1404</span> ر
            اعلام کرد.
          </p>
        </div>
        <div className="w-full border-solid border-t-1 border-gray-300">
          <p className="mt-4 px-3 max-md:text-[10px] text-end font-[BYekan]">
            1404/7/1
          </p>
        </div>
      </section>

    </div>
  );
};
