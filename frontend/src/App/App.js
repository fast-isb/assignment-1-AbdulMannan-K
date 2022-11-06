import React from 'react';
import './App.css';
import AppBarWithDrawer from "../Components/AppBar";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import CheckPatient from "../Pages/CheckPatient";
import {
    createBrowserRouter,
    RouterProvider,
    Route, Outlet,
} from "react-router-dom";
import * as service from "../Services/Patient"
import NewPatient from '../Pages/newPatient';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const router = createBrowserRouter([
    {
        path: "/",
        element:
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBarWithDrawer />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    <Outlet />
                </Box>
            </Box>,
        children:[
            {
                path:"/patients",
                element:
                    <CheckPatient patients={service.patients} />
                    // <CheckPatient patients={service.getAllPatients()}/>
            }
        ]
    },
]);
function App() {
  return (
    <RouterProvider router={router}/>
    // <NewPatient />
  );
}

export default App;
