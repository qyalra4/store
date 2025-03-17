/* --------------  صفحة الهيدر  --------------- */
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiUser, FiMenu, FiX } from "react-icons/fi";
import { RiShoppingBag4Line } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import '../assets/css/Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dropdownRef = useRef(null);
  const sidebarRef = useRef(null);

  const handleToggle = () => setIsOpen(!isOpen);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleSelect = (option) => {
    if (option === 'تنزيل متجر بلي') window.open('', ''); /* الفراغ لاول للرابط و افراغ الثاني لتحديد اين يتم فتح الرابط */
    if (option === 'آب ستور') window.open('', '');
    setIsOpen(false);
  };

  // اغلاق القائمة عند الضغط خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
        /* --------------------  المبرمج ياسين مثنى 👨🏻‍💻 ------------------------ */
  return (
    <header className='header'>
      {/* القائمة الجانبية للموبايل */}
      <div className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`}>
        <div ref={sidebarRef} className="sidebar">
          <button className="close-btn" onClick={toggleSidebar}>
            <FiX size={24} />
          </button>
          <div className="sidebar-content">
            <Link to={'/'} className='sidebar-link'>الرئيسية</Link>
            <Link to={'/products'} className='sidebar-link'>المنتجات</Link>
            <Link to={'/brands'} className='sidebar-link'>البراندات</Link>
            <Link to={'/special-order'} className='sidebar-link'>طلب خاص</Link>
            <Link to={'/Aboutus'} className='sidebar-link'> المدونة </Link>
            <div className="mobile-download">
              <IoIosPhonePortrait size={20} />
              <select className="select" onChange={(e) => handleSelect(e.target.value)}>
                <option value="">قم بتنزيل تطبيقنا</option>
                <option value="تنزيل متجر بلي">تنزيل متجر بلي</option>
                <option value="آب ستور">آب ستور</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* الجزء الاول من الهيدر */}
      <div className='header-top'>
        <button className="menu-toggle" onClick={toggleSidebar}>
          <FiMenu size={24} />
        </button>

        <div className='logoApp'>
          <img src={require('../assets/images/logo.png')} className='image' alt="logo" />
          <h2>متجر رايفن </h2>
        </div>

        <div className='searchDiv'>
          <input type='text' className='search' placeholder='البحث عن منتجات ..' />
          <button className='btn'><IoSearchSharp size={22} color='white' className='iconS' /></button>
        </div>

        <div className='link-header'>
          <Link to={'/Cart'} className='linkH'><span className='span'>5</span><FiHeart size={23}/></Link>
          <Link to={'/favorites'} className='linkH'><span className='span'>0</span><RiShoppingBag4Line size={23}/></Link>
          <Link to={'/auth'} className='linkH login'><FiUser size={23}/>تسجيل الدخول</Link>
        </div>
      </div>

      {/* الجزء الثاني من الهيدر */}
      <div className='header-bottom'>
        <div className='right'>
          <h2>الفئات</h2>
        </div>

        <div className='center'>
          <Link to={'/'} className='LinkPages'>الرئيسية</Link>
          <Link to={'/products'} className='LinkPages'>المنتجات</Link>
          <Link to={'/brands'} className='LinkPages'>البراندات</Link>
          <Link to={'/special-order'} className='LinkPages'>طلب خاص</Link>
          <Link to={'/Aboutus'} className='LinkPages'> المدونة </Link>
        </div>

        <div className="download-dropdown">
          <IoIosPhonePortrait size={20} className='icons' />
          <select className="select" onChange={(e) => handleSelect(e.target.value)}>
            <option value="">قم بتنزيل تطبيقنا</option>
            <option value="تنزيل متجر بلي">تنزيل متجر بلي</option>
            <option value="آب ستور">آب ستور</option>
          </select>
        </div>
      </div>
    </header>
  );
};
    
export default Header;