import React from 'react';
import { Example as ComponentExample } from './component/Example';
import { useExample } from './hook/useExample';

const Example = () => {
  const { state } = useExample();
  return <ComponentExample name={state} />;
};

export default Example;
