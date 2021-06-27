import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CartModal from "./CartModal";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

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

        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: '16px',
            "@media (max-height: 450px)": {
                marginTop: '30%'
            }
        }
    })
)

export default function StickyFooter() {
    const classes = useStyles();
    const [modal, setModal] = useState(false)

    const descriptionElementRef = React.useRef<HTMLElement>(null);
    React.useEffect(() => {
        if (modal) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [modal]);

    return (
        <React.Fragment>
            <div className={classes.style}>
                <Button variant="contained" color="primary" className={classes.button} onClick={() => setModal(true)}>
                    Review and Place Order
                </Button>
                <Dialog
                    open={modal}
                    onClose={() => setModal(false)}
                    scroll={'paper'}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                    PaperProps={{
                        style: {
                            margin: '2%'
                        },
                    }}
                >
                    <DialogTitle id="scroll-dialog-title">Food Cart</DialogTitle>
                    <DialogContent dividers >
                        <DialogContentText
                            id="scroll-dialog-description"
                            ref={descriptionElementRef}
                            tabIndex={-1}
                        >
                            <CartModal />
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setModal(false)} color="primary">
                            Back
                        </Button>
                        <Button onClick={() => setModal(false)} color="primary">
                            Confirm
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </React.Fragment>
    );
}