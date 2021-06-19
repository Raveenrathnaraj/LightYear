import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Navbar } from "../Navbar/Navbar";
import HotelList from "./HotelList";

const useStyles = makeStyles({
    navbar: {
        marginTop: '20vh',
    }
})

export default function FoodPage() {
    const classes = useStyles();
    useEffect(()=>{
        window.scroll({
            top: 0,
            behavior: 'smooth'
          });
      },[])
    return (
        <React.Fragment>
            <Navbar
                fixed
                color="info"
                brand="LightYear"
            //rightLinks={<HeaderLinks />} 
            />
            <div className={classes.navbar}>
                <HotelList />
                <HotelList />
            </div>
        </React.Fragment>
    );
}