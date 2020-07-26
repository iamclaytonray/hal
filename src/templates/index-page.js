import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import ReactHtmlParser from 'react-html-parser';

import Layout from '../components/Layout';
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
  whatIDo,
  whyChooseMe,
  getInTouch,
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
                      <Panel
                        isOpen={openPanel === 0}
                        toggle={() => toggle(0)}
                        heading="Why Choose Me"
                        // text={ReactHtmlParser(choose)}
                        text={whyChooseMe}
                      />
                      <Panel
                        isOpen={openPanel === 1}
                        toggle={() => toggle(1)}
                        heading="What I Do"
                        text={whatIDo}
                        // text={ReactHtmlParser(skills)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                  <p className="colorlib-lead">{getInTouch}</p>
                  <p>
                    <a
                      href="mailto:hal9000s@mac.com"
                      className="btn btn-primary btn-learn"
                    >
                      Email me
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:813-758-6119"
                      className="btn btn-primary btn-learn"
                    >
                      Call / text me
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
      <IndexPageTemplate
        // image={frontmatter.image}
        whatIDo={frontmatter.whatIDo}
        whyChooseMe={frontmatter.whyChooseMe}
        getInTouch={frontmatter.getInTouch}
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        # image {

        # }
        whatIDo
        whyChooseMe
        getInTouch
      }
    }
  }
`;
