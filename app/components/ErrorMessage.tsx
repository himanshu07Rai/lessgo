import React, { PropsWithChildren } from 'react';

const ErrorMessage = ({ children }: PropsWithChildren) =>
  children ? <span className="text-red-500">{children}</span> : null;

export default ErrorMessage;
