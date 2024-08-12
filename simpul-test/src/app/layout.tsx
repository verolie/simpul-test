import AppBar from "./components/appBar/appBar";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

export default function RootLayout({ children }: { children: any }) {
  const props = { children };
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <div className="outer-app-container">
            <AppBar />
            <div className="app-container">
              <Container>{children}</Container>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
