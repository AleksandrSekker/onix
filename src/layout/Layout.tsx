import React from 'react';
import Footer from './Footer/Footer.tsx';
import Header from './Header/Header.tsx';

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
