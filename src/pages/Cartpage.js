/*  ------- صفحة سلة التسوق ------- */
import React, { useState } from 'react';
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';
import image from '../assets/images/pro1.png';
import '../assets/css/Cart.css';


const Cart = () => {
  // بيانات تجريبية للسلة
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'طائرة ألعاب أطفال قابلة للتحكم',
      price: 10000,
      quantity: 2,
      image: image,
    },
    {
      id: 2,
      name: 'جهاز تحكم عن بعد',
      price: 15000,
      quantity: 1,
      image: image,
    },
    {
      id: 3,
      name: 'طائرة ألعاب أطفال قابلة للتحكم',
      price: 10000,
      quantity: 2,
      image: image,
    },
    {
      id: 4,
      name: 'جهاز تحكم عن بعد',
      price: 15000,
      quantity: 1,
      image: image,
    },
    {
      id: 5,
      name: 'جهاز تحكم عن بعد',
      price: 15000,
      quantity: 1,
      image: image,
    },


  ]);

  // نموذج التوصيل
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: '',
    address: '',
    city: '',
    phone: '',
    note: '' /*-------- مكان الملاحظات --------*/
  });

  // حذف منتج من السلة
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // تحديث الكمية
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // حساب الإجمالي
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // معالجة إرسال النموذج
  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك إضافة منطق إرسال الطلب
    console.log('تم إرسال الطلب:', { cartItems, deliveryInfo });
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">سلة التسوق</h1>
      
      <div className="cart-layout">
        {/* قسم العناصر */}
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="item-image" />
              
              <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-price">{item.price.toLocaleString()} د.ع</p>
                
                <div className="quantity-controls">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="quantity-btn"
                  >
                    <FiMinus />
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="quantity-btn"
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>
              
              <button 
                onClick={() => removeItem(item.id)}
                className="remove-btn"
              >
                <FiTrash2 />
              </button>
            </div>
          ))}
          
          {/* بيانات السلة */}
          <div className="cart-summary">
            <div className="summary-item">
              <span>المجموع الفرعي:</span>
              <span>{calculateTotal().toLocaleString()} د.ع</span>
            </div>
            <div className="summary-item">
              <span>تكاليف التوصيل:</span>
              <span>5,000 د.ع</span>
            </div>
            <div className="summary-item total">
              <span>الإجمالي:</span>
              <span>{(calculateTotal() + 5000).toLocaleString()} د.ع</span>
            </div>
          </div>
        </div>

        {/* معلومات التوصيل */}
        <form onSubmit={handleSubmit} className="delivery-form">
          <h2>معلومات التوصيل</h2>
          
          <div className="form-group">
            <label>الاسم الكامل:</label>
            <input
              type="text"
              required
              value={deliveryInfo.name}
              onChange={(e) => setDeliveryInfo({...deliveryInfo, name: e.target.value})}
            />
          </div>
          
          <div className="form-group">
            <label>المدينة:</label>
            <select
              required
              value={deliveryInfo.city}
              onChange={(e) => setDeliveryInfo({...deliveryInfo, city: e.target.value})}
            >
              <option value="">اختر المدينة</option>
              <option value="baghdad">بغداد</option>
              <option value="basra">البصرة</option>
              <option value="diyala">ديالى</option>
            </select>
          </div>

          <div className="form-group">
            <label>العنوان:</label>
            <input
              type="text"
              required
              placeholder='يرجى أضافة المدينة او المنطقة'
              value={deliveryInfo.address}
              onChange={(e) => setDeliveryInfo({...deliveryInfo, address: e.target.value})}
            />
          </div>
          
          <div className="form-group">
            <label>رقم الهاتف:</label>
            <input
              type="tel"
              required
              pattern="[0-9]{10}"
              value={deliveryInfo.phone}
              onChange={(e) => setDeliveryInfo({...deliveryInfo, phone: e.target.value})}
            />
          </div>
          
          <div className="form-group">
            <label>ملاحظة للمتجر ؟ </label>
            <input
              type="text"
              required
              placeholder='يمكن اضافة ملاحظة للمتجر ( أختياري )'
              value={deliveryInfo.note}
              onChange={(e) => setDeliveryInfo({...deliveryInfo, note: e.target.value})}
            />
          </div>
          
          <button type="submit" className="submit-order">
            تأكيد الطلب
          </button>
        </form>
      </div>
    </div>
  );
};



export default Cart;