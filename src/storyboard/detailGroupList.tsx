import * as React from 'react';
import DetailGroup from "../models/detailGroup";
import DetailGroupContainer from "./detailGroupContainer";

type Properties = {
  detailGroups: Array<DetailGroup>;
}

const DetailGroupList = ({ detailGroups }: Properties) => {
  return <div className="detail-group-list">
    {detailGroups.map((detailGroup: DetailGroup) =>
      <DetailGroupContainer detailGroup={detailGroup} />
    )}
  </div>;
};

export default DetailGroupList;