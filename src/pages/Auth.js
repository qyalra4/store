/*   صفحة تسجيل الدخول   */
import React, { useState } from 'react';
import "../assets/css/Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-header">
          <button 
            className={`tab ${isLogin ? 'active' : ''}`} 
            onClick={() => setIsLogin(true)}
          >
            تسجيل الدخول
          </button>
          <button 
            className={`tab ${!isLogin ? 'active' : ''}`} 
            onClick={() => setIsLogin(false)}
          >
            إنشاء حساب
          </button>
        </div>

        <form className="auth-form">
          {!isLogin && (
            <div className="input-group">
              <label>الاسم الكامل</label>
              <input type="text" placeholder="أدخل اسمك" required />
            </div>
          )}
          
          <div className="input-group">
            <label>البريد الإلكتروني</label>
            <input type="email" placeholder="example@email.com" required />
          </div>

          <div className="input-group">
            <label>كلمة المرور</label>
            <input type="password" placeholder="••••••••" required />
          </div>

          {!isLogin && (
            <div className="input-group">
              <label>تأكيد كلمة المرور</label>
              <input type="password" placeholder="••••••••" required />
            </div>
          )}

          <button type="submit" className="auth-btn">
            {isLogin ? "تسجيل الدخول" : "إنشاء حساب"}
          </button>
        </form>

        {isLogin && (
          <p className="forgot-password">نسيت كلمة المرور؟ <a href="#">استعادة</a></p>
        )}
      </div>
    </div>
  );
};

export default Auth;
