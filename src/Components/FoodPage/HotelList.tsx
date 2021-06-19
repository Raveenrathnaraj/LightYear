import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../Helpers/Card/Card";
import CardHeader from "../Helpers/Card/CardHeader";
import CardBody from "../Helpers/Card/CardBody";
import { Grid } from "@material-ui/core";
import foodpic3 from '../../assets/FoodHeader3.jpg'
import { ArrowForwardIos } from "@material-ui/icons";


const useStyles = makeStyles({
    card:{
        boxShadow: '1px 3px 15px 14px lightgrey'   
    },
    style: {
        padding: '0% 5%',
    },
    cardHeader: {
        textAlign: 'center'
    },
    cardFooter: {
        marginLeft: '10%'
    },
    cardBody:{
        padding: '0 1rem 1rem 1rem'
    },
    img: {
        width: '35%'
    },
    desc: {
        fontSize: '1rem',
        marginLeft: '10%',
        "@media (max-width: 539px)": {
            fontSize: '0.7rem',
            marginLeft: '5%'
        },
        "@media (max-width: 281px)": {
            fontSize: '0.5rem',
            marginLeft: '5%'
        }
    },
    topfoods: {
        fontSize: '1rem',
        marginLeft: '10%',
        "@media (max-width: 770px)": { 
            display: 'none'
        }
    },
    sideButton: {
        marginLeft:' 3%',
        transform: 'translateY(18%)',
        "@media (max-width: 770px)": { 
            display: 'none'
        }
    },
    arrow: {
        transform: 'translateY(6px)',
        "@media (max-width: 770px)": { 
            fontSize: '13px',
            transform: 'translateY(3px)'
        }
    }
})

export default function HotelList () {
    const classes = useStyles();
    return(
        <div className = {classes.style}>
            <Card className = {classes.card}>
                <CardHeader className = {classes.cardHeader}>
                    <h2>HotelName</h2>
                </CardHeader>
                <CardBody className = {classes.cardBody}>
                    <Grid container>
                        <Grid item className = {classes.img} xs = {5} md = {3}>
                            <img src = {foodpic3} width = '100%' height = '100%'></img>
                        </Grid>
                        <Grid item className = {classes.desc}>
                            <div>Price Range: 200 to 500</div>
                            <div>
                                <span>#Continental</span>&nbsp;
                                <span>#Chineses</span>
                            </div>
                            <div>Rating</div>
                            <div>Stars</div>
                            <Grid container><h4>View Dishes <ArrowForwardIos className = {classes.arrow} /></h4></Grid>    
                        </Grid>
                        <Grid item className = {classes.topfoods}>
                            <div>Best Foods</div>
                                <li>food1</li>
                                <li>food2</li>
                                <li>food3</li>
                        </Grid>
                    </Grid>
                </CardBody>
            </Card>
        </div>
    );
}