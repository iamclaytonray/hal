import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './all.sass';
import useSiteMetadata from './SiteMetadata';
import { withPrefix } from 'gatsby';

import '../assets/css/animate.css';
import '../assets/css/bootstrap.css';
import '../assets/css/flexslider.css';
// import '../assets/css/icomoon.css';
import '../assets/css/style.css';

// import '../assets/js/jquery.flexslider-min';
// import '../assets/js/main';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return children;
};

export default TemplateWrapper;
