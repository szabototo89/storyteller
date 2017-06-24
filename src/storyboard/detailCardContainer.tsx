import * as React from 'react';
import DetailGroup from "../models/detailGroup";

type Properties = DetailGroup;

const DetailCardContainer = ({ name }: Properties) => {
  return <div className="detail-card-container">
    <div className="detail-card-container__header">
      {name}
    </div>
    <div className="detail-card-container__body">

    </div>
  </div>;
};

export default DetailCardContainer;