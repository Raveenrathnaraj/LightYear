import React from 'react'; 
import OfferCarousal from '../OfferCarousal/OfferCarousal'; 
import Header from '../Header/Header'; 
import { useStyles } from './MainSectionStyles' 
import Nav from '../Navbar/Navbar' 
 
export default function MainSection() { 
    const classes = useStyles(); 
    return ( 
        <React.Fragment> 
            <Nav /> 
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
                    </div> 
                </div> 
            </div> 
        </React.Fragment> 
    ) 
} 
 