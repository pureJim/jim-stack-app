import { Outlet } from 'react-router';

import { Container, Content, Layout } from './style';

const MainLayout = () => {
  console.log('main layout');
  return (
    <Layout>
      <Container>
        <Content>
          <Outlet />
        </Content>
      </Container>
    </Layout>
  );
};

export default MainLayout;
