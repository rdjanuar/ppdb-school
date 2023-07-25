import React from 'react';

interface ExampleProps {
  name: string | undefined;
}

export const Example: React.FC<ExampleProps> = ({ name }) => {
  return <div>{name}</div>;
};
