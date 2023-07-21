import React from 'react';
import {
  Box, Typography, Hidden
} from "@mui/material";
import { useTransactionStyle as useStyles } from "./styles";
  
function Sort({navButtonList}) {
    const classes = useStyles();

  return (
    <Box className={classes.walletNav} sx={{gap: '37px'}} >
    <Box className={classes.navButtonHolder} sx={{gap: '37px'}}>
      {
        navButtonList && navButtonList.map(item => (
          <Typography className={classes.navButton}>{item}</Typography>
        ))
      }
    </Box>
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <Hidden mdUp>
        <select className={classes.select} style={{margin: '0'}}>
          <option>Sort Order Date</option>
        </select>
      </Hidden>
      <select className={classes.select}>
        <option>EUR</option>
      </select>
    </div>
  </Box>
  )
}

export default Sort