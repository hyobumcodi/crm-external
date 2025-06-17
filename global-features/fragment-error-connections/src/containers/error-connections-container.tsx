import React from "react";

interface ErrorConnectionsContainerProps {
  children: React.ReactNode;
}

const ErrorConnectionsContainer: React.FC<ErrorConnectionsContainerProps> = ({
  children,
}) => {
  console.log("error boundary connected");

  return <>{children}</>;
};

export default ErrorConnectionsContainer;
