import React from 'react';

export const Panel = ({ isOpen, toggle, text, heading }) => {
  const subContainerClassName = isOpen
    ? 'panel-collapse'
    : 'panel-collapse collapse';

  return (
    <div className="panel panel-default" onClick={toggle}>
      <div className="panel-heading" role="tab">
        <h4 className="panel-title">
          <a
            className={isOpen ? null : 'collapsed'}
            data-toggle="collapse"
            data-parent="#accordion"
            aria-expanded={isOpen}
          >
            {heading}
          </a>
        </h4>
      </div>
      <div className={subContainerClassName} role="tabpanel">
        {isOpen && (
          <div className="panel-body">
            <p>{text}</p>
          </div>
        )}
      </div>
    </div>
  );
};
