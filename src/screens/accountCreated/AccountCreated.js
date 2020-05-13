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
      width: "2%",
      marginBottom: "50px",
      paddingRight: "4%",
      [theme.breakpoints.down("sm")]: {
        width: "10%",
      },
    },
    logo: {
      width: "30px",
      padding: "10px 15px",
    },
    maildesc: {
      maxWidth: "500px",
    },
    accountCreatedContainer: {
      padding: "10px 0",
      width: "276px",
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
      "&:hover a": {
        color: "white",
      },
      "& a": {
        textDecoration: "none",
        color: "#2a68d3",
      },
      "&:hover": {
        cursor: "pointer",
        backgroundColor: "#2f74eb",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "12px 30px",
      },
    },
    footerMessage: {
      fontSize: "15px",
      maxWidth: "460px",
    },
    footerMail: {
      "& a": {
        color: "#2a68d3",
        textDecoration: "none",
        fontWeight: "bold",
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
          <img src={require("../../assets/ic-header-logo@3x.png")} alt="logo" />
        </div>
      </div>
      <div className={classes.mailContainer}>
        <h2>Account Created</h2>
        <div className={classes.maildesc}>
          <div className={classes.horray}>Hooray!!</div>
          You’ve created your account, well done!
        </div>
        <div className={classes.accountCreatedContainer}>
          <img
            src={require("../../assets/accountCreated.svg")}
            alt="accountCreated"
          />
        </div>
        <div className={classes.submitButton}>
          <Link to="/">Setup new Business</Link>
        </div>
        <div className={classes.footerMessage}>
          If you want to join an existing business, please ask your team to
          invite you over the E-Mail:{" "}
          <div className={classes.footerMail}>
            <Link to="#">danielle.feiken@gmail.com</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
