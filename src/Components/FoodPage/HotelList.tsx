import React  from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../Helpers/Card/Card";
import CardHeader from "../Helpers/Card/CardHeader";
import CardBody from "../Helpers/Card/CardBody";
import { Grid } from "@material-ui/core";
import foodpic3 from '../../assets/FoodHeader3.jpg'
import { ArrowForwardIos } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Rating from '@material-ui/lab/Rating';
import { useState } from "react";
import { foodCartContext } from "./FoodCart";


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

const hotelList:hotelDetails[] = [
    { id: 1, hotelName: 'Liquidz', minPrice: 100, maxPrice: 200, foodType: ['Continental', 'Chinese'], rating: 3.5, bestSellers: ['Chicken Burger', 'Chicken Nuggets', 'Kitkat MilkShake'], storeTiming: ['dateTime'],image:(foodpic3) },
    { id: 2, hotelName: 'Amman Mess', minPrice: 15, maxPrice: 120, foodType: ['Indian'], rating: 3.5, bestSellers: ['Parota', 'Kothu Parota', 'Briyani'], storeTiming: ['dateTime'], image:(foodpic3) }
]

interface hotelDetails {
    id: number,
    hotelName: string,
    minPrice:number,
    maxPrice:number,
    foodType:string[],
    rating:number,
    bestSellers:string[],
    storeTiming:any,
    image:string
}


export default function HotelList () {
    return (
        <React.Fragment>
            {hotelList.map((hotel:hotelDetails) =><HotelCard {...hotel} key={hotel.id} />)}
        </React.Fragment>
    )
}

export function HotelCard (props:hotelDetails) {
    const classes = useStyles();
    const [value, setValue] = useState<number | null>(props.rating);
    
    return(
        <div className = {classes.style}>
            <Card className = {classes.card}>
                <CardHeader className = {classes.cardHeader}>
                    <h2>{props.hotelName}</h2>
                </CardHeader>
                <CardBody className = {classes.cardBody}>
                    <Grid container>
                        <Grid item className = {classes.img} xs = {5} md = {3}>
                            <img src = {props.image} width = '100%' height = '100%'></img>
                        </Grid>
                        <Grid item className = {classes.desc}>
                            <div>Price Range: {props.minPrice} to {props.maxPrice}</div>
                            <div>
                                {props.foodType?.map((type:string,index:number) => <span key ={index} >#{type}&nbsp;</span>)}
                            </div>
                            <div>Rating</div>
                            <div>
                                <Rating 
                                name="half-rating" 
                                value={value} 
                                precision={0.5} 
                                size = 'small' 
                                onChange={(event, newValue) => {setValue(newValue)}}
                                />
                            </div>
                            <div>{value} out of 5</div>
                            <Grid container>
                               <Link to={`/food/${props.id}`}><h4>View Dishes <ArrowForwardIos className = {classes.arrow} /></h4></Link>
                            </Grid>    
                        </Grid>
                        <Grid item className = {classes.topfoods}>
                            <div>Best Sellers</div>
                            {props.bestSellers?.map((food:string,index:number) => <li key ={index}>{food}</li>)}
                        </Grid>
                    </Grid>
                </CardBody>
            </Card>
        </div>
    );
}