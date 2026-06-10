import React, { useState } from "react";
import { login } from "../api/authApi";
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography
} from "@mui/material";

function Login() {

  const [form,setForm] =
      useState({
        username:"",
        password:""
      });

  const handleSubmit =
      async(e)=>{

    e.preventDefault();

    try{

      const response =
          await login(form);

      localStorage.setItem(
          "token",
          response.data.token
      );

      localStorage.setItem(
          "username",
          response.data.username
      );

      window.location.href =
          "/dashboard";

    }catch(err){

      alert(
          "Invalid Credentials"
      );
    }
  };

  return (

      <Container maxWidth="sm">

        <Paper
            sx={{
              p:4,
              mt:10
            }}>

          <Typography
              variant="h4">

            Login
          </Typography>

          <form
              onSubmit={
                  handleSubmit
              }>

            <TextField
                fullWidth
                label="Username"
                margin="normal"
                onChange={(e)=>
                    setForm({
                        ...form,
                        username:e.target.value
                    })
                }
            />

            <TextField
                fullWidth
                type="password"
                label="Password"
                margin="normal"
                onChange={(e)=>
                    setForm({
                        ...form,
                        password:e.target.value
                    })
                }
            />

            <Button
                fullWidth
                variant="contained"
                type="submit">

              Login

            </Button>

          </form>

        </Paper>

      </Container>
  );
}

export default Login;