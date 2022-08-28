import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useState, useEffect } from 'react';

// const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
//   props,
//   ref,
// ) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

export interface NotificationProps {
  message: string;
}

const Notification = (props: NotificationProps) => {
  const [open, setOpen] = useState(!!props.message)

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    // <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
    //   <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
    //     {props.message}
    //   </Alert>
    // </Snackbar>
    // </Stack>

    <Snackbar
      // anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={handleClose}
      message={props.message} />
  );
}

export default Notification;