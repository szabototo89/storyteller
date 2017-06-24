import * as React from 'react';

const DetailsContainer = ({ groups }) => {
  return <div className="details-container">
    {groups.map(group =>
      <DetailCardContainer />
    )}
  </div>;
};

export default DetailsContainer;