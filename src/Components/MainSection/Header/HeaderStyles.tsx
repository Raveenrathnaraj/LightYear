import {container} from '../../Helpers/container' 
import { makeStyles } from "@material-ui/core/styles"; 
 
 
export const useStyles = makeStyles({ 
    container, 
    grid: { 
      marginRight: "-15px", 
      marginLeft: "-15px", 
      width: "auto", 
    }, 
    parallax: { 
      height: "90vh", 
      maxHeight: "1000px", 
      overflow: "hidden", 
      position: "relative", 
      backgroundPosition: "center center", 
      backgroundSize: "cover", 
      margin: "0", 
      padding: "0", 
      border: "0", 
      display: "flex", 
      alignItems: "center", 
    }, 
    filter: { 
      "&:before": { 
        background: "rgba(0, 0, 0, 0.5)", 
      }, 
      "&:after,&:before": { 
        position: "absolute", 
        zIndex: "1", 
        width: "100%", 
        height: "100%", 
        display: "block", 
        left: "0", 
        top: "0", 
        content: "''", 
      }, 
    }, 
    small: { 
      height: "380px", 
    }, 
    brand: { 
      color: "#FFFFFF", 
      textAlign: "left", 
    }, 
    title: { 
      fontSize: "4.2rem", 
      fontWeight: 'bolder', 
      display: "inline-block", 
      position: "relative", 
    }, 
    subtitle: { 
      fontSize: "1.313rem", 
      maxWidth: "500px", 
      margin: "10px 0 0", 
    } 
  }); 
 