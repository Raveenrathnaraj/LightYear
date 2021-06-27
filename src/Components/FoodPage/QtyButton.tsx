import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/IconButton";
import {RemoveCircleOutlineRounded as Reduce, AddCircleOutlineRounded as Add } from '@material-ui/icons';

const useStyles = makeStyles({
    round: {
        borderRadius: "50%",
    },
    group: {
        width: '20px',
    },
    r: {
        width: '5px',
        height: '10px',
        padding: '6px 0px',
    },
    qty: {
        margin: '0 20%',
    },
    MuiButtonRoot: {
        minWidth: 'none'
    }
})

export default function QtyButton(props:any) {
    const classes = useStyles();
    const [counter, setCounter] = useState(0)

    const change = (v:number) => {
        props.onChange(v)
        setCounter(v)
    }

    return (
        <React.Fragment>
            <Button  className={classes.r} disabled={counter < 1} onClick={() => change(counter - 1)}><Reduce/></Button>
            <span className = {classes.qty}>{counter}</span>
            <Button  className={classes.r} onClick={() => change(counter + 1)}><Add/></Button>
        </React.Fragment>
    );
}
