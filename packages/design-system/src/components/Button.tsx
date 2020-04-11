import React from "react";

export const Button: React.FC<{}> = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);
