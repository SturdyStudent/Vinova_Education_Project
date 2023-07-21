import React, { useState } from 'react';
import { AppBar, Toolbar, Box, IconButton, Hidden, Drawer, Button, List, ListItem } from '@mui/material';
import Logo from '../../assets/img/main_logo.png';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@emotion/react';

function Header() {
    const [openNavbar, setOpenNavbar] = useState();
    const theme = useTheme();

    const useStyles = makeStyles(theme => ({
        headerHolder: {
            height: 'auto',
            position: 'sticky !important',
            top: '0',
            boxSizing: 'border-box',
            [theme.breakpoints.down('md')]: {
                padding: '0 30px',
                height: '97px',
                verticalAlign: 'middle'
            },
            [theme.breakpoints.up('md')]: {
            padding: '0 60px'
            },
            [theme.breakpoints.up('lg')]: {
            padding: '0 171px'
            },
            [theme.breakpoints.up('xl')]: {
            padding: '0 171px'
            }
        },
        toolbar: {
            padding: 0,
            verticalAlign: 'center',
            flexGrow: 1,
            [theme.breakpoints.up('sm')]: {
                padding: '0 !important' 
            },
        },
        navButtonHolder:{
            display: 'flex',
            alignItems: 'center',
            [theme.breakpoints.down('md')]: {
                display: 'none'
            },
        },
        navButtonList: {
            display:'flex'
        },
        navButton: {
            border: 'none',
            color: `${theme.palette.primary.blue}`, 
            textTransform: 'none !important', 
            backgroundColor: 'transparent',
            maxWidth: 'none',
            width: 'auto !important',
            [theme.breakpoints.up('xl')]: {
                margin: '0 40px !important'
            },
        },
        drawerHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        drawerNav: {
            fontSize: '20px',
            color: theme.palette.primary.blue,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '50px',
            margin: '100px auto',
        },
        logoutButton: {
            marginRight: 0, 
            border: `1px solid #1F3684`, 
            borderRadius: '30px', 
            padding: '0px 30px !important',
            background: 'transparent',
            color: theme.palette.primary.blue
        }
    }));
    const classes = useStyles();

    const navButtonList = [
        'Dashboard',
        'My Wallets',
        'My Transaction',
        'My Profile',
    ]

  return (
    <AppBar 
    className={classes.headerHolder}
    sx={{backgroundColor: 'white', boxShadow: 'none', position: 'relative'}}
    >
        <Toolbar className={classes.toolbar} >
       
            <Box 
            component={'div'}
            key={1}
            sx={{':hover': {cursor: 'pointer'}, flexGrow: 1, textAlign: 'left'}}
            
            >
                <img src={Logo} width={'138px'} height={'21px'} alt='' />
            </Box>
            <div className={classes.navButtonHolder}>
                <List className={classes.navButtonList}>

                {
                    navButtonList && navButtonList.map((item) => {
                        return <ListItem sx={{width: 'auto'}}>
                            <Button className={classes.navButton}>{item}</Button>
                        </ListItem> 
                    })
                }
                </List>
                <Button id="logout-btn" 
                className={classes.navButton}  sx={{':hover': {background: theme.palette.primary.blue, color: 'white'}, marginRight: '0 !important', border: `1px solid #1F3684`, height: 'fit-content', borderRadius: '30px', padding: '10px 30px !important'}}>Logout</Button>
            </div>
            <Hidden mdUp> 
                <IconButton onClick={() => setOpenNavbar(true)}>
                    <MenuIcon sx={{color: '#1F3684', width: '40px', height: '40px'}}/>
                </IconButton>
            </Hidden>
        <Drawer anchor='right' open={openNavbar} PaperProps={{ sx: { width: "100%" },}} onClose={() => setOpenNavbar(false)} >
            <Box>
                <Box className={`${classes.drawerHeader} ${classes.headerHolder}`}>
                    <div>
                        <img src={Logo} alt='' width={'138px'} height={'21px'} />
                    </div>
                    <IconButton onClick={() => setOpenNavbar(false)}>
                        <CloseIcon sx={{color: '#1F3684', width: '40px', height: '40px'}}/>
                    </IconButton>
                </Box>
                <Box className={`${classes.headerHolder} ${classes.drawerNav}`}>
                    <div>Dashboard</div>
                    <div>My Wallets</div>
                    <div>My Transactions</div>
                    <div>My Profile</div>
                    <hr style={{width: '100%', marginTop: '100px'}}  />
                    <button className={classes.logoutButton} style={{ width: '60%', padding: '20px 40px'}}>Logout</button>   
                </Box>
            </Box>
        </Drawer>
        </Toolbar>
  </AppBar>
  )
}

export default Header