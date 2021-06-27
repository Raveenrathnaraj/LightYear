import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Navbar } from "../Navbar/Navbar";
import HotelList from "./HotelList";
import FoodList from "./FoodList";
import { FoodCart } from "./FoodCart";
import StickyFooter from "../StickyFooter/StickyFooter";

const useStyles = makeStyles({
    foodPage: {
        marginTop: '20vh',
    }
})

const hotelList = [
    { id: 1, hotelName: 'Liquidz', minPrice: 100, maxPrice: 200, foodType: ['Continental', 'Chinese'], rating: 3.5, bestSellers: ['Chicken Burger', 'Chicken Nuggets', 'Kitkat MilkShake'], storeTiming: ['dateTime'] },
    { id: 2, hotelName: 'Amman Mess', minPrice: 15, maxPrice: 120, foodType: ['Indian'], rating: 3.5, bestSellers: ['Parota', 'Kothu Parota', 'Briyani'], storeTiming: ['dateTime'] }
]

export default function FoodPage() {
    const [hotel, setHotel] = useState('')
    const classes = useStyles();
    const history = useHistory();
    

    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }, [])

    return (
            <FoodCart>
                <Navbar
                    fixed
                    color="info"
                    brand="LightYear"
                //rightLinks={<HeaderLinks />}
                />
                <div className={classes.foodPage}>
                    <Switch>
                        <Route exact path="/food" component={HotelList} />
                        <Route path="/food/:id" component={FoodList} />
                    </Switch>
                </div>
                <StickyFooter/>
            </FoodCart>
    );
}