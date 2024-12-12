import styled from 'styled-components';

export const Layout = styled.div.attrs({
  'aria-label': 'main-layout',
})`
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 100%;
  min-height: 100%;
  background: var(--bg-color);
`;

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  background-color: var(--bg-color);
`;

export const TopBarPlaceholder = styled.div`
  box-sizing: border-box;
  height: 50px;
  width: 100%;
`;

export const Header = styled.header.attrs({
  'aria-label': 'main-header',
})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  height: 50px;
  line-height: 50px;
  box-shadow: 0 4px 10px 0 rgb(78 89 105 / 6%);
  background-color: #fff;
  z-index: 1000;
`;

export const Content = styled.main.attrs({
  'aria-label': 'main-content',
})`
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;
