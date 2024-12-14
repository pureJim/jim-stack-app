import React, { Suspense } from 'react';

const LazyLoad: React.FC<React.LazyExoticComponent<any>> = (Element) => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Element />
    </Suspense>
  );
};

export default LazyLoad;
