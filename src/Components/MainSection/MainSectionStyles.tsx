import { makeStyles } from "@material-ui/core/styles"; 
import { container, title } from '../Helpers/container'; 
 
 
export const useStyles = makeStyles({ 
    container, 
    title: { 
        title, 
        marginTop: "30px", 
        minHeight: "32px", 
        textDecoration: "none", 
    }, 
    sections: { 
        padding: "70px 0", 
    }, 
    raised: { 
        background: '#FFFFFF', 
        position: 'relative', 
        zIndex: 3, 
        margin: '-60px 30px 0px', 
        "@media (max-width: 768px)": { 
            margin: '-60px 5px 0px', 
        }, 
        borderRadius: '6px', 
        boxShadow: '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)' 
    }, 
}); 
 