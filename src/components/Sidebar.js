import React from 'react';

export const Sidebar = () => {
  return (
    <>
      <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle">
        <i />
      </a>
      <aside id="colorlib-aside" role="complementary" className="border">
        <nav id="colorlib-main-menu" role="">
          <ul>
            <li className="colorlib-active">
              <a href="#">Home</a>
            </li>
            {/* <li>
              <a href="#work">Work</a>
            </li> */}
            <li>
              <a href="#about">About</a>
            </li>
            {/* <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li> */}
            <li>
              <a href="#contact">Contact</a>
            </li>
     <li>
              <a href="tel:813-758-6119">813-758-6119</a>
            </li>
      <li>
              <a href="mailto:hal9000s@mac.com">hal9000s@mac.com</a>
            </li>
          </ul>
        </nav>
        <div
          className="colorlib-footer"
          style={{ position: 'absolute', bottom: 0 }}
        >
          <p>
            <small>Copyright © 2020. All rights reserved</small>
          </p>
          <ul>
            <li>
              <a href="#">
                <i className="icon-facebook2" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-twitter2" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-linkedin2" />
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
