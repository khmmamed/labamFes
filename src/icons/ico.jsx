import React from "react";

export const Path = ({ fill, d, ...props }) => (
  <path {...props} fill={fill} d={d} />
);
