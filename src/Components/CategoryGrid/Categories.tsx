import React from "react";
import foodpic from '../../assets/FoodHeader.jpg'
import foodpic1 from '../../assets/FoodHeader1.jpg'
import foodpic2 from '../../assets/FoodHeader2.jpg'
import foodpic3 from '../../assets/FoodHeader3.jpg'
import { Grid } from "@material-ui/core";
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SelectionGrid from "../SelectionGrid/SelectionGrid";

export default function Categories() {
    return (
        <React.Fragment>
            <Grid container>
                <SelectionGrid
                    heading='Taste the best food in your city'
                    category='Food'
                    icon={<FastfoodIcon fontSize='large' />}
                    link='/food'
                    pic1={foodpic}
                    pic2={foodpic1}
                    pic3={foodpic2}
                    pic4={foodpic3}
                />
                <SelectionGrid
                    heading='Taste the best food in your city'
                    category='Food'
                    icon={<FastfoodIcon fontSize='large' />}
                    link='/food'
                    pic1={foodpic}
                    pic2={foodpic1}
                    pic3={foodpic2}
                    pic4={foodpic3}
                />
            </Grid>
            <Grid container>
                <SelectionGrid
                    heading='Taste the best food in your city'
                    category='Food'
                    icon={<FastfoodIcon fontSize='large' />}
                    link='/food'
                    pic1={foodpic}
                    pic2={foodpic1}
                    pic3={foodpic2}
                    pic4={foodpic3}
                />
                <SelectionGrid
                    heading='Taste the best food in your city'
                    category='Food'
                    icon={<FastfoodIcon fontSize='large' />}
                    link='/food'
                    pic1={foodpic}
                    pic2={foodpic1}
                    pic3={foodpic2}
                    pic4={foodpic3}
                />
            </Grid>
        </React.Fragment>
    );
}