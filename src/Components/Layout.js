import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header className="headerLayout">
        <h1>Movies</h1>
      </header>
      <footer className="footerLayout">By Maxi y Agus</footer>
      <main>{children}</main>
    </>
  );
};

export default Layout;
