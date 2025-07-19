'use client';

import React, { useEffect, useState } from 'react';

import { StatData } from '../../components/Stats/types';

const Age: React.FC = () => {
  const [age, setAge] = useState<string>('');

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1987-07-08T09:24:00');
    setAge(((Date.now() - birthTime.getTime()) / divisor).toFixed(11));
  };

  useEffect(() => {
    tick(); // Initial tick
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <>{age}</>;
};

const data: StatData[] = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 5,
    link: 'https://www.google.com/maps/d/edit?mid=1QJiS-5DGSB9KUTNlbZjn5KkBMYc2AD8&ll=8.537778235073185%2C99.20976065&z=4',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Chennai, Tamil Nadu, India',
  },
];

export default data;
