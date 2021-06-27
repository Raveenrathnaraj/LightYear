import React, {useState} from "react";
import { Button } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CartModal from "../CartModal/CartModal";

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        style: {
            position: 'fixed',
            left: '0',
            bottom: '0',
            width: '100%',
            color: 'white',
            textAlign: 'center',
            
        },
        button: {
            borderRadius: "30px",
            margin: '1%',
        },
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'scroll'
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            "@media (max-height: 450px)": {
                marginTop: '30%'
            }
        }
    })
)

export default function StickyFooter() {
    const classes = useStyles();
    const [modal,setModal] = useState(false)

    return (
        <React.Fragment>
            <div className={classes.style}>
                <Button variant="contained" color="primary" className={classes.button} onClick={() => setModal(true)}>
                    Review and Place Order
                </Button>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={modal}
                onClose={() => setModal(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={modal}>
                    <div className={classes.paper}>
                        <CartModal />
                    </div>
                </Fade>
            </Modal>
        </React.Fragment>
    );
}