import React from 'react'; 
import { Dialog, DialogTitle, DialogContent, IconButton } from "@material-ui/core"; 
import Button from '../Helpers/Button' 
import Close from "@material-ui/icons/Close"; 
import Slide from "@material-ui/core/Slide"; 
import {useStyles} from './LoginModalStyles'; 
import SignIn from './LoginForm' 
 
 
function LoginModal(props:any) { 
  const [modalShow, setModalShow] = React.useState(false); 
  const classes = useStyles(); 
 
 
  return ( 
    <div> 
      <Button color="primary" block onClick={() => setModalShow(true)}>Login </Button> 
      <Dialog 
        classes={{ 
          root: classes.center, 
          paper: classes.modal, 
        }}
        open={modalShow} 
        TransitionComponent={Slide} 
        keepMounted 
        onClose={() => setModalShow(false)} 
        aria-labelledby="classic-modal-slide-title" 
        aria-describedby="classic-modal-slide-description" 
      > 
        <DialogTitle 
          id="classic-modal-slide-title" 
          disableTypography 
          className={classes.modalHeader} 
        > 
          <IconButton 
            className={classes.modalCloseButton} 
            key="close" 
            aria-label="Close" 
            color="inherit" 
            onClick={() => setModalShow(false)} 
          > 
            <Close className={classes.modalClose} /> 
          </IconButton> 
        </DialogTitle> 
        <DialogContent 
          id="classic-modal-slide-description" 
          className={classes.modalBody} 
        > 
          <SignIn /> 
        </DialogContent> 
      </Dialog> 
    </div> 
  );
} 
 
 
export default LoginModal; 
 