import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MiniDrawer from "./Drawer";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const list = [
    {
        text:'Check Patient',
        icon:<VaccinesIcon/>,
        route:'/patients',
    },
    {
        text:'Make Schedule',
        icon:<CalendarMonthIcon/>,
        route:'/schedule',
    },
    {
        text:'Check Appointments',
        icon:<MoreTimeIcon/>,
        route:'/appointments',
    },
]

export default function AppBarWithDrawer() {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Hospital Management System
                    </Typography>
                </Toolbar>
            </AppBar>
            <MiniDrawer open={open} setOpen={setOpen} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} list={list}/>
        </>
    );
}
