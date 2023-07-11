import React from 'react';
import Nav from './nav';
import Footer from './footer';
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-auto">
      <Nav />
      <div className="h-full w-full bg-main bg-cover pb-12 pl-12">{children}</div>
      <div className="b-0 absolute   w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
