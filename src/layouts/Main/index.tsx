import { Outlet } from 'react-router';

import { Container, Content, ContentWrapper, Header, Layout, TopBarPlaceholder } from './style';

const MainLayout = () => {
  return (
    <Layout>
      <Container>
        <ContentWrapper>
          <Header />
          <TopBarPlaceholder />
          <Content>
            <Outlet />
          </Content>
        </ContentWrapper>
      </Container>
    </Layout>
  );
};

export default MainLayout;
