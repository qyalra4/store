/* صفحة المفضلات */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiTrash2 } from 'react-icons/fi';
import image from '../assets/images/m1.jpg';


const Favorites = () => {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: 'ساعة ذكية بتصميم أنيق',
      price: 25000,
      image: image,
    },
    {
      id: 2,
      title: 'سماعات لاسلكية بجودة عالية',
      price: 18000,
      image: image,
    },
    {
      id: 3,
      title: 'حقيبة ظهر عصرية',
      price: 12000,
      image: image,
    },
    {
      id: 4,
      title: 'حقيبة ظهر عصرية',
      price: 12000,
      image: image,
    },
    {
      id: 5,
      title: 'حقيبة ظهر عصرية',
      price: 12000,
      image: image,
    },
    {
      id: 6,
      title: 'حقيبة ظهر عصرية',
      price: 12000,
      image: image,
    },


  ]);

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}><FiHeart size={24} color="red" /> المفضلات</h1>
      {favorites.length === 0 ? (
        <p style={styles.emptyMessage}>لم تقم بحفظ أي منتجات في المفضلة بعد.</p>
      ) : (
        <div style={styles.grid}>
          {favorites.map((item) => (
            <div key={item.id} style={styles.card}>
              <img src={item.image} alt={item.title} style={styles.image} />
              <h2 style={styles.productTitle}>{item.title}</h2>
              <p style={styles.price}>{item.price} د.ع</p>
              <div style={styles.actions}>
                <Link to={`/product/${item.id}`} style={styles.detailsBtn}>عرض المنتج</Link>
                <button onClick={() => removeFromFavorites(item.id)} style={styles.removeBtn}>
                  <FiTrash2 size={18} /> حذف
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: 'auto',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  },
  emptyMessage: {
    fontSize: '18px',
    color: '#888',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  productTitle: {
    fontSize: '18px',
    margin: '10px 0',
  },
  price: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  detailsBtn: {
    padding: '8px 12px',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '14px',
  },
  removeBtn: {
    padding: '8px 12px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
  },
};

export default Favorites;
