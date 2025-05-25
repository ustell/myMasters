import React from 'react';

interface Props {
  local: string;
  method: 'clear' | 'getItem' | 'removeItem' | 'setItem';
  value?: string;
}

export const GetLocalHost = ({ local, method, value }: Props) => {
  const [data, setData] = React.useState<string | null>(null);

  React.useEffect(() => {
    switch (method) {
      case 'clear':
        localStorage.clear();
        break;
      case 'getItem':
        setData(localStorage.getItem(local));
        break;
      case 'removeItem':
        localStorage.removeItem(local);
        break;
      case 'setItem':
        localStorage.setItem(local, value!);
        break;
    }
  }, [local, method, value]);

  return data;
};
