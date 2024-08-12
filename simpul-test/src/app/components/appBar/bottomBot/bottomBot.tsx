"use client";
import { Typography } from "@mui/material";
import styles from "./style.module.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import React from "react";
import { useEffect, useRef } from "react";

const BottomBot = () => {
  const [showButtons, setShowButtons] = React.useState(false);
  const [showSubButtons, setShowSubButtons] = React.useState(true);
  const [selectedButton, setSelectedButton] = React.useState<
    "todo" | "chat" | null
  >(null);
  const containerRef = useRef(null);

  const handleClick = () => {
    setShowButtons(!showButtons);
  };

  const handleClickSub = (button: "todo" | "chat") => {
    setSelectedButton(button);
    setShowSubButtons(!showSubButtons);
    setShowButtons(true);
  };

  // Handle click outside to revert icon
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !(event.target as HTMLElement).closest(`.${styles.gridContainer}`)
      ) {
        setShowSubButtons(true);
        setShowButtons(false);
        setSelectedButton(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Container className={styles.gridContainer} ref={containerRef}>
      {showSubButtons && (
        <Grid className={styles.boxContainer} onClick={handleClick}>
          <Grid item xs={3} className={styles.icon}>
            <Image
              src="/icon/cloud-lightning.png"
              width={36}
              height={36}
              alt="Unit Icon"
            />
          </Grid>
        </Grid>
      )}
      {showButtons && (
        <Grid className={styles.buttonsContainer}>
          {selectedButton !== "todo" && (
            <Grid item xs={2} className={styles.containerSubButton}>
              {showSubButtons && selectedButton == null && (
                <Typography className={styles.textIcon}>task</Typography>
              )}
              <Grid
                className={styles.buttonClick}
                style={{
                  marginLeft: selectedButton === null ? "25px" : "118px",
                }}
              >
                <Grid
                  className={styles.icon}
                  onClick={() => handleClickSub("todo")}
                >
                  <Image
                    src="/icon/todo.png"
                    width={26}
                    height={26}
                    alt="ToDo Icon"
                  />
                </Grid>
              </Grid>
            </Grid>
          )}
          {selectedButton !== "chat" && (
            <Grid item xs={2} className={styles.containerSubButton}>
              {showSubButtons && selectedButton == null && (
                <Typography className={styles.textIcon}>chat</Typography>
              )}
              <Grid
                className={styles.buttonClick}
                style={{
                  marginLeft: selectedButton === null ? "25px" : "118px",
                }}
              >
                <Grid
                  className={styles.icon}
                  onClick={() => handleClickSub("chat")}
                >
                  <Image
                    src="/icon/chat.png"
                    width={26}
                    height={26}
                    alt="Chat Icon"
                  />
                </Grid>
              </Grid>
            </Grid>
          )}
          {selectedButton === "todo" && (
            <Grid
              item
              xs={2}
              className={styles.buttonClickedTodo}
              style={{ marginLeft: "30px" }}
            >
              <Grid
                className={styles.icon}
                onClick={() => handleClickSub("todo")}
              >
                <Image
                  src="/icon/todo-white.png"
                  width={26}
                  height={26}
                  alt="ToDo Icon"
                />
              </Grid>
            </Grid>
          )}
          {selectedButton === "chat" && (
            <Grid item xs={2} className={styles.buttonClickedChat}>
              <Grid
                className={styles.icon}
                onClick={() => handleClickSub("chat")}
              >
                <Image
                  src="/icon/chat-white.png"
                  width={26}
                  height={26}
                  alt="Chat Icon"
                />
              </Grid>
            </Grid>
          )}
        </Grid>
      )}
    </Container>
  );
};

export default BottomBot;
