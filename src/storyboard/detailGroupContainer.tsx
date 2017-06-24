import * as React from 'react';
import DetailGroup from "../models/detailGroup";

type Properties = {
  detailGroup: DetailGroup;
};

const DetailGroupContainer = ({ detailGroup }: Properties) => {
  return <div className="detail-group-container">
    <div className="detail-group-container__header">
      {detailGroup.name}
    </div>
    <div className="detail-group-container__body">

    </div>
  </div>;
};

export default DetailGroupContainer;