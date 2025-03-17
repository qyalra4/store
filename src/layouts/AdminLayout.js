// src/layouts/AdminLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';

const AdminLayout = () => {
  return (
    <>
      <AdminHeader />
      <main style={{ minHeight: '80vh', padding: '1rem' }}>
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
