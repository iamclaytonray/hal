import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        featuredImage={getAsset(data.featuredImage)}
        whatIDo={data.whatIDo}
        whyChooseMe={data.whyChooseMe}
        getInTouch={data.getInTouch}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default IndexPagePreview;
