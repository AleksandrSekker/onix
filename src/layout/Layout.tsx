import React from 'react';
// @ts-ignore
import Footer from './Footer/Footer.tsx';
// @ts-ignore
import Header from './Header/Header.tsx';

const Layout = ({ children }: any) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
