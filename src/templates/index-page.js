import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import ReactHtmlParser from 'react-html-parser';

import Layout from '../components/Layout';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';
import { WorkItem } from '../components/WorkItem';
import { Panel } from '../components/Panel';
import { Sidebar } from '../components/Sidebar';

const choose = `
<li>All Macs and Servers Supported</li>
<li>Competitive Rates, Fast Response, & Flexible Hours</li>
<li>On-site Service</li>
<li>All Versions of the Macintosh OS Supported</li>
<li>Any kind of User; from Individual to Corporate</li>
<li>In-house Repairs & Upgrades</li>
<li>Company Started in 2000 - Apple Certified Tech</li>
<li>Largest Service Area in Tampa Bay: Hillsborough & Pinellas counties (other areas available)</li>
<li>No Sales (Means no profit motiviated preferences)</li>
<li>Service Contracts available</li>
`;

const skills = `
<li>Troubleshooting</li>
<li>Repairs</li>
<li>Preventative Maintenance</li>
<li>System Administration & Support</li>
<li>Data Recovery</li>
<li>Hardware/Software/Peripherals/Printers/Routers</li>
<li>Setup - System Optimization - Installation</li>
<li>Security - Data Management</li>
<li>Networks</li>
<li>Facilitation of Warranty Issues & Purchases</li>
`;

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const [openPanel, setOpenPanel] = React.useState(0);

  const toggle = (index) => {
    setOpenPanel(index);
  };

  return (
    <div>
      <div id="colorlib-page">
        <Sidebar />
        <div id="colorlib-main">
          <aside id="colorlib-hero" style={{ height: '273px' }}>
            <div className="flexslider" style={{ height: '273px' }}>
              <img src="https://images.unsplash.com/photo-1527443195645-1133f7f28990?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
            </div>
          </aside>
          <div id="about" className="colorlib-about">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <div
                    className="about-img animate-box"
                    data-animate-effect="fadeInLeft"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1581244249923-172ef5029576?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80')`,
                    }}
                  ></div>
                </div>
                <div
                  className="col-md-6 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="about-desc">
                    <span className="heading-meta">Intro</span>
                    <h3>Hi! My name is Hal!</h3>
                    <p>
                      I've been an Apple-certified technician for 20+ years.
                    </p>
                  </div>
                  <div className="fancy-collapse-panel">
                    <div
                      className="panel-group"
                      id="accordion"
                      role="tablist"
                      aria-multiselectable="true"
                    >
                      {/* <div className="panel panel-default">
                        <div
                          className="panel-heading"
                          role="tab"
                          id="headingOne"
                        >
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Why choose me?
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseOne"
                          className="panel-collapse collapse in"
                          role="tabpanel"
                          aria-labelledby="headingOne"
                        >
                          <div className="panel-body">
                            <div className="row">
                              <div className="col-md-6">
                                <p>
                                  Far far away, behind the word mountains, far
                                  from the countries Vokalia and Consonantia,
                                  there live the blind texts.
                                </p>
                              </div>
                              <div className="col-md-6">
                                <p>
                                  Separated they live in Bookmarksgrove right at
                                  the coast of the Semantics, a large language
                                  ocean.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div
                          className="panel-heading"
                          role="tab"
                          id="headingTwo"
                        >
                          <h4 className="panel-title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              What I do
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseTwo"
                          className="panel-collapse collapse"
                          role="tabpanel"
                          aria-labelledby="headingTwo"
                        >
                          <div className="panel-body">
                            <p>
                              Far far away, behind the word{' '}
                              <strong>mountains</strong>, far from the countries
                              Vokalia and Consonantia, there live the blind
                              texts. Separated they live in Bookmarksgrove right
                              at the coast of the Semantics, a large language
                              ocean.
                            </p>
                            <ul>
                              <li>
                                Separated they live in Bookmarksgrove right
                              </li>
                              <li>
                                Separated they live in Bookmarksgrove right
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div
                          className="panel-heading"
                          role="tab"
                          id="headingThree"
                        >
                          <h4 className="panel-title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              My Specialties
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseThree"
                          className="panel-collapse collapse"
                          role="tabpanel"
                          aria-labelledby="headingThree"
                        >
                          <div className="panel-body">
                            <p>
                              Far far away, behind the word{' '}
                              <strong>mountains</strong>, far from the countries
                              Vokalia and Consonantia, there live the blind
                              texts. Separated they live in Bookmarksgrove right
                              at the coast of the Semantics, a large language
                              ocean.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div> */}
                      <Panel
                        isOpen={openPanel === 0}
                        toggle={() => toggle(0)}
                        heading="Why Choose Me"
                        text={ReactHtmlParser(choose)}
                      />
                      <Panel
                        isOpen={openPanel === 1}
                        toggle={() => toggle(1)}
                        heading="What I Do"
                        text={ReactHtmlParser(skills)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="colorlib-services">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                  <span className="heading-meta">What I do</span>
                  <h2
                    className="colorlib-heading animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    Here are some of my expertise
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div
                    className="colorlib-feature animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="colorlib-icon">
                      <i className="icon-tag" />
                    </div>
                    <div className="colorlib-text">
                      <h3>Branding</h3>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.{' '}
                      </p>
                    </div>
                  </div>
                  <div
                    className="colorlib-feature animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="colorlib-icon">
                      <i className="icon-pen2" />
                    </div>
                    <div className="colorlib-text">
                      <h3>Web Design</h3>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.{' '}
                      </p>
                    </div>
                  </div>
                  <div
                    className="colorlib-feature animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="colorlib-icon">
                      <i className="icon-search3" />
                    </div>
                    <div className="colorlib-text">
                      <h3>Search engine optimization</h3>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.{' '}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="colorlib-feature animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="colorlib-icon">
                      <i className="icon-paperplane" />
                    </div>
                    <div className="colorlib-text">
                      <h3>Web Development</h3>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.{' '}
                      </p>
                    </div>
                  </div>
                  <div
                    className="colorlib-feature animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="colorlib-icon">
                      <i className="icon-device-desktop" />
                    </div>
                    <div className="colorlib-text">
                      <h3>User Interface</h3>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                    </div>
                  </div>
                  <div
                    className="colorlib-feature animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="colorlib-icon">
                      <i className="icon-help" />
                    </div>
                    <div className="colorlib-text">
                      <h3>Help &amp; Support</h3>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="colorlib-work">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                  <span className="heading-meta">My Work</span>
                  <h2
                    className="colorlib-heading animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    Recent Work
                  </h2>
                </div>
              </div>
              <div className="row">
                <WorkItem />
                <WorkItem />
              </div>
            </div>
          </div>
          <div className="colorlib-blog">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                  <span className="heading-meta">Read</span>
                  <h2
                    className="colorlib-heading animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    Recent Blog
                  </h2>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-md-4 col-sm-6 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="blog-entry">
                    <a href="blog.html" className="blog-img">
                      <img
                        src={require('../assets/images/img-1.jpg')}
                        className="img-responsive"
                        alt="HTML5 Bootstrap Template by colorlib.com"
                      />
                    </a>
                    <div className="desc">
                      <span>
                        <small>Feb 07, 2018 </small> |{' '}
                        <small> Web Design </small> |{' '}
                        <small>
                          {' '}
                          <i className="icon-bubble3" /> 4
                        </small>
                      </span>
                      <h3>
                        <a href="blog.html">18 Awesome sites</a>
                      </h3>
                      <p>
                        Separated they live in Bookmarksgrove right at the coast
                        of the Semantics, a large language ocean.
                      </p>
                      <a href="blog.html" className="lead">
                        Read More <i className="icon-arrow-right3" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 col-sm-6 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="blog-entry">
                    <a href="blog.html" className="blog-img">
                      <img
                        src={require('../assets/images/img-2.jpg')}
                        className="img-responsive"
                        alt="HTML5 Bootstrap Template by colorlib.com"
                      />
                    </a>
                    <div className="desc">
                      <span>
                        <small>Feb 07, 2018 </small> |{' '}
                        <small> Web Design </small> |{' '}
                        <small>
                          {' '}
                          <i className="icon-bubble3" /> 4
                        </small>
                      </span>
                      <h3>
                        <a href="blog.html">Wordpress for a Beginner</a>
                      </h3>
                      <p>
                        Separated they live in Bookmarksgrove right at the coast
                        of the Semantics, a large language ocean.
                      </p>
                      <a href="blog.html" className="lead">
                        Read More <i className="icon-arrow-right3" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 col-sm-6 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="blog-entry">
                    <a href="blog.html" className="blog-img">
                      <img
                        src={require('../assets/images/img-3.jpg')}
                        className="img-responsive"
                        alt="HTML5 Bootstrap Template by colorlib.com"
                      />
                    </a>
                    <div className="desc">
                      <span>
                        <small>Feb 07, 2018 </small> |{' '}
                        <small> Inspiration </small> |{' '}
                        <small>
                          {' '}
                          <i className="icon-bubble3" /> 4
                        </small>
                      </span>
                      <h3>
                        <a href="blog.html">Make website from scratch</a>
                      </h3>
                      <p>
                        Separated they live in Bookmarksgrove right at the coast
                        of the Semantics, a large language ocean.
                      </p>
                      <a href="blog.html" className="lead">
                        Read More <i className="icon-arrow-right3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
           */}
          <section id="contact" className="colorlib-bg-color">
            <div className="colorlib-narrow-content" style={{ padding: 24 }}>
              <div className="row">
                <div
                  className="col-md-6 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <h2>Get in Touch!</h2>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <p className="colorlib-lead">
                    Whatever the scope of your project is, please give me an
                    email!
                  </p>
                  <p>
                    <a
                      href="mailto:hal@hal9000.com"
                      className="btn btn-primary btn-learn"
                    >
                      Email me
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate title={frontmatter.title} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
