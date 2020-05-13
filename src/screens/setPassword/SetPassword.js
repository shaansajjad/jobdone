import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { isValidPassword } from "../../regex/Validation";
import ApiService from "../../services/ApiService";

const style = makeStyles((theme) =>
  createStyles({
    mailContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      overflow: "hidden",
    },
    emailVerifiedButton: {
      display: "flex",
      borderRadius: "28px",
      padding: "5px 25px;",
      backgroundColor: "rgba(59, 97, 163, 0.1)",
      fontWeight: "bold",
      fontSize: "15px",
      marginBottom: "15px",
      alignItems: "center",
      "&:hover": {
        cursor: "pointer",
        backgroundColor: "#2f74eb",
        color: "white",
      },
    },
    mailicon: {
      width: "17px",
      margin: "4px 15px 0 0",
    },
    header: {
      backgroundColor: "#2f74eb",
      maxWidth: "62%",
      marginBottom: "30px",
      paddingRight: "4%",
    },
    logo: {
      width: "30px",
      padding: "10px 15px",
    },
    maildesc: {
      maxWidth: "418px",
      fontSize: "15px",
      [theme.breakpoints.down("sm")]: {
        maxWidth: "406px",
      },
    },
    inputDivContainer: {
      padding: "30px 0",
      width: "35%",
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
      top: "27px",
      cursor: "pointer",
      color: "rgba(0, 30, 82, 0.48)",
    },
    termsNconditions: {
      display: "flex",
    },
    terms: {
      fontSize: "15px",
      textAlign: "left",
      "& a": {
        color: "#2a68d3",
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
export default function SetPassword() {
  const classes = style();
  const [state, setState] = React.useState({
    password: "",
    confirmPassword: "",
    errors: "",
    showPassword: false,
    checked: false,
    deviceToken: "some device token",
    platform: "3",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({
      ...state,
      ...{ [name]: value },
    });
  };
  const setPassword = (val, props) => {
    val.preventDefault();
    let { password, confirmPassword } = state;
    var setTokenLocalStorage = new URLSearchParams(window.location.search).get(
      "token"
    );
    // let token = location.href.indexOf("token");
    // let setTokenLocalStorage = location.href.substring(token);
    localStorage.setItem("token", setTokenLocalStorage);
    let getToken = localStorage.getItem("token");
    let passwordData = {
      password: state.password,
      device_token: state.deviceToken,
      token: getToken,
      platform: state.platform,
    };
    if (isValidPassword(password) && isValidPassword(confirmPassword)) {
      console.log("Password", password, confirmPassword);
      if (password === confirmPassword) {
        ApiService.setPassword(passwordData).then((res) => {
          alert("mail send");
          console.log("Response", res);
        });
      } else {
        setState({ errors: "Password and Confirm Password do not match" });
      }
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
    <div className={classes.emailcontainer}>
      <div className={classes.header}>
        <div className={classes.logo}>
          <img src={require("../../assets/ic-header-logo@3x.png")} alt="logo" />
        </div>
      </div>
      <div className={classes.mailContainer}>
        <div className={classes.emailVerifiedButton}>
          <span className={classes.mailicon}>
            <img src={require("../../assets/mail.svg")} alt="mail" />
          </span>
          E-Mail verified!
        </div>
        <h2>Set your Password!</h2>
        <div className={classes.maildesc}>
          To keep the bad guys out, choose a secure password. Make it at least 8
          characters and include a special character.
        </div>
        <div className={classes.inputDivContainer}>
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
          <div className={classes.formItem}>
            <TextField
              margin="normal"
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              placeholder="Confirm Password"
              type="password"
              id="confirm-password"
              autoComplete="current-password"
              value={state.confirmPassword || ""}
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
          <div className={classes.termsNconditions}>
            <FormControlLabel
              control={
                <Checkbox
                  name="checked"
                  color="primary"
                  onChange={handleChange}
                  value={state.checked || ""}
                />
              }
            />
            <div className={classes.terms}>
              I have read and accept the <Link to="#"> Terms & Conditions</Link>{" "}
              and <Link to="#"> Privacy Policy </Link>
              of JobDone.
            </div>
          </div>
        </div>

        <div className={classes.submitButton} onClick={setPassword}>
          Set Password
        </div>
      </div>
    </div>
  );
}
