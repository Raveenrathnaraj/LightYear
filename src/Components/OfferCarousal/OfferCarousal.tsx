import React from 'react'; 
import image1 from "../../assets/bg.jpg"; 
import image2 from "../../assets/bg2.jpg"; 
import image3 from "../../assets/bg3.jpg"; 
import GridContainer from '../Helpers/GridContainer' 
import GridItem from '../Helpers/GridItem' 
import Card from "../Helpers/Card/Card"; 
import { makeStyles } from "@material-ui/core/styles"; 
import { container } from '../Helpers/container' 
import Carousel from 'react-slick'; 
import './slick.scss'; 
 
 
const useStyles = makeStyles({ 
    section: { 
        padding: "70px 0", 
    }, 
    container, 
    marginAuto: { 
        marginLeft: "auto !important", 
        marginRight: "auto !important", 
    },
    card: {
        boxShadow: 'none'
    }
}); 
 
 
export default function OfferCarousal() { 
    const classes = useStyles(); 
    const gprops = { xs: 12, sm: 12, md: 8, className: classes.marginAuto } 
    const settings = { 
        dots: true, 
        infinite: true, 
        speed: 500, 
        slidesToShow: 1, 
        slidesToScroll: 1, 
        autoplay: true, 
    }; 
    return ( 
        <div> 
            <div className={classes.container}> 
                <GridContainer> 
                    <GridItem {...gprops} > 
                        <Card carousel> 
                            <Carousel {...settings}> 
                                <div> 
                                    <img src={image1} alt="First slide" className="slick-image" /> 
                                    <div className="slick-caption"> 
                                        <h4>Yellowstone National Park, United States</h4> 
                                    </div> 
                                </div> 
                                <div> 
                                    <img 
                                        src={image2} 
                                        alt="Second slide" 
                                        className="slick-image" 
                                    /> 
                                    <div className="slick-caption"> 
                                        <h4>Somewhere Beyond, United States</h4> 
                                    </div> 
                                </div> 
                                <div> 
                                    <img src={image3} alt="Third slide" className="slick-image" /> 
                                    <div className="slick-caption"> 
                                        <h4>Yellowstone National Park, United States</h4> 
                                    </div> 
                                </div> 
                            </Carousel> 
                        </Card> 
                    </GridItem> 
                </GridContainer> 
            </div> 
        </div> 
    ); 
} 
 