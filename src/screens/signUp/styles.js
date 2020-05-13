import { makeStyles, createStyles } from "@material-ui/core";

const styles = makeStyles((theme) =>
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
export default styles;
