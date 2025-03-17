// src/pages/Brands.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";
import { TbShoppingBag } from "react-icons/tb";
import { CiStar } from "react-icons/ci";

import apple from '../assets/images/apple.jpg';
import microsoft from '../assets/images/microsoft.png';
import dell from '../assets/images/dell.png';
import snmsung from '../assets/images/snmsung.png';
import '../assets/css/Brands.css';


const Brands = () => {
  // بيانات تجريبية
  const brands = [
    { id: 1, name: 'Apple', logo: apple, products: 120 },
    { id: 2, name: 'Microsoft', logo: microsoft, products: 95 },
    { id: 3, name: 'Dell', logo: dell, products: 200 },
    { id: 4, name: 'Samsung', logo: snmsung, products: 150 },

  ];

  const products = [
    {
      id: 1,
      title: 'طاىرة العاب اطفال يمكن تحكم بيها',
      price: 10000,
      oldPrice: 14000,
      rating: 10,
      image: require('../assets/images/pro1.png')
    },
    {
      id: 2,
      title: 'طاىرة العاب اطفال يمكن تحكم بيها',
      price: 10000,
      oldPrice: 14000,
      rating: 10,
      image: require('../assets/images/pro1.png')
    },
    {
      id: 3,
      title: 'طاىرة العاب اطفال يمكن تحكم بيها',
      price: 10000,
      oldPrice: 14000,
      rating: 10,
      image: require('../assets/images/pro1.png')
    },
    {
      id: 4,
      title: 'طاىرة العاب اطفال يمكن تحكم بيها',
      price: 10000,
      oldPrice: 14000,
      rating: 10,
      image: require('../assets/images/pro1.png')
    },
    {
      id: 5,
      title: 'طاىرة العاب اطفال يمكن تحكم بيها',
      price: 10000,
      oldPrice: 14000,
      rating: 10,
      image: require('../assets/images/pro1.png')
    },
    {
      id: 6,
      title: 'طاىرة العاب اطفال يمكن تحكم بيها',
      price: 10000,
      oldPrice: 14000,
      rating: 10,
      image: require('../assets/images/pro1.png')
    },
    {
      id: 7,
      title: 'طاىرة العاب اطفال يمكن تحكم بيها',
      price: 10000,
      oldPrice: 14000,
      rating: 10,
      image: require('../assets/images/pro1.png')
    },
    {
      id: 8,
      title: 'طاىرة العاب اطفال يمكن تحكم بيها',
      price: 10000,
      oldPrice: 14000,
      rating: 10,
      image: require('../assets/images/pro1.png')
    },
    {
      id: 9,
      title: 'طاىرة العاب اطفال يمكن تحكم بيها',
      price: 10000,
      oldPrice: 14000,
      rating: 10,
      image: require('../assets/images/pro1.png')
    },
    {
      id: 10,
      title: 'طاىرة العاب اطفال يمكن تحكم بيها',
      price: 10000,
      oldPrice: 14000,
      rating: 10,
      image: require('../assets/images/pro1.png')
    },
    {
      id: 11,
      title: 'طاىرة العاب اطفال يمكن تحكم بيها',
      price: 10000,
      oldPrice: 14000,
      rating: 10,
      image: require('../assets/images/pro1.png')
    },
    {
      id: 12,
      title: 'طاىرة العاب اطفال يمكن تحكم بيها',
      price: 10000,
      oldPrice: 14000,
      rating: 10,
      image: require('../assets/images/pro1.png')
    },
  ];

  return (
    <div className="brands-page">
      {/* قسم الهيدر */}
      <header className="brands-header">
        <h1>استكشف العلامات التجارية</h1>
        <p>اكتشف أفضل المنتجات من أشهر الماركات العالمية</p>
      </header>

      {/* تصنيف البراندات */}
      <section className="brands-categories">
        <div className="categories-grid">
          <button className="category-btn active">الكل</button>
          <button className="category-btn">إلكترونيات</button>
          <button className="category-btn">ملابس</button>
          <button className="category-btn">أجهزة</button>
          <button className="category-btn">إكسسوارات</button>
        </div>
      </section>

      {/* قائمة البراندات */}
      <section className="brands-list">
        <div className="brands-grid">
          {brands.map(brand => (
            <div key={brand.id} className="brand-card">
              <img src={brand.logo} alt={brand.name} className="brand-logo" />
              <div className="brand-info">
                <h3>{brand.name}</h3>
                <p>{brand.products.toLocaleString()} منتج</p>
                <Link to={`/brands/${brand.id}`} className="explore-btn">
                  تصفح المنتجات <FiArrowLeft />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* منتجات مميزة من البراندات */}
      <section className="featured-products">
        <div className="section-header">
          <h2>منتجات مميزة</h2>
          <Link to="/products" className="view-all">
            عرض الكل <FiArrowLeft />
          </Link>
        </div>

        <div className='prodects'>
                <div className='contentPro'>
                  {products.map(product => (
                    <Link to={'/Product'} className='itemPro' key={product.id}>
                      <img src={product.image} className='imagePro' alt="Pro Items" />
                      <div className='headingPro'>
                        <h2 className='title'>{product.title}</h2>
                        <div className='pisce'>
                          <p className='pisceP'> 
                            <span className='iraqi'>السعر :</span> 
                            {product.price} <span className='payy'>د.ع</span> 
                          </p>
                          <p className='pisceP kadeem'> 
                            <s>{product.oldPrice} <span className='payy'>د.ع</span></s> 
                          </p>
                        </div>
                        <div className='starts'>
                          <CiStar size={22} color='red' /> 
                          <span> &#40; {product.rating} &#41; </span>
                        </div>
                        <div className='btns'>
                          <Link to={''} className='btnPro'>شراء الان</Link>
                          <button className='btnfan'>
                            <TbShoppingBag className='icon-btn' size={22} />
                          </button>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
        

      </section>

      {/* بانر ترويجي */}
      <div className="brands-promo">
        <div className="promo-content">
          <h2>خصم يصل إلى 40% على منتجات الماركات</h2>
          <p>عرض لفترة محدودة حتى نهاية الشهر</p>
          <button className="promo-btn">استعرض العروض</button>
        </div>
      </div>

      
    </div>
  );
};

export default Brands;