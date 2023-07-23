import { useState } from 'react';

export const useExample = () => {
  const [state, setState] = useState('Rizky Djanuar');

  return {
    state,
    setState
  };
};
