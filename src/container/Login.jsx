import React, { useState } from "react";
// import mui components
import { Box, Button, TextField, styled, Typography } from "@mui/material";



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
const Heading=styled(Typography)`
    text-align: center;
    padding:50px 0 0;

`
const Signup = styled(Button)`
border-radius:2px;
text-color:#fff;
height 50px;
`;
const Loginbutton = styled(Button)`
text-transform:None;
border-radius:2px;
text-color:#fff;
height 50px;
`;
const signupvalues={
    name:"",
    username:"",
    password:""
}
const Login = () => {
    const [account, setAccount] = useState('login')
    const [signup, setsignup] = useState(signupvalues)
    const togglepage=()=>{
        account==='signup' ? setAccount('login') : setAccount('signup');
    }
    const signupdetails=(e)=>{
        setsignup({...signup,[e.taret.name]:e.target.value})
    }
  return (
    <>
      <Component>
          <Heading variant="h4" >Blogger</Heading>
          { 
              account === 'login' ?
        <InsideWrapper>
          <TextField label="Username" variant="outlined" />
          <TextField label="Password" variant="outlined" />
          <Loginbutton variant="contained">Login</Loginbutton>
          <Typography sx={{ textAlign: "center" }}>Or</Typography>
          <Signup variant="outlined" onClick={()=>togglepage()}>Create an Account</Signup>
        </InsideWrapper>
            :
        <InsideWrapper>
          <TextField label="Name" onchange={(e)=>signupdetails(e)}name="name" variant="outlined" />
          <TextField label="Username"onchange={(e)=>signupdetails(e)} name="username" variant="outlined" />
          <TextField label="Password" onchange={(e)=>signupdetails(e)}name="password" variant="outlined" />
          <Signup variant="outlined">SignUp</Signup>
          <Typography sx={{ textAlign: "center" }}>Or</Typography>
          <Loginbutton variant="contained" onClick={()=>togglepage()}>Already have an Account</Loginbutton>
        </InsideWrapper>
          }
      </Component>

    </>
  );
};

export default Login;
