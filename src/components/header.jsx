import {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import {motion} from 'framer-motion'
import {barVariants} from '../variants/variants'
import {navVariants} from '../variants/variants'
import {mobileNavVariants} from '../variants/variants'


export const Header = () => {
    const [showMobileNav , setShowMobileNav] = useState(false)

  return (
    <nav className="sticky top-0 left-0 bg-[#ffffff]/75 backdrop-blur-sm text-[#191970] border-solid font-[tahoma] border-solid border-[#191970]/15 border-b-1">
      <div className="flex flex-row justify-between items-center p-9 max-md:p-7">
        <motion.div variants={navVariants} initial="first" animate="last">
          <h1 className="text-2xl max-md:text-lg cursor-pointer">دبستان آیت الله غفاری</h1>
        </motion.div>
        <motion.div variants={navVariants} initial="first" animate="last" className="max-md:hidden flex flex-row justify-center items-center gap-7 text-md">
          <span className="cursor-pointer">مدیریت</span>
          <span className="cursor-pointer">افتخارات</span>
          <span className="cursor-pointer">فرهنگ و هنر</span>
        </motion.div>
        <motion.p variants={barVariants} initial="first" animate="last" whileHover="hover" onClick={()=>setShowMobileNav(!showMobileNav)} className="md:hidden text-lg cursor-pointer">{showMobileNav ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}</motion.p>
      </div>
      {showMobileNav && <MobileNav />}
    </nav>
  );
};

const MobileNav = () => {
  return (
    <motion.div variants={mobileNavVariants} initial="first" animate="last" className="md:hidden flex flex-col justify-center items-center pt-5 pb-10 gap-7 text-md">
      <span className="cursor-pointer">مدیریت</span>
      <span className="cursor-pointer">افتخارات</span>
      <span className="cursor-pointer">فرهنگ و هنر</span>
    </motion.div>
  );
};