import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { isValidEmail } from "../regex/Validation";
import ApiService from "../services/ApiService";
import axios from "axios";

const style = makeStyles((theme) =>
  createStyles({
    signupContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      height: "100vh",
    },
    leftContainer: {
      background: "linear-gradient(332deg, #2f74eb, #2a68d3)",
      width: "30%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      color: "white",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    logo: {
      width: "198px",
    },
    happierPlace: {
      padding: "20px 0",
    },
    schYourWork: {
      maxWidth: "338px",
    },
    rightContainer: {
      width: "70%",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    rightContainerHeader: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      "> div": {
        padding: "20px",
      },
      alignItems: "center",
    },
    alreadyAccount: {
      color: "grey",
      margin: "10px",
      fontSize: "13px",
    },
    loginButton: {
      color: "#4f8dff",
      border: "2px solid #4f8dff",
      padding: "6px 25px",
      textDecoration: "none",
      margin: "10px",
      marginRight: "30px",
      borderRadius: "24px",
      "&:hover": {
        cursor: "pointer",
        color: "white",
        backgroundColor: "#2f74eb",
        border: "2px solid #2f74eb",
      },
    },

    rightContainerMain: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "100px 0",
    },
    welcome: {
      fontSize: "24px",
      fontWeight: "bold",
      lineHeight: "36px",
      color: "#16243d",
      display: "flex",
      marginBottom: "20px",
    },
    hand: {
      width: "30px",
    },
    address: {
      color: "#16243d",
      fontSize: "15px",
      maxWidth: "274px",
    },
    inputDivContainer: {
      padding: "30px 0",
      width: "60%",
      [theme.breakpoints.down("sm")]: {
        width: "80%",
      },
    },
    formItem: {
      paddingBottom: "20px",
      position: "relative",
    },
    errormessage: {
      color: "#fa675c",
      fontSize: "13px",
    },
    submitButton: {
      color: "white",
      backgroundColor: "rgba(47, 116, 235, 0.5)",
      borderRadius: "28px",
      padding: "18px 96px",
      margin: "10px",
      fontSize: "15px",
      marginBottom: "30px",
      "&:hover": {
        cursor: "pointer",
        backgroundColor: "#2f74eb",
      },
    },
    desc: {
      maxWidth: "400px",
      lineHeight: "1.6",
      fontSize: "13px",
      "& a": {
        color: "#2a68d3",
      },
      [theme.breakpoints.down("sm")]: {
        maxWidth: "300px",
      },
    },
  })
);
export default function SignUp(props) {
  const classes = style();
  const [state, setState] = React.useState({
    email: "",
    errors: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({
      ...state,
      ...{ [name]: value },
    });
  };
  const submitAction = (val) => {
    val.preventDefault();
    let { email } = state;

    if (isValidEmail(email)) {
      axios
        .post("https://jobdonedev.appskeeper.com/api/v1/auth/login", { email })
        .then((res) => {
          alert("mail send");
          console.log("Message", res);
          this.props.history.push("/check-mail");
        });
    } else {
      setState({ errors: "Please fill the valid details" });
    }
  };
  return (
    <div className={classes.signupContainer}>
      <div className={classes.leftContainer}>
        <div className={classes.logo}>
          <img src={require("../assets/ic-job-done-logo@3x.png")} alt="logo" />
        </div>
        <div className={classes.happierPlace}>
          A happier place for people to work together.
        </div>
        <div className={classes.schYourWork}>
          With Jobdone you can schedule your workforce in seconds, keep
          everybody up to date and stay in full control.
        </div>
      </div>
      <div className={classes.rightContainer}>
        <div className={classes.rightContainerHeader}>
          <div className={classes.alreadyAccount}>
            Already have and Account?
          </div>
          <Link className={classes.loginButton} to="/sign_in">
            Log in
          </Link>
        </div>
        <div className={classes.rightContainerMain}>
          <div className={classes.welcome}>
            <strong>Welcome at JobDone</strong>
            <div className={classes.hand}>
              <img src={require("../assets/handEmoji.png")} alt="hand" />
            </div>
          </div>
          <div className={classes.address}>
            We’re excited to have you with us! What E-Mail address would you
            like to use?
          </div>
          <div className={classes.inputDivContainer}>
            <div className={classes.formItem}>
              <TextField
                margin="normal"
                fullWidth
                id="email"
                label="E-Mail"
                placeholder="Enter E-Mail"
                name="email"
                value={state.email || ""}
                onChange={handleChange}
                autoComplete="email"
                autoFocus
              />
              <small className={classes.errormessage}>{state.errors}</small>
            </div>
          </div>
          <div className={classes.submitButton} onClick={submitAction}>
            Sign up for free
          </div>
          <div className={classes.desc}>
            By clicking <a href="#sigup">'Signup for free trial'</a> I accept
            the<a href="#terms">Terms & Conditions </a>and Privacy Policy of
            JobDone
          </div>
        </div>
      </div>
    </div>
  );
}
