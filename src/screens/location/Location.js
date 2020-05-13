import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
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
      width: "75%",
      marginBottom: "50px",
      paddingRight: "4%",
    },
    logo: {
      width: "30px",
      padding: "10px 15px",
    },
    maildesc: {
      maxWidth: "500px",
    },
    formControl: {
      width: "30%",
      [theme.breakpoints.down("sm")]: {
        width: "60%",
      },
    },
 ,
    teamContainer: {
      width: "30%",
      display: "flex",
      justifyContent: "space-between",
    },
    addNewLocationContainer: {
      //   maxWidth: "500px",
      width: "30%",
      fontSize: "13px",
      display: "flex",
      justifyContent: "space-between",
    },
    buttons: {
      display: "flex",
      justifyContent: "space-between",
    },

    submitButton: {
      borderRadius: "28px",
      border: "2px solid #2a68d3",
      padding: "12px 95px",
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
        padding: "12px 68px",
      },
    },
    footerLink: {
      width: "330px",
      textAlign: "right",
      "& a": {
        color: "#2a68d3",
        textDecoration: "none",
      },
    },
  })
);
export default function Location() {
  const classes = style();
  return (
    <div className={classes.emailcontainer}>
      <div className={classes.header}>
        <div className={classes.logo}>
          <img src={require("../../assets/ic-header-logo@3x.png")} alt="logo" />
        </div>
      </div>
      <div className={classes.mailContainer}>
        <h2>Your Locations</h2>
        <div className={classes.maildesc}>
          Add your locations by giving them a short name. If you only have one
          location it can be the same as the business name.
        </div>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Location Name</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={""}
            placeholder="E.g. City Center"
          >
            <MenuItem value={10}>First</MenuItem>
            <MenuItem value={20}>Second</MenuItem>
            <MenuItem value={30}>Third</MenuItem>
            <MenuItem value={10}>First</MenuItem>
            <MenuItem value={20}>Second</MenuItem>
            <MenuItem value={30}>Third</MenuItem>
            <MenuItem value={10}>First</MenuItem>
            <MenuItem value={20}>Second</MenuItem>
            <MenuItem value={30}>Third</MenuItem>
          </Select>
        </FormControl>
        <div className={classes.addNewLocationContainer}>
          <div className={classes.addNewLocation}>Add Location</div>
          <div className={classes.addNewLocation}>Need help?</div>
        </div>
        <h2>Your Teams</h2>
        <div className={classes.maildesc}>
          Add your teams and assign them to a location.
        </div>
        <div className={classes.teamContainer}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Team Name</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={""}
              placeholder="E.g. City Center"
            >
              <MenuItem value={10}>First</MenuItem>
              <MenuItem value={20}>Second</MenuItem>
              <MenuItem value={30}>Third</MenuItem>
              <MenuItem value={10}>First</MenuItem>
              <MenuItem value={20}>Second</MenuItem>
              <MenuItem value={30}>Third</MenuItem>
              <MenuItem value={10}>First</MenuItem>
              <MenuItem value={20}>Second</MenuItem>
              <MenuItem value={30}>Third</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Location Name</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={""}
              placeholder="E.g. City Center"
            >
              <MenuItem value={10}>First</MenuItem>
              <MenuItem value={20}>Second</MenuItem>
              <MenuItem value={30}>Third</MenuItem>
              <MenuItem value={10}>First</MenuItem>
              <MenuItem value={20}>Second</MenuItem>
              <MenuItem value={30}>Third</MenuItem>
              <MenuItem value={10}>First</MenuItem>
              <MenuItem value={20}>Second</MenuItem>
              <MenuItem value={30}>Third</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={classes.addNewLocationContainer}>
          <div className={classes.addNewLocation}>Add Location</div>
          <div className={classes.addNewLocation}>Need help?</div>
        </div>
        <div className={classes.buttons}>
          <div className={classes.submitButton}>
            <Link to="/">Back</Link>
          </div>
          <div className={classes.submitButton}>
            <Link to="/">Next</Link>
          </div>
        </div>
        <div className={classes.footerLink}>
          <Link to="#">Skip</Link>{" "}
        </div>
      </div>
    </div>
  );
}
