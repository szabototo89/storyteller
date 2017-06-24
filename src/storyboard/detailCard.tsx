import * as React from 'react';
import Detail from "../models/detail";

type Properties = {
  detail: Detail;
}

const DetailCard = ({ detail }: Properties) => {
  return <div className="detail-card">
    {detail.content}
  </div>;
};

export default DetailCard;