import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Navbar } from "../Navbar/Navbar";
import HotelList from "./HotelList";
import FoodList from "./FoodList";
import { FoodCart } from "./FoodCart";
import StickyFooter from "./StickyFooter";

const useStyles = makeStyles({
    foodPage: {
        marginTop: '20vh',
    }
})

export default function FoodPage() {
    const classes = useStyles();
    window.scroll({
        top: 0
    });

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
            <StickyFooter />
        </FoodCart>
    );
}