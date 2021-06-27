import React, {useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../Helpers/Card/Card";
import CardHeader from "../Helpers/Card/CardHeader";
import CardBody from "../Helpers/Card/CardBody";
import FoodTable from "./FoodTable";

const foodList = [
    { id: 1, name: 'Rice', price: 30 },
    { id: 2, name: 'Parota', price: 10 },
    { id: 3, name: 'FriedRice', price: 50 }
]

const useStyles = makeStyles({
    cardHeader: {
        textAlign: 'center',
        fontSize: '1.5rem'
    },
    cardBody: {
        "@media (max-width: 300px)": {
            padding: '0px'
          },
          "@media (min-width: 700px)": {
            padding: '0 10%'
          }, 
    },
    qtyBox: {
        marginBottom: '3rem'
    }
})

export default function FoodList() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Card>
                <CardHeader className={classes.cardHeader}>
                    FoodList Page
                </CardHeader>
                <CardBody className={classes.cardBody}>
                    <FoodTable/>
                </CardBody>
            </Card>
        </React.Fragment>
    );
}

// function FoodGrid(props:foodDetail) {
//     return (
//         <Grid container justify='center'>
//             <Grid item xs={1} md={1} >{index + 1}</Grid>
//             <Grid item xs={4} md={3}>{food.name}</Grid>
//             <Grid item xs={2} md={2}>{food.price}</Grid>
//             <Grid item xs={3} md={2} className={classes.qtyBox}>
//                 <QtyButton />
//             </Grid>
//             <Grid item xs={2} md={2} style={{ textAlign: 'right' }}>
//                 ttl price
//             </Grid>
//         </Grid>
//     );
// }