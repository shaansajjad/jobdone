import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles, createStyles } from "@material-ui/core";

const style = makeStyles((theme) =>
  createStyles({
    mainButton: {
      position: "relative",
    },
    addbutton: {
      position: "absolute",
      left: "0",
    },
  })
);

const SelectList = (props) => {
  const classes = style();
  return (
    <select>
      <option value="">Select Value</option>
      {props.location.map((val) => {
        return <option key={val}>{val.location_name}</option>;
      })}
    </select>
  );
};
export default SelectList;
