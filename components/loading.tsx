import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}

//import { Skeleton } from "@mui/material";
// const Loading = () => <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
// export default Loading;