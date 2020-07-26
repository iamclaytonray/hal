import React from 'react';
import { Helmet } from 'react-helmet';
import useSiteMetadata from './SiteMetadata';
import { withPrefix } from 'gatsby';

import '../assets/css/animate.css';
import '../assets/css/bootstrap.css';
import '../assets/css/flexslider.css';
import './all.sass';

import '../assets/css/style.css';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return children;
};

export default TemplateWrapper;
