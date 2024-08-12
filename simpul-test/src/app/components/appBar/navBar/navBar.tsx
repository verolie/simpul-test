"use client";
import * as React from "react";
import styles from "./style.module.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Image from "next/image";

const NavBar = () => {
  return (
    <Container className={styles.gridContainer}>
      <Grid>
        <Grid item xs={3}>
          <Image
            src="/icon/search_24px.png"
            width={22}
            height={22}
            alt="Unit Icon"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default NavBar;
