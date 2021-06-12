import { makeStyles } from "@material-ui/core/styles"; 
import {container} from '../Helpers/container'; 
 
 
const primaryColor = "#9c27b0"; 
const warningColor = "#ff9800"; 
const dangerColor = "#f44336"; 
const successColor = "#4caf50"; 
const infoColor = "#00acc1"; 
const roseColor = "#e91e63"; 
 
 
export const useStyles = makeStyles({ 
    container, 
    appResponsive: { 
        margin: "20px 10px", 
    }, 
    drawerPaper: { 
        border: "none", 
        bottom: "0", 
        transitionProperty: "top, bottom, width", 
        transitionDuration: ".2s, .2s, .35s", 
        transitionTimingFunction: "linear, linear, ease", 
        width: "260", 
        boxShadow: "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)", 
        position: "fixed", 
        display: "block", 
        top: "0", 
        height: "100vh", 
        right: "0", 
        left: "auto", 
        visibility: "visible", 
        overflowY: "visible", 
        borderTop: "none", 
        textAlign: "left", 
        paddingRight: "0px", 
        paddingLeft: "0", 
        transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)" 
    }, 
    appBar: { 
        display: "flex", 
        border: "0", 
        borderRadius: "3px", 
        padding: "0.625rem 0", 
        marginBottom: "20px", 
        color: "#555", 
        width: "100%", 
        backgroundColor: "#fff", 
        boxShadow: 
            "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)", 
        transition: "all 150ms ease 0s", 
        alignItems: "center", 
        flexFlow: "row nowrap", 
        justifyContent: "flex-start", 
        position: "relative", 
        zIndex: "unset", 
    }, 
    absolute: { 
        position: "absolute", 
        zIndex: 1100, 
    }, 
    fixed: { 
        position: "fixed", 
        zIndex: 1100, 
    }, 
    title: { 
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', 
        fontWeight: 300, 
        lineHeight: "30px", 
        fontSize: "18px", 
        borderRadius: "3px", 
        textTransform: "none", 
        color: "inherit", 
        padding: "8px 16px", 
        letterSpacing: "unset", 
        "&:hover,&:focus": { 
            color: "inherit", 
            background: "transparent", 
        }, 
    }, 
    flex: { 
        flex: 1, 
    }, 
    transparent: { 
        backgroundColor: "transparent !important", 
        boxShadow: "none", 
        paddingTop: "25px", 
        color: "#FFFFFF", 
    }, 
    white: { 
        border: "0", 
        padding: "0.625rem 0", 
        marginBottom: "20px", 
        color: "#555", 
        backgroundColor: "#fff !important", 
        boxShadow: 
            "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)", 
    }, 
    primary: { 
        backgroundColor: primaryColor, 
        color: "#FFFFFF", 
        boxShadow: 
          "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(156, 39, 176, 0.46)", 
      }, 
      info: { 
        backgroundColor: infoColor, 
        color: "#FFFFFF", 
        boxShadow: 
          "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(0, 188, 212, 0.46)", 
      }, 
      success: { 
        backgroundColor: successColor, 
        color: "#FFFFFF", 
        boxShadow: 
          "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(76, 175, 80, 0.46)", 
      }, 
      warning: { 
        backgroundColor: warningColor, 
        color: "#FFFFFF", 
        boxShadow: 
          "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(255, 152, 0, 0.46)", 
      }, 
      danger: { 
        backgroundColor: dangerColor, 
        color: "#FFFFFF", 
        boxShadow: 
          "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(244, 67, 54, 0.46)", 
      }, 
      rose: { 
        backgroundColor: roseColor, 
        color: "#FFFFFF", 
        boxShadow: 
          "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(233, 30, 99, 0.46)", 
      }, 
      dark: { 
        color: "#FFFFFF", 
        backgroundColor: "#212121 !important", 
        boxShadow: 
          "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)", 
      }, 
}); 
 