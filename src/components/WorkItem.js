import React from 'react';

export const WorkItem = () => {
  return (
    <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
      <div
        className="project"
        style={{
          backgroundImage: `url(${require('../assets/images/work-6.jpg')})`,
        }}
      >
        <div className="desc">
          <div className="con">
            <h3>
              <a href="work.html">Work 06</a>
            </h3>
            <span>Web, Logo, Branding</span>
            <p className="icon">
              <span>
                <a href="#">
                  <i className="icon-share3" />
                </a>
              </span>
              <span>
                <a href="#">
                  <i className="icon-eye" /> 100
                </a>
              </span>
              <span>
                <a href="#">
                  <i className="icon-heart" /> 49
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
