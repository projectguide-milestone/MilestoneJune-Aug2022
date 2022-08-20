import React from 'react'
// import './Logtest.css';
import {Button, Link, sizing, Box, Typography, Checkbox, TextField, Grid, Paper, Avatar} from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import {MailRounded, Visibility, VisibilityOff} from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';
import FormControlLabel from '@mui/material/FormControlLabel';
import LockOutlined from '@mui/icons-material/LockOutlined';


function Logtest() {
  const paperStyle={padding :20,height:'70vh',width:300, margin:"20px auto"}
  const avatarStyle={backgroundColor:'#10bac1'}
  const btnstyle={margin:'10px 0'}
  const labelstyle={ margin:'10px 0'}
  return (
<div >
    <Grid>
      <Paper elevation={10} style={paperStyle}>

     <Grid align='center' >
          <Avatar style={avatarStyle}><LockOutlined/></Avatar>
        <Typography component="h1" variant="h4">
            Sign in
          </Typography>
        <Grid style={labelstyle}>
          <TextField 
            variant="outlined" 
            placeholder='example@mail.com'
            type="text"
            label='Email'
            fullWidth required/>
        </Grid>
            <TextField 
            type="password"
            label='Password'
            fullWidth required/>
            
          <FormControlLabel
            control={
                <Checkbox/>
                }
                
                label="Agree to Terms and Conditions"/>
                
          <Button   variant="contained" color="primary" style={btnstyle}
                    size= "large"
                    startIcon={<LoginIcon/>}>
                    Log In
          </Button>

          <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>
    </Grid>
    </Paper>
    </Grid>
</div>



  )
}

export default Logtest