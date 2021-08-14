import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/GlobalStyle";
import { lightTheme, darkTheme } from "./styles/Themes"
import Main from "./components/Main";

function App() {
  return (
    <>
      <ThemeProvider theme = { lightTheme } >
        <GlobalStyle />
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;
