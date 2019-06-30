import React from "react";

//====== Main Content ========>
export const MainContent = ({ children, ...props }) => (
  <section {...props}>{children}</section>
);
