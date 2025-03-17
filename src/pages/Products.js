//  صفحة المنجات
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";
import { FiFilter } from "react-icons/fi";
import { TbShoppingBag } from "react-icons/tb";
import { CiStar } from "react-icons/ci";
import '../assets/css/Prodects.css';

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 30;

  //   ------- بيانات المنتجات التجريبية --
  const [products, setProducts] = useState(
    Array(64).fill().map((_, i) => ({
      id: i + 1,
      title: 'طاىرة العاب اطفال يمكن تحكم بيها',
      price: 10000,
      oldPrice: 14000,
      rating: 10,
      image: require('../assets/images/pro1.png')
    }))
  );

  // حساب عدد الصفحات
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  // المنتجات المعروضة حالياً
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // تغيير الصفحة
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='prodectsPage'>
      <div className='headerPY'>
        <div className='itemH right'> فلتر <FiFilter size={21} /> </div>
        <Link className='itemH left'> العودة <FiArrowLeft size={22} /></Link>
      </div>

      <div className='prodects'>
        <div className='contentPro'>
          {currentProducts.map(product => (
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

      {/*  التبديل بين الصفحات */}
      <div className="pagination">
        <button 
          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
        >
          السابق
        </button>

        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={currentPage === number ? 'active' : ''}
          >
            {number}
          </button>
        ))}

        <button 
          onClick={() => setCurrentPage(prev => 
            Math.min(prev + 1, pageNumbers.length))}
          disabled={currentPage === pageNumbers.length}
        >
          التالي
        </button>
      </div>
    </div>
  );
};

export default Products;