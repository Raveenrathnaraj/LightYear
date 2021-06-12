import React from 'react'; 
import PropTypes from "prop-types"; 
import GridContainer from '../Helpers/GridContainer' 
import GridItem from '../Helpers/GridItem' 
import classNames from "classnames"; 
import {useStyles} from './HeaderStyles' 
 
 
function Parallax(props: any) { 
  let windowScrollTop; 
  if (window.innerWidth >= 768) { 
    windowScrollTop = window.pageYOffset / 3; 
  } else { 
    windowScrollTop = 0; 
  } 
  const [transform, setTransform] = React.useState( 
    "translate3d(0," + windowScrollTop + "px,0)" 
  ); 
  React.useEffect(() => { 
    if (window.innerWidth >= 768) { 
      window.addEventListener("scroll", resetTransform); 
    } 
    return function cleanup() { 
      if (window.innerWidth >= 768) { 
        window.removeEventListener("scroll", resetTransform); 
      } 
    }; 
  }); 
  const resetTransform = () => { 
    var windowScrollTop = window.pageYOffset / 3; 
    setTransform("translate3d(0," + windowScrollTop + "px,0)"); 
  }; 
  const { filter, className, children, style, image, small } = props; 
  const classes = useStyles(); 
  const parallaxClasses = classNames({ 
    [classes.parallax]: true, 
    [classes.filter]: filter, 
    [classes.small]: small, 
    [className]: className !== undefined, 
  }); 
  return ( 
    <div 
      className={parallaxClasses} 
      style={{ 
        ...style, 
        backgroundImage: "url(" + image + ")", 
        transform: transform, 
      }} 
    > 
      {children} 
    </div> 
  ); 
} 
 
 
Parallax.propTypes = { 
  className: PropTypes.string, 
  filter: PropTypes.bool, 
  children: PropTypes.node, 
  style: PropTypes.string, 
  image: PropTypes.string, 
  small: PropTypes.bool, 
}; 
 
 
function Header() { 
  const classes = useStyles(); 
  return ( 
    <Parallax image={require("../../assets/bg4.jpg").default}> 
      <div className={classes.container}> 
        <GridContainer> 
          <GridItem> 
            <div className={classes.brand}> 
              <h1 className={classes.title}>Light Year.</h1> 
              <h3 className={classes.subtitle}> 
                Welcome to LightYear Online Store. 
                </h3> 
            </div> 
          </GridItem> 
        </GridContainer> 
      </div> 
    </Parallax> 
  ); 
} 
 
 
export default Header 
 