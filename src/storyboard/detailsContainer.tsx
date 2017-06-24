import * as React from 'react';
import DetailCardContainer from "./detailCardContainer";

const DetailsContainer = ({ groups }) => {
  return <div className="details-container">
    {groups.map(group =>
      <DetailCardContainer />
    )}
  </div>;
};

export default DetailsContainer;