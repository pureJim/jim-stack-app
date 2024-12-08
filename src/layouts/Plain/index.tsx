import { Outlet } from 'react-router';

const PlainLayout = () => {
  console.log('plain layout');
  return (
    <div aria-label="blank-layout">
      <Outlet />
    </div>
  );
};

export default PlainLayout;
