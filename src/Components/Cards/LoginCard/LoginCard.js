import React from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Lock from "@material-ui/icons/Lock";
import style from "./loginCard.css";
import Alert from "@material-ui/lab/Alert";
import {
  Button,
  makeStyles,
  CircularProgress,
  Snackbar
} from "@material-ui/core";

const infoStyles = theme => ({
  socialIcon: {
    fontSize: "20px",
    boxShadow: "none",
    paddingLeft: "30px",
    paddingRight: "30px",
    color: "#00acc4",
    fontFamily: "Roboto Slab, Times New Roman, serif"
  }
});

const useStyles = makeStyles(infoStyles);

const LoginCard = () => {
  const [isLoginIn, setLoginIn] = React.useState(false);
  const [isErrorVisible, setErrorVisible] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  const classes = useStyles();

  const loginClicked = () => {
    setLoginIn(true);
    console.log("LoginIn");
    // Make a network call to try an log the user in
    setTimeout(() => {
      setLoginIn(false);
      setErrorMsg("Wrong username or password");
      setErrorVisible(true);
    }, 2000);
  };

  const renderLogin = () => {
    if (isLoginIn) {
      return <CircularProgress color="inherit" />;
    } else {
      return (
        <Button onClick={loginClicked} className={classes.socialIcon}>
          Login
        </Button>
      );
    }
  };

  return (
    <div className="loginCardContainer">
      <div className="loginCardHeader">
        <div>Login</div>
        <div>-</div>
        <div>NextPipe Admin Dashboard</div>
      </div>
      <div className="inputDiv">
        <Input
          id="input-with-icon-adornment"
          placeholder="Username"
          fullWidth
          varian="filled"
          style={{ fontSize: "14px" }}
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle style={{ color: "#495057" }} />
            </InputAdornment>
          }
        />
      </div>
      <div className="inputDiv">
        <Input
          id="input-with-icon-adornment"
          placeholder="Password"
          fullWidth
          type="password"
          style={{ fontSize: "14px" }}
          startAdornment={
            <InputAdornment position="start">
              <Lock style={{ color: "#495057" }} />
            </InputAdornment>
          }
        />
      </div>
      <Snackbar
        filledError
        open={isErrorVisible}
        autoHideDuration={12000}
        onClose={() => setErrorVisible(false)}
      >
        <Alert
          variant="filled"
          onClose={() => setErrorVisible(false)}
          severity="error"
        >
          {errorMsg}
        </Alert>
      </Snackbar>
      <div className="loginBtnDiv">{renderLogin()}</div>
    </div>
  );
};

export default LoginCard;
