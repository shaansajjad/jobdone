import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import MuiPhoneNumber from "material-ui-phone-number";
import { isValidName } from "../regex/Validation";

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

    header: {
      backgroundColor: "#2f74eb",
      maxWidth: "90%",
      marginBottom: "70px",
      paddingRight: "4%",
    },
    logo: {
      width: "30px",
      padding: "10px 15px",
    },
    maildesc: {
      maxWidth: "470px",
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
    phone: {
      width: "100%",
      marginTop: "10px",
    },
    errormessage: {
      color: "#fa675c",
      fontSize: "13px",
      margin: "0",
      padding: "0",
    },

    buttons: {
      display: "flex",
      justifyContent: "space-between",
    },
    submitButton: {
      borderRadius: "28px",
      border: "2px solid #2a68d3",
      padding: "12px 97px",
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
        padding: "12px 59px",
      },
    },
  })
);
export default function SetPassword() {
  const classes = style();
  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
    errors: "",
    phone: "",
    checked: true,
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({
      ...state,
      ...{ [name]: value },
    });
  };
  const submitAction = (val, props) => {
    val.preventDefault();
    let { firstName, lastName, phone } = state;

    if (isValidName(firstName) && isValidName(lastName)) {
      console.log("details", firstName, phone, lastName);
      // props.history.push("/");
    } else {
      setState({ errors: "Please fill the valid details" });
    }
  };

  const handlePhoneChange = (value) => {
    if (value) {
      setState({ phone: value });
    }
  };
  return (
    <div className={classes.emailcontainer}>
      <div className={classes.header}>
        <div className={classes.logo}>
          <img src={require("../assets/ic-header-logo@3x.png")} alt="logo" />
        </div>
      </div>
      <div className={classes.mailContainer}>
        <h2>It’s all about you</h2>
        <div className={classes.maildesc}>
          To help your co-workers find you, tell us your name. If they should be
          able to call you, just simply add your number.
        </div>
        <div className={classes.inputDivContainer}>
          <div className={classes.formItem}>
            <TextField
              margin="normal"
              fullWidth
              name="firstName"
              label="First Name"
              placeholder="First Name"
              type="text"
              id="firstname"
              autoComplete="first-name"
              value={state.firstName || ""}
              onChange={handleChange}
            />
            <small className={classes.errormessage}>{state.errors}</small>
          </div>
          <div className={classes.formItem}>
            <TextField
              margin="normal"
              fullWidth
              name="lastName"
              label="Last Name"
              placeholder="Last Name"
              type="text"
              id="lastname"
              autoComplete="last-name"
              value={state.lastName || ""}
              onChange={handleChange}
            />
            <small className={classes.errormessage}>{state.errors}</small>
          </div>
          <div className={classes.formItem}>
            <MuiPhoneNumber
              className={classes.phone}
              name="phone"
              label="Phone Number"
              data-cy="user-phone"
              defaultCountry={"us"}
              id="phone"
              value={state.phone || ""}
              onChange={handlePhoneChange}
            />
          </div>
        </div>
        <div className={classes.buttons}>
          <div className={classes.submitButton}>
            <Link to="/set-password">Back</Link>
          </div>
          <div className={classes.submitButton} onClick={submitAction}>
            <Link to="#">Finish</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
