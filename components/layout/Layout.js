import Header from "./Header";
import Footer from "./Footer";
import themes from "./themes";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { useState, createContext } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import './footer.scss';

const App = createContext();


const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
`;

// ... (previous imports)

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <App.Provider value={{ changeTheme, theme }}>
      <ThemeProvider theme={themes[theme]}>
        <ToastContainer />
        <LayoutWrapper>
          <GlobalStyle />
          <Header />
          <Content>{children}</Content>
          <Footer />
        </LayoutWrapper>
      </ThemeProvider>
    </App.Provider>
  );
}

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  background-image: ${(props) => props.theme.bgImage};
  color: ${(props) => props.theme.color};
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  flex-grow: 1;
`;

export default Layout;
export { App };
