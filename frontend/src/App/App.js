import logo from '../logo.svg';
import React from 'react';
import './App.css';
import AppBarWithDrawer from "../Components/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import CheckPatient from "../Pages/CheckPatient";
import * as service from "../Services/Patient"

function App() {

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));

  return (

      <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBarWithDrawer />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <DrawerHeader />
              <CheckPatient patients={service.patients}/>
          </Box>
      </Box>
  );
}

export default App;
