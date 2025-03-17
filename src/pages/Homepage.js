import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiUser, FiMenu, FiX } from "react-icons/fi";
import { RiShoppingBag4Line } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { FiArrowLeft } from "react-icons/fi";
import { TbShoppingBag } from "react-icons/tb";
import { FaStar } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { CiStar } from "react-icons/ci";

import '../assets/css/app.css';

const Home = () => {
  return (
    <div className='appPage'>

      <div className="image-grid"> 
        <div className="column small-images">
          <img src={require('../assets/images/p1.png')} alt="صورة صغيرة 1" />
          <img src={require('../assets/images/p2.jpg')} alt="صورة صغيرة 2" />
        </div>
        <div className="column large-image">
          <img src={require('../assets/images/bg.jpg')} alt="صورة كبيرة" />
        </div>
      </div>
      {/* بوابات الدفع اعلانات */}
      <div className='ADScard'>
        <div className='item-card'>
        <img src={require('../assets/svg/secure-payment.svg').default} className='svgitem' alt="Easy Return" />
        <div className='heading-item'>
          <h2> بوابات دفع آمنة </h2>
          <h4> 48+ بوابة دفع لضمان أمنك. </h4>
        </div>
        </div>
        <div className='item-card'>
        <img src={require('../assets/svg/customer-review.svg').default} className='svgitem' alt="Easy Return" />
        <div className='heading-item'>
          <h2> مراجعات العملاء الأصيلة </h2>
          <h4> العثور على مراجعات موثقة معروضة على منصتنا .</h4>
        </div>
        </div>
        <div className='item-card'>
        <img src={require('../assets/svg/support.svg').default} className='svgitem' alt="Easy Return" />
        <div className='heading-item'>
          <h2> دعم العملاء 24/7 </h2>
          <h4> دائمًا فريق دعم العملاء متاح لك. </h4>
        </div>
        </div>
        <div className='item-card'>
        <img src={require('../assets/svg/easy-return.svg').default} className='svgitem' alt="Easy Return" />
        <div className='heading-item'>
          <h2> سياسة الإرجاع السهل </h2>
          <h4> إذا لم تكن راضيًا، إرجعها بدون مشقة. </h4>
        </div>
        </div>
      </div>
      {/* المنتجات  */}
      <div className='prodects'>
        <div className='titlePro'>
          <h2>المنتجات الشعبية</h2>
          <Link to={'/podects'} className='LinkPro'> عرض الكل <FiArrowLeft size={22} color='black'/> </Link>
        </div>
        <div className='contentPro'>
          <Link to={''} className='itemPro'>
            <img src={require ('../assets/images/pro1.png')} className='imagePro' alt="Pro Items" />
            <div className='headingPro'>
              <h2 className='title' >طاىرة العاب اطفال يمكن تحكم بيها</h2>
              <div className='pisce'>
                <p className='pisceP'> <span className='iraqi'>السعر :</span> 10000 <span className='payy'>د.ع</span> </p>
                <p className='pisceP kadeem'> <s> 14000 <span className='payy'>د.ع</span> </s> </p>
              </div>
              <div className='starts'>
              <CiStar size={22} color='red' /> <span> &#40; 10 {/* هنا عدد النجوم */}&#41; </span>
              </div>
              <div className='btns'>
                <Link to={''} className='btnPro'>شراء الان</Link>
                <button className='btnfan'><TbShoppingBag className='icon-btn' size={22} /></button>
              </div>
            </div>
          </Link>
          <Link to={''} className='itemPro'>
            <img src={require ('../assets/images/pro1.png')} className='imagePro' alt="Pro Items" />
            <div className='headingPro'>
              <h2 className='title' >طاىرة العاب اطفال يمكن تحكم بيها</h2>
              <div className='pisce'>
                <p className='pisceP'> <span className='iraqi'>السعر :</span> 10000 <span className='payy'>د.ع</span> </p>
                <p className='pisceP kadeem'> <s> 14000 <span className='payy'>د.ع</span> </s> </p>
              </div>
              <div className='starts'>
              <CiStar size={22} color='red' /> <span> &#40; 10 {/* هنا عدد النجوم */}&#41; </span>
              </div>
              <div className='btns'>
                <Link to={''} className='btnPro'>شراء الان</Link>
                <button className='btnfan'><TbShoppingBag className='icon-btn' size={22} /></button>
              </div>
            </div>
          </Link>
          <Link to={''} className='itemPro'>
            <img src={require ('../assets/images/pro1.png')} className='imagePro' alt="Pro Items" />
            <div className='headingPro'>
              <h2 className='title' >طاىرة العاب اطفال يمكن تحكم بيها</h2>
              <div className='pisce'>
                <p className='pisceP'> <span className='iraqi'>السعر :</span> 10000 <span className='payy'>د.ع</span> </p>
                <p className='pisceP kadeem'> <s> 14000 <span className='payy'>د.ع</span> </s> </p>
              </div>
              <div className='starts'>
              <CiStar size={22} color='red' /> <span> &#40; 10 {/* هنا عدد النجوم */}&#41; </span>
              </div>
              <div className='btns'>
                <Link to={''} className='btnPro'>شراء الان</Link>
                <button className='btnfan'><TbShoppingBag className='icon-btn' size={22} /></button>
              </div>
            </div>
          </Link>
          <Link to={''} className='itemPro'>
            <img src={require ('../assets/images/pro1.png')} className='imagePro' alt="Pro Items" />
            <div className='headingPro'>
              <h2 className='title' >طاىرة العاب اطفال يمكن تحكم بيها</h2>
              <div className='pisce'>
                <p className='pisceP'> <span className='iraqi'>السعر :</span> 10000 <span className='payy'>د.ع</span> </p>
                <p className='pisceP kadeem'> <s> 14000 <span className='payy'>د.ع</span> </s> </p>
              </div>
              <div className='starts'>
              <CiStar size={22} color='red' /> <span> &#40; 10 {/* هنا عدد النجوم */}&#41; </span>
              </div>
              <div className='btns'>
                <Link to={''} className='btnPro'>شراء الان</Link>
                <button className='btnfan'><TbShoppingBag className='icon-btn' size={22} /></button>
              </div>
            </div>
          </Link>
          <Link to={''} className='itemPro'>
            <img src={require ('../assets/images/pro1.png')} className='imagePro' alt="Pro Items" />
            <div className='headingPro'>
              <h2 className='title' >طاىرة العاب اطفال يمكن تحكم بيها</h2>
              <div className='pisce'>
                <p className='pisceP'> <span className='iraqi'>السعر :</span> 10000 <span className='payy'>د.ع</span> </p>
                <p className='pisceP kadeem'> <s> 14000 <span className='payy'>د.ع</span> </s> </p>
              </div>
              <div className='starts'>
              <CiStar size={22} color='red' /> <span> &#40; 10 {/* هنا عدد النجوم */}&#41; </span>
              </div>
              <div className='btns'>
                <Link to={''} className='btnPro'>شراء الان</Link>
                <button className='btnfan'><TbShoppingBag className='icon-btn' size={22} /></button>
              </div>
            </div>
          </Link>
          <Link to={''} className='itemPro'>
            <img src={require ('../assets/images/pro1.png')} className='imagePro' alt="Pro Items" />
            <div className='headingPro'>
              <h2 className='title' >طاىرة العاب اطفال يمكن تحكم بيها</h2>
              <div className='pisce'>
                <p className='pisceP'> <span className='iraqi'>السعر :</span> 10000 <span className='payy'>د.ع</span> </p>
                <p className='pisceP kadeem'> <s> 14000 <span className='payy'>د.ع</span> </s> </p>
              </div>
              <div className='starts'>
              <CiStar size={22} color='red' /> <span> &#40; 10 {/* هنا عدد النجوم */}&#41; </span>
              </div>
              <div className='btns'>
                <Link to={''} className='btnPro'>شراء الان</Link>
                <button className='btnfan'><TbShoppingBag className='icon-btn' size={22} /></button>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/*     الامنتجات  الأعلى تقييماً     */}
      <div className='MostPopular' >
        <div className='titleM'>
          <h2> المنتجات الأعلى تقييماً  <FaStar size={22} color='#ffd000'/></h2>
          <Link to={'/podects'} className='LinkM'> عرض الكل <FiArrowLeft size={22} color='black'/> </Link>
        </div>
        <div className='contentM'>

          <div className='itemM'>
            <img src={require ('../assets/images/m1.jpg')} className='imageM' />
            <div className='headingM' >
               <h2 className='title' >طاىرة العاب اطفال يمكن تحكم بيها</h2>
            </div>
            <div className='startsM'>
            <FaStar size={22} color='#ffd000'/> <span className='tqeem'> 5.0 </span>
            </div>
            <Link to={''} className='btnM'> عرض المنتج <FiArrowLeft size={22} color='black'/> </Link>
          </div>
          <div className='itemM'>
            <img src={require ('../assets/images/m1.jpg')} className='imageM' />
            <div className='headingM' >
               <h2 className='title' >طاىرة العاب اطفال يمكن تحكم بيها</h2>
            </div>
            <div className='startsM'>
            <FaStar size={22} color='#ffd000'/> <span className='tqeem'> 5.0 </span>
            </div>
            <Link to={''} className='btnM'> عرض المنتج <FiArrowLeft size={22} color='black'/> </Link>
          </div>

          <div className='itemM'>
            <img src={require ('../assets/images/m1.jpg')} className='imageM' />
            <div className='headingM' >
               <h2 className='title' >طاىرة العاب اطفال يمكن تحكم بيها</h2>
            </div>
            <div className='startsM'>
            <FaStar size={22} color='#ffd000'/> <span className='tqeem'> 5.0 </span>
            </div>
            <Link to={''} className='btnM'> عرض المنتج <FiArrowLeft size={22} color='black'/> </Link>
          </div>

          <div className='itemM'>
            <img src={require ('../assets/images/m1.jpg')} className='imageM' />
            <div className='headingM' >
               <h2 className='title' >طاىرة العاب اطفال يمكن تحكم بيها</h2>
            </div>
            <div className='startsM'>
            <FaStar size={22} color='#ffd000'/> <span className='tqeem'> 5.0 </span>
            </div>
            <Link to={''} className='btnM'> عرض المنتج <FiArrowLeft size={22} color='black'/> </Link>
          </div>

        </div>
      </div>
      {/* -------------- منتجات الك ----------------- */}
      <div className='prodects'>
        <div className='titlePro'>
          <h2>المنتجات مخصصة لك</h2>
          <Link to={'/podects'} className='LinkPro'> عرض الكل <FiArrowLeft size={22} color='black'/> </Link>
        </div>
        <div className='contentPro'>
          <Link to={''} className='itemPro'>
            <img src={require ('../assets/images/pro1.png')} className='imagePro' alt="Pro Items" />
            <div className='headingPro'>
              <h2 className='title' >طاىرة العاب اطفال يمكن تحكم بيها</h2>
              <div className='pisce'>
                <p className='pisceP'> <span className='iraqi'>السعر :</span> 10000 <span className='payy'>د.ع</span> </p>
                <p className='pisceP kadeem'> <s> 14000 <span className='payy'>د.ع</span> </s> </p>
              </div>
              <div className='starts'>
              <CiStar size={22} color='red' /> <span> &#40; 10 {/* هنا عدد النجوم */}&#41; </span>
              </div>
              <div className='btns'>
                <Link to={''} className='btnPro'>شراء الان</Link>
                <button className='btnfan'><TbShoppingBag className='icon-btn' size={22} /></button>
              </div>
            </div>
          </Link>
          <Link to={''} className='itemPro'>
            <img src={require ('../assets/images/pro1.png')} className='imagePro' alt="Pro Items" />
            <div className='headingPro'>
              <h2 className='title' >طاىرة العاب اطفال يمكن تحكم بيها</h2>
              <div className='pisce'>
                <p className='pisceP'> <span className='iraqi'>السعر :</span> 10000 <span className='payy'>د.ع</span> </p>
                <p className='pisceP kadeem'> <s> 14000 <span className='payy'>د.ع</span> </s> </p>
              </div>
              <div className='starts'>
              <CiStar size={22} color='red' /> <span> &#40; 10 {/* هنا عدد النجوم */}&#41; </span>
              </div>
              <div className='btns'>
                <Link to={''} className='btnPro'>شراء الان</Link>
                <button className='btnfan'><TbShoppingBag className='icon-btn' size={22} /></button>
              </div>
            </div>
          </Link>
          <Link to={''} className='itemPro'>
            <img src={require ('../assets/images/pro1.png')} className='imagePro' alt="Pro Items" />
            <div className='headingPro'>
              <h2 className='title' >طاىرة العاب اطفال يمكن تحكم بيها</h2>
              <div className='pisce'>
                <p className='pisceP'> <span className='iraqi'>السعر :</span> 10000 <span className='payy'>د.ع</span> </p>
                <p className='pisceP kadeem'> <s> 14000 <span className='payy'>د.ع</span> </s> </p>
              </div>
              <div className='starts'>
              <CiStar size={22} color='red' /> <span> &#40; 10 {/* هنا عدد النجوم */}&#41; </span>
              </div>
              <div className='btns'>
                <Link to={''} className='btnPro'>شراء الان</Link>
                <button className='btnfan'><TbShoppingBag className='icon-btn' size={22} /></button>
              </div>
            </div>
          </Link>
          <Link to={''} className='itemPro'>
            <img src={require ('../assets/images/pro1.png')} className='imagePro' alt="Pro Items" />
            <div className='headingPro'>
              <h2 className='title' >طاىرة العاب اطفال يمكن تحكم بيها</h2>
              <div className='pisce'>
                <p className='pisceP'> <span className='iraqi'>السعر :</span> 10000 <span className='payy'>د.ع</span> </p>
                <p className='pisceP kadeem'> <s> 14000 <span className='payy'>د.ع</span> </s> </p>
              </div>
              <div className='starts'>
              <CiStar size={22} color='red' /> <span> &#40; 10 {/* هنا عدد النجوم */}&#41; </span>
              </div>
              <div className='btns'>
                <Link to={''} className='btnPro'>شراء الان</Link>
                <button className='btnfan'><TbShoppingBag className='icon-btn' size={22} /></button>
              </div>
            </div>
          </Link>
          <Link to={''} className='itemPro'>
            <img src={require ('../assets/images/pro1.png')} className='imagePro' alt="Pro Items" />
            <div className='headingPro'>
              <h2 className='title' >طاىرة العاب اطفال يمكن تحكم بيها</h2>
              <div className='pisce'>
                <p className='pisceP'> <span className='iraqi'>السعر :</span> 10000 <span className='payy'>د.ع</span> </p>
                <p className='pisceP kadeem'> <s> 14000 <span className='payy'>د.ع</span> </s> </p>
              </div>
              <div className='starts'>
              <CiStar size={22} color='red' /> <span> &#40; 10 {/* هنا عدد النجوم */}&#41; </span>
              </div>
              <div className='btns'>
                <Link to={''} className='btnPro'>شراء الان</Link>
                <button className='btnfan'><TbShoppingBag className='icon-btn' size={22} /></button>
              </div>
            </div>
          </Link>
          <Link to={''} className='itemPro'>
            <img src={require ('../assets/images/pro1.png')} className='imagePro' alt="Pro Items" />
            <div className='headingPro'>
              <h2 className='title' >طاىرة العاب اطفال يمكن تحكم بيها</h2>
              <div className='pisce'>
                <p className='pisceP'> <span className='iraqi'>السعر :</span> 10000 <span className='payy'>د.ع</span> </p>
                <p className='pisceP kadeem'> <s> 14000 <span className='payy'>د.ع</span> </s> </p>
              </div>
              <div className='starts'>
              <CiStar size={22} color='red' /> <span> &#40; 10 {/* هنا عدد النجوم */}&#41; </span>
              </div>
              <div className='btns'>
                <Link to={''} className='btnPro'>شراء الان</Link>
                <button className='btnfan'><TbShoppingBag className='icon-btn' size={22} /></button>
              </div>
            </div>
          </Link>

          <Link to={''} className='itemPro'>
            <img src={require ('../assets/images/pro1.png')} className='imagePro' alt="Pro Items" />
            <div className='headingPro'>
              <h2 className='title' >طاىرة العاب اطفال يمكن تحكم بيها</h2>
              <div className='pisce'>
                <p className='pisceP'> <span className='iraqi'>السعر :</span> 10000 <span className='payy'>د.ع</span> </p>
                <p className='pisceP kadeem'> <s> 14000 <span className='payy'>د.ع</span> </s> </p>
              </div>
              <div className='starts'>
              <CiStar size={22} color='red' /> <span> &#40; 10 {/* هنا عدد النجوم */}&#41; </span>
              </div>
              <div className='btns'>
                <Link to={''} className='btnPro'>شراء الان</Link>
                <button className='btnfan'><TbShoppingBag className='icon-btn' size={22} /></button>
              </div>
            </div>
          </Link>

          <Link to={''} className='itemPro'>
            <img src={require ('../assets/images/pro1.png')} className='imagePro' alt="Pro Items" />
            <div className='headingPro'>
              <h2 className='title' >طاىرة العاب اطفال يمكن تحكم بيها</h2>
              <div className='pisce'>
                <p className='pisceP'> <span className='iraqi'>السعر :</span> 10000 <span className='payy'>د.ع</span> </p>
                <p className='pisceP kadeem'> <s> 14000 <span className='payy'>د.ع</span> </s> </p>
              </div>
              <div className='starts'>
              <CiStar size={22} color='red' /> <span> &#40; 10 {/* هنا عدد النجوم */}&#41; </span>
              </div>
              <div className='btns'>
                <Link to={''} className='btnPro'>شراء الان</Link>
                <button className='btnfan'><TbShoppingBag className='icon-btn' size={22} /></button>
              </div>
            </div>
          </Link>
          <Link to={''} className='itemPro'>
            <img src={require ('../assets/images/pro1.png')} className='imagePro' alt="Pro Items" />
            <div className='headingPro'>
              <h2 className='title' >طاىرة العاب اطفال يمكن تحكم بيها</h2>
              <div className='pisce'>
                <p className='pisceP'> <span className='iraqi'>السعر :</span> 10000 <span className='payy'>د.ع</span> </p>
                <p className='pisceP kadeem'> <s> 14000 <span className='payy'>د.ع</span> </s> </p>
              </div>
              <div className='starts'>
              <CiStar size={22} color='red' /> <span> &#40; 10 {/* هنا عدد النجوم */}&#41; </span>
              </div>
              <div className='btns'>
                <Link to={''} className='btnPro'>شراء الان</Link>
                <button className='btnfan'><TbShoppingBag className='icon-btn' size={22} /></button>
              </div>
            </div>
          </Link>
          <Link to={''} className='itemPro'>
            <img src={require ('../assets/images/pro1.png')} className='imagePro' alt="Pro Items" />
            <div className='headingPro'>
              <h2 className='title' >طاىرة العاب اطفال يمكن تحكم بيها</h2>
              <div className='pisce'>
                <p className='pisceP'> <span className='iraqi'>السعر :</span> 10000 <span className='payy'>د.ع</span> </p>
                <p className='pisceP kadeem'> <s> 14000 <span className='payy'>د.ع</span> </s> </p>
              </div>
              <div className='starts'>
              <CiStar size={22} color='red' /> <span> &#40; 10 {/* هنا عدد النجوم */}&#41; </span>
              </div>
              <div className='btns'>
                <Link to={''} className='btnPro'>شراء الان</Link>
                <button className='btnfan'><TbShoppingBag className='icon-btn' size={22} /></button>
              </div>
            </div>
          </Link>
          <Link to={''} className='itemPro'>
            <img src={require ('../assets/images/pro1.png')} className='imagePro' alt="Pro Items" />
            <div className='headingPro'>
              <h2 className='title' >طاىرة العاب اطفال يمكن تحكم بيها</h2>
              <div className='pisce'>
                <p className='pisceP'> <span className='iraqi'>السعر :</span> 10000 <span className='payy'>د.ع</span> </p>
                <p className='pisceP kadeem'> <s> 14000 <span className='payy'>د.ع</span> </s> </p>
              </div>
              <div className='starts'>
              <CiStar size={22} color='red' /> <span> &#40; 10 {/* هنا عدد النجوم */}&#41; </span>
              </div>
              <div className='btns'>
                <Link to={''} className='btnPro'>شراء الان</Link>
                <button className='btnfan'><TbShoppingBag className='icon-btn' size={22} /></button>
              </div>
            </div>
          </Link>
          <Link to={''} className='itemPro'>
            <img src={require ('../assets/images/pro1.png')} className='imagePro' alt="Pro Items" />
            <div className='headingPro'>
              <h2 className='title' >طاىرة العاب اطفال يمكن تحكم بيها</h2>
              <div className='pisce'>
                <p className='pisceP'> <span className='iraqi'>السعر :</span> 10000 <span className='payy'>د.ع</span> </p>
                <p className='pisceP kadeem'> <s> 14000 <span className='payy'>د.ع</span> </s> </p>
              </div>
              <div className='starts'>
              <CiStar size={22} color='red' /> <span> &#40; 10 {/* هنا عدد النجوم */}&#41; </span>
              </div>
              <div className='btns'>
                <Link to={''} className='btnPro'>شراء الان</Link>
                <button className='btnfan'><TbShoppingBag className='icon-btn' size={22} /></button>
              </div>
            </div>
          </Link>

          
        </div>
      </div>

    </div>
  );
};

export default Home;
