import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiShare2, FiX } from "react-icons/fi";
import { CiStar } from "react-icons/ci";
import { TbShoppingBag } from "react-icons/tb";
import { QRCodeCanvas } from "qrcode.react";
import html2canvas from 'html2canvas';
import '../assets/css/Product.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [shareOpen, setShareOpen] = useState(false);
  const shareCardRef = useRef(null);

  useEffect(() => {
    // بيانات تجريبية مع معرض صور ومزيد من التفاصيل
    const sampleProduct = {
      id,
      title: 'طاىرة العاب اطفال يمكن تحكم بيها',
      price: 10000,
      oldPrice: 14000,
      rating: 10,
      description:
        'هذا المنتج عبارة عن طائرة ألعاب للأطفال يتميز بتصميمه العصري وجودة التصنيع العالية، مما يجعله الخيار المثالي لهواة اللعب. يتميز بسهولة التحكم وتصميم آمن ومواد عالية الجودة لضمان متانة المنتج.',
      details: [
        'سهل التحكم بيد واحدة',
        'مواد تصنيع عالية الجودة',
        'تصميم آمن للأطفال',
        'بطارية طويلة العمر',
        'مناسب لجميع الأعمار'
      ],
      gallery: [
        require('../assets/images/pro1.png'),
        require('../assets/images/m1.jpg'),
        require('../assets/images/p2.jpg'),
        require('../assets/images/bg.jpg')
      ]
    };
    setProduct(sampleProduct);
    setMainImage(sampleProduct.gallery[0]);
  }, [id]);

  // تنزيل البطاقة كصورة بمقاس 512x512
  const downloadShareCard = () => {
    if (shareCardRef.current) {
      html2canvas(shareCardRef.current, { width: 512, height: 512 }).then(canvas => {
        const link = document.createElement('a');
        link.download = `share-${product.id}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
      });
    }
  };

  if (!product) return <div>Loading...</div>;

  const shareUrl = window.location.href;

  return (
    <div className="productDetailPage">
      <header className="headerPro">
        <Link to="/products" className="back">
           العودة للمنتجات <FiArrowLeft size={22} />
        </Link>
      </header>
      <div className="productDetail">
        <div className="imageGallery">
          <div className="mainImageContainer">
            <img src={mainImage} alt={product.title} className="productImage" />
          </div>
          <div className="thumbnails">
            {product.gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${img === mainImage ? 'active' : ''}`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>
        <div className="infoContainer">
          <h1 className="title">{product.title}</h1>
          <div className="priceContainer">
            <p className="price">السعر: {product.price} د.ع</p>
            <p className="oldPrice">
              <s>{product.oldPrice} د.ع</s>
            </p>
            
            <div className="rating">
            <CiStar size={22} color="red" />
            <span>&#40; {product.rating} &#41;</span>
          </div>
          </div>
          

          <div className="actionButtons">
            <button className="buyNow">شراء الان</button>
            <button className="addToCart">
              <TbShoppingBag size={22} className="icon-btn" /> إضافة إلى السلة
            </button>
            <button
              className="shareButton"
              onClick={() => setShareOpen(true)}
            >
              <FiShare2 size={22} className="icon-btn" />
            </button>
          </div>
          
          <p className="description">{product.description}</p>
          <div className="detailsSection">
            <h2>المميزات</h2>
            <ul>
              {product.details.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>

      {shareOpen && (
        <div className="shareModalOverlay">
          <div className="shareModal">
            <button className="closeModal" onClick={() => setShareOpen(false)}>
              <FiX size={24} />
            </button>
            <h2>مشاركة هذا المنتج</h2>
            <p>يمكنك مشاركة هذا المنتج عبر تنزيل البطاقة أدناه أو مشاركة الرابط مباشرةً.</p>
            <div className="shareCard" ref={shareCardRef}>
              <div className="shareCardContent">
                <div className="shareImage">
                  <img src={mainImage} alt={product.title} />
                </div>
                <div className="shareDetails">
                  <p className="shareTitle">{product.title}</p>
                  <p className="sharePrice">السعر: {product.price} د.ع</p>
                  <p className="shareLink">{shareUrl}</p>
                </div>
                <div className="qrCode">
                  <QRCodeCanvas value={shareUrl} size={100} />
                </div>
                {/* إضافة لوغو الموقع كتوقيع */}
                <div className="siteLogo">
                  <img src={require('../assets/images/logo.png')} alt="Site Logo" />
                </div>
              </div>
            </div>
            <button className="downloadButton" onClick={downloadShareCard}>
              تنزيل الصورة
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
