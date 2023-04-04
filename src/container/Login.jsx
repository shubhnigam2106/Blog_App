import React, { useState } from "react";
// import mui components
import { Box, Button, TextField, styled, Typography } from "@mui/material";
//
import { useDispatch } from "react-redux";

import { API } from "../service/api";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const InsideWrapper = styled(Box)`
  padding: 20px 40px;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
  & > div,
  & button,
  & p {
    margin: 10px;
  }
`;
const Heading = styled(Typography)`
  text-align: center;
  padding: 50px 0 0;
`;
const Signup = styled(Button)`
border-radius:2px;
text-color:#fff;
height 50px;
`;
const Error = styled(Typography)`
  font-size: 10px;
  font-weight: 600;
  color: #f;
`;
const Loginbutton = styled(Button)`
text-transform:None;
border-radius:2px;
text-color:#fff;
height 50px;
`;
const signupvalues = {
  name: "",
  username: "",
  password: "",
};
const loginvalue = {
  username: "",
  password: "",
};
const Login = () => {
  const [account, setAccount] = useState("login");
  const [signup, setSignup] = useState(signupvalues);
  const [login, setLogin] = useState(loginvalue);
  const [error, setError] = useState("");
  const togglepage = () => {
    account === "signup" ? setAccount("login") : setAccount("signup");
  };
  const signupdetails = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const signupUser = async () => {
    let response = await API.userSignup(signup);
    if (response.isSuccess) {
      setError("");
      setSignup(signupvalues);
      setAccount("login");
    } else {
      setError("Something went Wrong while Signup");
    }
  };
  const LoginUser = async () => {
    const response = await API.userLogin(login);
    if (response.isSuccess) {
      setError("");
      setLogin(loginvalue);
      setAccount("login");
    } else {
      setError("Something went Wrong while Signup");
    }
  };
  return (
    <>
      <Component>
        <Heading variant="h4">Blogger</Heading>
        {account === "login" ? (
          <InsideWrapper>
            <TextField
              label="Username"
              onChange={(e) => onValueChange(e)}
              name="username"
              variant="outlined"
            />
            <TextField
              label="Password"
              onChange={(e) => onValueChange(e)}
              name="password"
              variant="outlined"
            />
            {error && <Error>{error}</Error>}

            <Loginbutton variant="contained" onClick={() => LoginUser()}>
              Login
            </Loginbutton>
            <Typography sx={{ textAlign: "center" }}>Or</Typography>
            <Signup variant="outlined" onClick={() => togglepage()}>
              Create an Account
            </Signup>
          </InsideWrapper>
        ) : (
          <InsideWrapper>
            <TextField
              label="Name"
              onChange={(e) => signupdetails(e)}
              name="name"
              variant="outlined"
            />
            <TextField
              label="Username"
              onChange={(e) => signupdetails(e)}
              name="username"
              variant="outlined"
            />
            <TextField
              label="Password"
              onChange={(e) => signupdetails(e)}
              name="password"
              variant="outlined"
            />
            {error && <Error>{error}</Error>}
            <Signup variant="outlined" onClick={() => signupUser()}>
              {" "}
              SignUp{" "}
            </Signup>
            <Typography sx={{ textAlign: "center" }}>Or</Typography>
            <Loginbutton variant="contained" onClick={() => togglepage()}>
              Already have an Account
            </Loginbutton>
          </InsideWrapper>
        )}
      </Component>
    </>
  );
};

export default Login;
