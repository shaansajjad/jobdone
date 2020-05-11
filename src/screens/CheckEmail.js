import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
const style = makeStyles((theme) =>
  createStyles({
    mailContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    header: {
      backgroundColor: "#2f74eb",
      maxWidth: "426px",
      marginBottom: "70px",
      paddingRight: "4%",
      [theme.breakpoints.down("sm")]: {
        maxWidth: "213px",
      },
    },
    logo: {
      width: "30px",
      padding: "10px 15px",
    },
    maildesc: {
      maxWidth: "500px",
    },
    emailImageContainer: {
      padding: "30px 0",
      width: "368px",
    },
    buttons: {
      display: "flex",
      justifyContent: "space-between",
    },
    submitButton: {
      borderRadius: "28px",
      border: "2px solid #2a68d3",
      padding: "12px 55px",
      margin: "10px",
      backgroundColor: "white",
      fontSize: "15px",
      fontWeight: "bold",
      marginBottom: "30px",
      "& a": {
        textDecoration: "none",
        color: "#2a68d3",
        "&:hover": {
          color: "white",
        },
      },
      "&:hover": {
        cursor: "pointer",
        backgroundColor: "#2f74eb",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "12px 30px",
      },
    },
  })
);
export default function CheckEmail() {
  const classes = style();
  return (
    <div className={classes.emailcontainer}>
      <div className={classes.header}>
        <div className={classes.logo}>
          <img src={require("../assets/ic-header-logo@3x.png")} alt="logo" />
        </div>
      </div>
      <div className={classes.mailContainer}>
        <div>
          <h2>Check your E-Mail!</h2>
        </div>
        <div className={classes.maildesc}>
          We have sent you an E-Mail to danielle.feiken@gmail.com. Click on the
          link inside it and we’re soon done!
        </div>
        <div className={classes.emailImageContainer}>
          <img src={require("../assets/ic-email.svg")} alt="email" />
        </div>
        <div className={classes.buttons}>
          <div className={classes.submitButton}>
            <Link to="/">Back to Sign up</Link>
          </div>
          <div className={classes.submitButton}>
            <Link to="/">Resend E-Mail</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
