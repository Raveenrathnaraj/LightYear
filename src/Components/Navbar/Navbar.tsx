import React from 'react'; 
import classNames from "classnames"; 
import {AppBar, Toolbar, IconButton, Button, Hidden, Drawer } from "@material-ui/core"; 
import Menu from "@material-ui/icons/Menu"; 
import {useStyles} from './NavbarStyles'
import Login from '../Login/LoginModal'
 
 
type colors = 'white' | 'transparent' |'rose' | 'info' | 'success' | 'danger' | 'warning' | 'primary' 
 
 
export default function Nav() {
    return ( 
        <Navbar 
            brand="LightYear" 
            rightLinks={<Login/>} 
            fixed 
            color="transparent" 
            changeColorOnScroll={{ 
                height: 400, 
                color: "white", 
            }} 
        />
    ); 
} 
 
 
export function Navbar(props: any) { 
    const classes = useStyles(); 
    const [mobileOpen, setMobileOpen] = React.useState(false); 
    React.useEffect(() => { 
        if (props.changeColorOnScroll) { 
            window.addEventListener("scroll", headerColorChange); 
        } 
        return function cleanup() { 
            if (props.changeColorOnScroll) { 
                window.removeEventListener("scroll", headerColorChange); 
            } 
        }; 
    }); 
    const handleDrawerToggle = () => { 
        setMobileOpen(!mobileOpen); 
    }; 
    const headerColorChange = () => { 
        const color : colors = props.color 
        const scrollColor : colors = props.changeColorOnScroll.color 
        const { changeColorOnScroll} = props; 
        const windowsScrollTop = window.pageYOffset; 
        if (windowsScrollTop > changeColorOnScroll.height) { 
            document.body 
                .getElementsByTagName("header")[0] 
                .classList.remove(classes[color]); 
            document.body 
                .getElementsByTagName("header")[0] 
                .classList.add(classes[scrollColor]); 
        } else { 
            document.body 
                .getElementsByTagName("header")[0] 
                .classList.add(classes[color]); 
            document.body 
                .getElementsByTagName("header")[0] 
                .classList.remove(classes[scrollColor]); 
        } 
    }; 
    const color:colors = props.color 
    const {rightLinks, leftLinks, brand, fixed, absolute } = props; 
    const appBarClasses = classNames({ 
        [classes.appBar]: true, 
        [classes[color]]: color, 
        [classes.absolute]: absolute, 
        [classes.fixed]: fixed, 
    }); 
    const brandComponent = <Button className={classes.title} href = {'/'}>{brand}</Button>; 
    return ( 
        <AppBar className={appBarClasses}> 
            <Toolbar className={classes.container}> 
                {leftLinks !== undefined ? brandComponent : null} 
                <div className={classes.flex}> 
                    {leftLinks !== undefined ? ( 
                        <Hidden smDown implementation="css"> 
                            {leftLinks} 
                        </Hidden> 
                    ) : ( 
                        brandComponent 
                    )} 
                </div> 
                <Hidden smDown implementation="css"> 
                    {rightLinks} 
                </Hidden> 
                <Hidden mdUp> 
                    <IconButton 
                        color="inherit" 
                        aria-label="open drawer" 
                        onClick={handleDrawerToggle} 
                    > 
                        <Menu /> 
                    </IconButton> 
                </Hidden> 
            </Toolbar> 
            <Hidden mdUp implementation="js"> 
                <Drawer 
                    variant="temporary" 
                    anchor={"right"} 
                    open={mobileOpen} 
                    classes={{ 
                        paper: classes.drawerPaper, 
                    }} 
                    onClose={handleDrawerToggle} 
                > 
                    <div className={classes.appResponsive}> 
                        {leftLinks} 
                        {rightLinks} 
                    </div> 
                </Drawer> 
            </Hidden> 
        </AppBar> 
    ); 
} 