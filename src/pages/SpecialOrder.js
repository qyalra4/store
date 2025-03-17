// صفحة طلب الخاص
import React, { useState } from 'react';
import '../assets/css/Order.css';

const SpecialOrder = () => {
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    phone: '',
    description: '',
    productLink: '',
    images: []
  });

  // التعامل مع رفع الصور
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setOrderDetails(prev => ({
      ...prev,
      images: [...prev.images, ...files]
    }));
  };

  // حذف صورة من القائمة
  const removeImage = (index) => {
    setOrderDetails(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  // معالجة إرسال النموذج
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('طلب خاص تم إرساله:', orderDetails);
    alert('تم إرسال الطلب بنجاح!');
  };

  return (
    <div className="special-order-container">
      <h1 className="title">طلب خاص</h1>
      <p className="subtitle">قم بتقديم طلبك الخاص وسنساعدك في الحصول عليه.</p>

      <form onSubmit={handleSubmit} className="special-order-form">
        <div className="form-group">
          <label>الاسم الكامل:</label>
          <input
            type="text"
            required
            value={orderDetails.name}
            onChange={(e) => setOrderDetails({ ...orderDetails, name: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>رقم الهاتف:</label>
          <input
            type="tel"
            required
            pattern="[0-9]{10}"
            value={orderDetails.phone}
            onChange={(e) => setOrderDetails({ ...orderDetails, phone: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>تفاصيل الطلب:</label>
          <textarea
            required
            rows="4"
            value={orderDetails.description}
            onChange={(e) => setOrderDetails({ ...orderDetails, description: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>رابط منتج مشابه (اختياري):</label>
          <input
            type="url"
            value={orderDetails.productLink}
            onChange={(e) => setOrderDetails({ ...orderDetails, productLink: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>تحميل صور (اختياري):</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
          />
          <div className="image-preview">
            {orderDetails.images.map((image, index) => (
              <div key={index} className="image-container">
                <img src={URL.createObjectURL(image)} alt={`uploaded-${index}`} />
                <button type="button" onClick={() => removeImage(index)}>×</button>
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="submit-btn">إرسال الطلب</button>
      </form>
    </div>
  );
};


export default SpecialOrder;