import React from 'react';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
  return (
    <header style={{ padding: '1rem', background: '#ccc' }}>
      <nav>
        <Link to="/admin">لوحة التحكم</Link>
        
      </nav>
    </header>
  );
};

export default AdminHeader;
