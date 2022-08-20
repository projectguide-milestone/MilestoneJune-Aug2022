import React from 'react';
import {Typography, Button, AppBar, card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@mui/material'
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';



const NavigationBar = () => {
  return (
<>
<CssBaseline/>
<AppBar  position="relative">
    <Toolbar>
        <AccountBalanceRoundedIcon/>
         <Typography variant="h6" >Accounting System</Typography>
         <Button color='primary' varient="contained" > Student</Button> 
    </Toolbar>
    
</AppBar>

<main>
  <div>
    <container maxWidth="sm">
      <Typography variant ="h2" align='center' color="textPrimary" gutterBottom>
        Accounting System
      </Typography>
    </container>
  </div>
</main>

    </>
  )
}

export default NavigationBar