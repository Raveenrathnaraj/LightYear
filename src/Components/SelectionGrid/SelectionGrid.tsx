import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Card from "../Helpers/Card/Card";
import CardHeader from "../Helpers/Card/CardHeader";
import CardBody from "../Helpers/Card/CardBody";
import { Link } from "react-router-dom";
import { ArrowForwardIos } from "@material-ui/icons";

const useStyles = makeStyles({
        "& h2": {
            marginBottom: '10%'
        },
        style: {
            paddingLeft: '1rem',
            paddingRight: '1rem',
            textAlign: 'center'
        },
        link: {
            textDecoration: 'none',
            color: 'inherit',
            backgroundColor: '#5a48a7'
        },
        images: {
            width: '40%',
            height: '40%',
            padding: '5px'
        },
        img: {
            width: '130px',
            height: '90px',
            "@media (max-width: 350px)": { 
                width: '90px',
                height: '60px'
            }
        },
        category: {
            boxShadow: '10% 10% 8px #616161',
            '&:hover': {
                transform: 'scale(1.05)'
            }
        },
        CardHeader: {
            verticalAlign: 'center'
        }
})

export default function SelectionGrid (props:SelectionGridProps) {
    const classes = useStyles();
    return(
            <Grid item sm={6} xs={12} className={classes.style}>
                <h2>{props.heading}</h2>
                <Link to= {props.link} className={classes.link}>
                    <Card className={classes.category} >
                        <CardHeader className = {classes.CardHeader}>
                            <span style = {{display: 'inline', fontSize: "1.2rem"}} >{props.category}</span>
                            {props.icon} 
                            <span style = {{marginLeft : "5%"}}> <ArrowForwardIos/> </span>
                        </CardHeader>
                        <CardBody>
                            <Grid>
                                <span className={classes.images}>
                                    <img src={props.pic1} className={classes.img} />
                                </span>
                                <span className={classes.images}>
                                    <img src={props.pic2} className={classes.img} />
                                </span>
                            </Grid>
                            <Grid>
                                <span className={classes.images}>
                                    <img src={props.pic3} className={classes.img} />
                                </span>
                                <span className={classes.images}>
                                    <img src={props.pic4} className={classes.img} />
                                </span>
                            </Grid>
                        </CardBody>
                    </Card>
                </Link>
            </Grid>
    );
}

interface SelectionGridProps {
    heading:string;
    category:string,
    icon:any,
    link:string,
    pic1:string,
    pic2:string,
    pic3:string,
    pic4:string
}