import React from 'react';
import { Link } from 'react-router-dom';
import { FaShippingFast, FaShieldAlt, FaHeadset, FaRegNewspaper, FaShoppingCart } from 'react-icons/fa';
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";


import '../assets/css/Aboutus.css';
import image from '../assets/images/m1.jpg';
const BlogPage = () => {
  // بيانات المميزات
  const storeFeatures = [
    {
      icon: <FaShippingFast color='red' />,
      title: 'شحن سريع',
      description: 'توصيل خلال 24-48 ساعة لجميع محافظات العراق العظيم '
    },
    {
      icon: <FaShieldAlt color='red' />,
      title: 'ضمان الجودة',
      description: 'إرجاع مجاني خلال اسبوعين'
    },
    {
      icon: <FaHeadset color='red'/>,
      title: 'دعم فني',
      description: 'خدمة عملاء على مدار الساعة'
    }
  ];

  // بيانات المنشورات
  const blogPosts = [
    {
      image: image,
      title: 'نصائح للتسوق في شهر رمضان',
      category: 'نصائح للتسوق في شهر رمضان',
      date: '2025-01-1',
      excerpt: 'تعلم كيفية اختيار أفضل المنتجات المناسبة لاحتياجاتك'
    },
    {
      image: image,
      title: 'عروض الصيف الحصرية',
      category: 'عروض خاصة',
      date: '2025-01-1',
      excerpt: 'خصومات تصل إلى 70% على تشكيلة الصيف'
    },
    
  ];

  return (
    <div className="blog-page">
      {/* القسم العلوي */}
      <header className="blog-header">
        <div className="header-content">
          <h1>مدونة المتجر الإلكتروني</h1>
          <p>أحدث المقالات والنصائح لتجربة تسوق أفضل</p>
        </div>
      </header>

      {/* مميزات المتجر */}
      <section className="features-section">
        <div className="features-container">
          {storeFeatures.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* المبرمج ياسين مثنى */}
      <section className="YMdiv">
        <div className='right'>
          <h1>Yassen Muthanna #1</h1>
          <h4>Iraq - Baghdad</h4>
          <p className='parygraph'> Hello world! I am a professional Iraqi programmer using React, and this website is one of my projects. </p>
        
         <div className='taskMy'>
          <h2 className='items'>#HTML5</h2>
          <h2 className='items'>#CSS3</h2>
          <h2 className='items'>#JAVASCRIPT</h2>
          <h2 className='items'>#REACT JS</h2>
          <h2 className='items'>#REACT NATIVE</h2>
         </div>
         <div className='iconsmedia'>
          <Link className='icons'> <FaFacebookSquare size={28} color='white'/> </Link>
          <Link className='icons'> <FiInstagram size={28} color='white' /> </Link>
          <Link className='icons'> <FaGithub size={28} color='white' /> </Link>
          <Link className='icons'> <FaTelegramPlane size={28} color='white' /> </Link>
          <Link className='icons'></Link>
         </div>
        </div>
        <div className='left'>
          <img src={require ('../assets/images/r.jpg')} className='imageY' />
        </div>
      </section>


      {/* مقالات المدونة */}
      <section className="blog-posts">
        <div className="section-header">
          <FaRegNewspaper color='red' className="section-icon" />
          <h2>أحدث المنشورات</h2>
        </div>
        
        <div className="posts-grid">
          {blogPosts.map((post, index) => (
            <article key={index} className="post-card">
              <img src={post.image} className='imagePost'/>
              <div className="post-header">
                <span className="post-category">{post.category}</span>
                <span className="post-date">{post.date}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <button className="read-more">اقرأ المزيد →</button>
            </article>
          ))}
        </div>
      </section>

      {/* دعوة للعمل */}
      <section className="cta-section">
        <div className="cta-content">
          <FaShoppingCart className="cta-icon" />
          <h2>اكتشف تشكيلتنا الجديدة</h2>
          <p>أكثر من 1000 منتج بانتظارك بأسعار تنافسية</p>
          <button className="cta-button">ابدأ التسوق الآن</button>
        </div>
      </section>

      {/* النشرة البريدية */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>اشترك في نشرتنا البريدية</h2>
          <div className="subscribe-form">
            <input type="email" placeholder="ادخل بريدك الإلكتروني" />
            <button>اشترك</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;