import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import '../assets/css/Footer.css';

const Footer = () => {
  // تحديد حجم الشاشة
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  // حالات فتح وغلق كل قائمة
  const [quickLinksOpen, setQuickLinksOpen] = useState(false);
  const [socialLinksOpen, setSocialLinksOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // في حالة الشاشة الكبيرة تظهر جميع الأقسام دائماً
  useEffect(() => {
    if (!isMobile) {
      setQuickLinksOpen(true);
      setSocialLinksOpen(true);
      setContactOpen(true);
    }
  }, [isMobile]);

  return (
    <footer className='footer'>
      <div className='content'>
        <div className='logoF'>
          <img src={require('../assets/images/logo.png')} alt="Logo" className='imageLogo'/>
          <h2>افضل متجر بيع بالتجزئة يلبي جميع احتياجاتك العامة والخاصة</h2>
        </div>

        {/* روابط سريعة */}
        <div className='QLinks'>
          <div className="dropdown-header" onClick={() => setQuickLinksOpen(!quickLinksOpen)}>
            <h2>روابط سريعة</h2>
            {isMobile && (quickLinksOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />)}
          </div>
          {quickLinksOpen && (
            <>
            <h2 className='dinone'> روابط سريعة </h2>
              <Link to={''} className='linkF'>المنتجات</Link>
              <Link to={''} className='linkF'>البراندات</Link>
              <Link to={''} className='linkF'>الاكثر شعبية</Link>
              <Link to={''} className='linkF'>طلب خاص</Link>
              <Link to={''} className='linkF'>الجميع</Link>
            </>
          )}
        </div>

        {/* مواقع التواصل */}
        <div className='QLinks'>
          <div className="dropdown-header" onClick={() => setSocialLinksOpen(!socialLinksOpen)}>
            <h2>مواقع التواصل</h2>
            {isMobile && (socialLinksOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />)}
          </div>
          {socialLinksOpen && (
            <>
             <h2 className='dinone'> مواقع التواصل </h2>
              <Link to={''} className='linkF'>فيسبوك</Link>
              <Link to={''} className='linkF'>انستغرام</Link>
              <Link to={''} className='linkF'>تيكتوك</Link>
              <Link to={''} className='linkF'>يوتيوب</Link>
              <Link to={''} className='linkF'>تليجرام</Link>
            </>
          )}
        </div>

        {/* تواصيل سريع */}
        <div className='YLinks'>
          <div className="dropdown-header" onClick={() => setContactOpen(!contactOpen)}>
            <h2>تواصيل سريع</h2>
            {isMobile && (contactOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />)}
          </div>
          {contactOpen && (
            <>
              <Link className='linkF'>
                <IoIosPhonePortrait size={22} /> 077123456789
              </Link>
              <Link className='linkF'>
                <MdOutlineEmail size={22} /> YourEmail@gmail.com
              </Link>
            </>
          )}
        </div>
      </div>

      <h2 className='hkok'>جميع الحقوق محفوظة لمتجر رايفن - 2025 ©</h2>
    </footer>
  );
};

export default Footer;
