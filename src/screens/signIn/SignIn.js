import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { isValidEmail, isValidPassword } from "../../regex/Validation";
import ApiService from "../../services/ApiService";

const style = makeStyles((theme) =>
  createStyles({
    signupContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      height: "100vh",
      overflow: "hidden",
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
      maxWidth: "350px",
    },
    inputDivContainer: {
      padding: "30px 0",
      width: "60%",
      [theme.breakpoints.down("sm")]: {
        width: "80%",
      },
    },
    formItem: {
      marginBottom: "20px",
      position: "relative",
    },
    errormessage: {
      color: "#fa675c",
      fontSize: "13px",
      margin: "0",
      padding: "0",
    },
    showPassword: {
      position: "absolute",
      right: "0",
      // bottom: "43px",
      top: "27px",
      cursor: "pointer",
      color: "rgba(0, 30, 82, 0.48)",
    },

    forgotPasswd: {
      fontSize: "13px",
      textAlign: "right",
      "& a": {
        color: "#2a68d3",
        textDecoration: "none",
      },
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
  })
);
export default function SignIn(props) {
  const classes = style();
  const [state, setState] = React.useState({
    email: "",
    password: "",
    errors: "",
    showPassword: false,
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
    let { email, password } = state;
    let signInData = { email: state.email, password: state.password };
    if (isValidEmail(email) && isValidPassword(password)) {
      ApiService.loginUsers(signInData).then((res) => {
        alert("mail send");
        console.log("Response", res);
        props.history.push("/");
      });
    } else {
      setState({ errors: "Please fill the valid details" });
    }
  };
  const showPassword = () => {
    console.log("showpass");
    setState({ ...state, showPassword: !state.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className={classes.signupContainer}>
      <div className={classes.leftContainer}>
        <div className={classes.logo}>
          <img
            src={require("../../assets/ic-job-done-logo@3x.png")}
            alt="logo"
          />
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
          <div className={classes.alreadyAccount}>Don't have an account?</div>
          <Link className={classes.loginButton} to="/">
            Sign Up for free
          </Link>
        </div>
        <div className={classes.rightContainerMain}>
          <div className={classes.welcome}>
            <div className={classes.hand}>
              <img src={require("../../assets/rightHand.png")} alt="hand" />
            </div>
            <strong> Log in</strong>
            <div className={classes.hand}>
              <img src={require("../../assets/leftHand.png")} alt="hand" />
            </div>
          </div>
          <div className={classes.address}>
            Welcome back! Enter your log in details below.
          </div>
          <div className={classes.inputDivContainer}>
            <div className={classes.formItem}>
              <TextField
                margin="normal"
                fullWidth
                id="email"
                label="E-Mail"
                name="email"
                placeholder="Enter E-Mail"
                autoComplete="email"
                value={state.email || ""}
                onChange={handleChange}
                autoFocus
              />
              <small className={classes.errormessage}>{state.errors}</small>
            </div>
            <div className={classes.formItem}>
              <TextField
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                placeholder="Enter Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={state.password || ""}
                onChange={handleChange}
              />
              <span
                className={classes.showPassword}
                onClick={showPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {state.showPassword ? (
                  <i className="fa fa-eye fa-lg" aria-hidden="true"></i>
                ) : (
                  <i className="fa fa-eye-slash" aria-hidden="true"></i>
                )}
              </span>
              <small className={classes.errormessage}>{state.errors}</small>
            </div>
            <div className={classes.forgotPasswd}>
              <Link to="/sign_in">Forgot your password?</Link>
            </div>
          </div>
          <div className={classes.submitButton} onClick={submitAction}>
            Login
          </div>
        </div>
      </div>
    </div>
  );
}
