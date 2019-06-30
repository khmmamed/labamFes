import React from "react";

/**
 * @mainPage
 *
 * this page section has also
 * mainHeader
 * mainSide
 * mainContent
 * and mainFooter
 */

//===== Main Container =========>
export const Main = ({ children, ...props }) => {
  return <main {...props}>{children}</main>;
};
