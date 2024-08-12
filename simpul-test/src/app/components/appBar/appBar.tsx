"use client";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import styles from "./styles.module.css";
import SideBar from "./sideBar/sideBar";
import BottomBot from "./bottomBot/bottomBot";
import NavBar from "./navBar/navBar";
import { usePathname } from "next/navigation";

const ResponsiveAppBar = () => {
  const pathname = usePathname();
  return (
    <AppBar className={styles.appBarZIndex} elevation={0}>
      <Container maxWidth="lg" className={styles.container}>
        <SideBar />
        <Toolbar disableGutters className={styles.toolbar}>
          <NavBar />
        </Toolbar>
        <BottomBot />
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
