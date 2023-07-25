import React from 'react';
import { Example as ComponentExample } from './component/Example';
import { api } from '~/utils/api';

const Example = () => {
  const { data } = api.example.hello.useQuery({
    text: 'Rizky Djanuar'
  });
  return <ComponentExample name={data?.greeting} />;
};

export default Example;
