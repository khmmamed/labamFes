/**
 * this is a top banner of the header component
 * it has short link to vital page
 * arranged by flexboxes that can be modified
 * sized and created as many as you want
 *styles {
  className, background, z-index,
  padding, margin,    
 }
 *events {
   Hover, 
 }
 * created by @khmamed  *
 */
import React from "react";

//our headerNavContainer
const HeaderNavContainer = ({
  //allow user to create new style
  //or override existing ones
  className,

  //children must be a flex box
  //container does not display texts inside it
  children
}) => {
  return <div className={className}>{children}</div>;
};

export default HeaderNavContainer;
