import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { barVariants } from "../variants/variants";
import { navVariants } from "../variants/variants";
import { mobileNavVariants } from "../variants/variants";

export const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [routeTitle, setRouteTitle] = useState("اخبار و اطلاعیه ها");

  return (
    <nav className="sticky top-0 left-0 bg-[#ffffff]/50 backdrop-blur-md text-[#191970] border-solid border-[#191970]/15 border-b-3">
      <div className="flex flex-row justify-between items-center p-9 max-md:p-7">
        <motion.div variants={navVariants} initial="first" animate="last">
          <Link to="/" onClick={() => setRouteTitle("اخبار و اطلاعیه ها")}>
            <h1 className="text-2xl max-md:text-lg text-[#191970] font-semibold">
              دبستان آیت الله غفاری
            </h1>
          </Link>
        </motion.div>
        <motion.div
          variants={navVariants}
          initial="first"
          animate="last"
          className="max-md:hidden flex flex-row justify-center items-center gap-7 text-md"
        >
          <Link
            to="/management"
            onClick={() => setRouteTitle("مدیریت و پرسنل")}
          >
            مدیریت آموزشگاه
          </Link>
          <Link to="/achivements" onClick={() => setRouteTitle("جوایز و افتخارات")}>
            جوایز و افتخارات
          </Link>
          <Link to="/arts" onClick={() => setRouteTitle("فرهنگ و هنر")}>
            فرهنگ و هنر
          </Link>
        </motion.div>
        <motion.p
          variants={barVariants}
          initial="first"
          animate="last"
          whileHover="hover"
          onClick={() => setShowMobileNav(!showMobileNav)}
          className="md:hidden text-lg cursor-pointer"
        >
          {showMobileNav ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </motion.p>
      </div>
      {showMobileNav && <MobileNav setShowMobileNav={setShowMobileNav} setRouteTitle={setRouteTitle}/>}
      <div className="text-center p-5 border-solid border-[#191970]/15 border-t-3">
        <h1 className="max-md:text-md text-[#191970] font-semibold">
          {routeTitle}
        </h1>
      </div>
    </nav>
  );
};

const MobileNav = ({setShowMobileNav , setRouteTitle}) => {
  return (
    <motion.div
      variants={mobileNavVariants}
      initial="first"
      animate="last"
      className="md:hidden flex flex-col justify-center items-center pt-5 pb-10 gap-7 text-md font-semibold"
    >
      <Link
        to="/management"
        onClick={() => {
          setShowMobileNav(false);
          setRouteTitle("مدیریت و پرسنل");
        }}
      >
        مدیریت آموزشگاه
      </Link>
      <Link
        to="/achivements"
        onClick={() => {
          setShowMobileNav(false);
          setRouteTitle("جوایز و افتخارات");
        }}
      >
        جوایز و افتخارات
      </Link>
      <Link
        to="/arts"
        onClick={() => {
          setShowMobileNav(false);
          setRouteTitle("فرهنگ و هنر");
        }}
      >
        فرهنگ و هنر
      </Link>
    </motion.div>
  );
};
