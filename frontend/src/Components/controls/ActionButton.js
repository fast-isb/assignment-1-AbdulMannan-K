import React from 'react'
import { Button, makeStyles } from '@mui/material';
export default function ActionButton(props) {

    const { color, children, onClick } = props;

    return (
        <Button
            sx={{color:{color}}}
            onClick={onClick}>
            {children}
        </Button>
    )
}
