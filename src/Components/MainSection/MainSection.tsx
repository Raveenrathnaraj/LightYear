import React from 'react';
import OfferCarousal from './OfferCarousal/OfferCarousal';
import Header from './Header/Header';
import { useStyles } from './MainSectionStyles';
import { Navbar } from '../Navbar/Navbar';
import Categories from './SelectionGrid/Categories'
import Login from '../Login/LoginModal'


export default function MainSection() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Navbar
                brand="LightYear"
                rightLinks={<Login />}
                fixed
                color="transparent"
                changeColorOnScroll={{
                    height: 400,
                    color: "white",
                }}
            />
            <div style={{ height: '2000px', overflowX: 'hidden' }}>
                <Header />
                <div className={classes.raised}>
                    <div className={classes.sections}>
                        <div className={classes.container}>
                            <div className={classes.title}>
                                <h2>Special Offers</h2>
                            </div>
                        </div>
                        <OfferCarousal />
                        <Categories />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
