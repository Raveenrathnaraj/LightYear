import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    style: {

    }
})

export default function Groceries () {
    const classes = useStyles();
    return(
        <div className = {classes.style}>
            
        </div>
    );
}