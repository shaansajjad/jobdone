import React, { useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { FormControl } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import ApiService from "../../services/ApiService";

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
      width: "35%",
      display: "flex",
      marginTop: "43px",
      [theme.breakpoints.down("sm")]: {
        width: "60%",
      },
      "& select": {
        marginTop: "2em",
        backgroundColor: "transparent",
        border: "none",
        borderBottom: "1px solid",
      },
      outline: "none",
    },
    inputDivContainer: {
      padding: "30px 0",
      width: "35%",
      [theme.breakpoints.down("sm")]: {
        width: "80%",
      },
    },
    dynamicFields: {
      display: "flex",
      "& button": {
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
      },
    },
    formItem: {
      marginBottom: "20px",
      position: "relative",
    },
    teamContainer: {
      display: "flex",
      justifyContent: "space-between",
      "& button": {
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
      },
    },
    addNewLocationContainer: {
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
  const [location, setLocation] = React.useState([{ location_name: null }]);
  const [team, setTeam] = React.useState([{ team_name: null }]);

  function handleLocationChange(i, event) {
    const values = [...location];
    values[i].location_name = event.target.value;
    if (event.keyCode === 13) {
      setLocation(values);
      console.log("location", location);
    }
  }

  function handleTeamChange(i, event) {
    const values = [...team];
    values[i].team_name = event.target.value;
    if (event.keyCode === 13) {
      setTeam(values);
      console.log("location", team);
    }
  }
  function addLocation() {
    const values = [...location];
    values.push({ location_name: null });
    setLocation(values);
  }

  function addTeam() {
    const values = [...team];
    values.push({ team_name: null });
    setTeam(values);
  }

  function handleLocationRemove(i) {
    const values = [...location];
    values.splice(i, 1);
    setLocation(values);
  }

  function handleTeamRemove(i) {
    const values = [...team];
    values.splice(i, 1);
    setTeam(values);
  }
  function nextAction(e) {
    // ApiService.location().then((res) => {
    //   alert("location Sent");
    //   console.log("Response", res);
    // });
    e.preventDefault();
    let locationObj = { location: [{ location }] };
    console.log("locationObj", locationObj);
  }

  useEffect(() => {});
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
        <div className={classes.inputDivContainer}>
          {location.map((field, idx) => {
            return (
              <div key={`${field}-${idx}`} className={classes.dynamicFields}>
                <TextField
                  margin="normal"
                  fullWidth
                  type="text"
                  onKeyDown={(e) => handleLocationChange(idx, e)}
                  label="Location Name"
                  placeholder="E.g. City Center"
                />
                <button type="button" onClick={() => handleLocationRemove(idx)}>
                  X
                </button>
              </div>
            );
          })}
          <div className={classes.addNewLocationContainer}>
            <div className={classes.addNewLocation} onClick={addLocation}>
              Add Location
            </div>
            <div className={classes.addNewLocation}>Need help?</div>
          </div>
          <h2>Your Teams</h2>
          <div className={classes.maildesc}>
            Add your teams and assign them to a location.
          </div>
          {team.map((field, idx) => {
            console.log("field", field);
            console.log("idx", idx);
            return (
              <div key={`${field}-${idx}`} className={classes.teamContainer}>
                <div className={classes.inputDivContainer}>
                  <div className={classes.formItem}>
                    <TextField
                      margin="normal"
                      fullWidth
                      type="text"
                      onKeyDown={(e) => handleTeamChange(idx, e)}
                      label="Team Name"
                      placeholder="E.g. Kitchen"
                    />
                  </div>
                </div>

                <FormControl className={classes.formControl}>
                  <select placeholder="Select Location Name">
                    {location.map((val) => {
                      return <option key={val}>{val.location_name}</option>;
                    })}
                  </select>
                </FormControl>
                <button type="button" onClick={() => handleTeamRemove(idx)}>
                  X
                </button>
              </div>
            );
          })}
          <div className={classes.addNewLocationContainer}>
            <div className={classes.addNewLocation} onClick={addTeam}>
              Add Team
            </div>
            <div className={classes.addNewLocation}>Need help?</div>
          </div>

          <div className={classes.buttons}>
            <div className={classes.submitButton}>
              <Link to="/">Back</Link>
            </div>
            <div className={classes.submitButton} onClick={nextAction}>
              <Link to="/">Next</Link>
            </div>
          </div>
          <div className={classes.footerLink}>
            <Link to="#">Skip</Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
