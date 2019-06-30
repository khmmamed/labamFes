import React from "react";

/**
 * Header info container
 * accept only flexInfoHeader as children
 * @param {*} props
 */
export const HeaderInfoContainer = props => {
  const {
    //we can add other css styles by using classes
    //or over riding existing styles
    className,

    //we accept only our flexbox children
    children

    //@props
  } = props;

  //return Header Info Container
  return <div className={className + " container"}>{children}</div>;
};
