import "./App.css";
import { Router } from "./components/router/Router";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    palette: {
      background: {
        default: "#f8f5f1",
      },
      primary: {
        main: "#181818",
        light: "#636261",
        dark: "#333131",
      },
      secondary: {
        main: "#333131",
      },
      gray: {
        main: "#666666",
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
