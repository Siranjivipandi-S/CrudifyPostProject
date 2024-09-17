import React from "react";
import { formatDistanceToNow } from "date-fns";

const Timelayout = ({ time }) => {
  const date = new Date(time);
  const formattedDistanceToNow = formatDistanceToNow(date);

  return <span>Posted {formattedDistanceToNow} ago</span>;
};

export default Timelayout;
