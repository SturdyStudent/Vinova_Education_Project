import React from 'react'
import Header from '../../components/Header'
import { Box, Grid, Typography, Container, Hidden, TableHead, Table, TableRow, TableCell} from '@mui/material'
import {makeStyles} from '@mui/styles'
import updownArrow from '../../assets/icons/updownIcon.svg'
import caretLeft from '../../assets/icons/caretLeftIcon.svg'
import caretRight from '../../assets/icons/caretRightIcon.svg'
import caretDown from '../../assets/img/CaretDown.png'
import Footer from '../../components/Footer'

const paginList = [1, 2, 3, 4, 5];

const transactionList = [
  {
    orderDate: '2021-07-13',
    action: 'Send',
    amount: '343.00',
    currency: 'EUR',
    remarks: '',
    orderStatus: 'Success'
  },
  {
    orderDate: '2021-07-13',
    action: 'Receive',
    amount: '343.00',
    currency: 'EUR',
    remarks: 'Pay back from Louis',
    orderStatus: 'Success'
  },
  {
    orderDate: '2021-07-13',
    action: 'Send',
    amount: '343.00',
    currency: 'EUR',
    remarks: '',
    orderStatus: 'Failed'
  },
  {
    orderDate: '2021-07-13',
    action: 'Send',
    amount: '343.00',
    currency: 'EUR',
    remarks: '',
    orderStatus: 'Success'
  },
  {
    orderDate: '2021-07-13',
    action: 'Send',
    amount: '343.00',
    currency: 'EUR',
    remarks: '',
    orderStatus: 'Success'
  },
  {
    orderDate: '2021-07-13',
    action: 'Send',
    amount: '343.00',
    currency: 'EUR',
    remarks: 'Pay back from Louis',
    orderStatus: 'Success'
  },
  {
    orderDate: '2021-07-13',
    action: 'Send',
    amount: '343.00',
    currency: 'EUR',
    remarks: '',
    orderStatus: 'Success'
  },
  {
    orderDate: '2021-07-13',
    action: 'Send',
    amount: '343.00',
    currency: 'EUR',
    remarks: '',
    orderStatus: 'Success'
  },
  {
    orderDate: '2021-07-13',
    action: 'Send',
    amount: '343.00',
    currency: 'EUR',
    remarks: '',
    orderStatus: 'Failed'
  },
  {
    orderDate: '2021-07-13',
    action: 'Receive',
    amount: '343.00',
    currency: 'EUR',
    remarks: '',
    orderStatus: 'Success'
  },
  {
    orderDate: '2021-07-13',
    action: 'Send',
    amount: '343.00',
    currency: 'EUR',
    remarks: '',
    orderStatus: 'Success'
  },
  {
    orderDate: '2021-07-13',
    action: 'Send',
    amount: '343.00',
    currency: 'EUR',
    remarks: '',
    orderStatus: 'Success'
  },

]

function MyTransaction() {
  const useStyle = makeStyles((theme) => ({
    container: {
        maxWidth: 'none',
        [theme.breakpoints.down('md')]: {
          padding: '0 30px'
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
      welcomePanel: {
        color: theme.palette.primary.blue,
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: theme.palette.primary.gold,
        paddingTop: '25px',
        paddingBottom: '25px',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
          textAlign: 'center'
        },
      },
      welcomePanelItem: {
        textAlign: 'left',
        [theme.breakpoints.down('md')]: {
          textAlign: 'center'
        },
      },
      button: {
        padding: '17px 30px',
        borderRadius: '30px',
        border: `1px solid ${theme.palette.primary.blue}`,
        background:'transparent',
        marginLeft: '12px',
        color: theme.palette.primary.blue,
        [theme.breakpoints.down('md')]: {
          justifyContent: 'center',
          width: '174px'
        },
      },
      select: {
        padding: '5px 0px',
        paddingLeft: '10px',
        paddingRight: '50px',
        borderRadius: '30px',
        border: `1px solid ${theme.palette.primary.blue}`,
        marginLeft: '12px',
        fontSize: '18px',
        color: theme.palette.primary.blue,
        appearance: 'none',
        backgroundPosition: `calc(100% - 12px) center !important`,
        background: `url(${caretDown}) no-repeat`,
        backgroundColor: 'transparent'
      },
      buttonHolder: {
        display: 'flex',
        color: theme.palette.primary.blue,
        justifyContent: 'right',
        [theme.breakpoints.down('md')]: {
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          marginTop: '32px'
        },
      },
      navButtonHolder: {
        display: 'flex'
      },
      buttonHolder1: {
        display: 'flex',
        color: theme.palette.primary.blue,
        justifyContent: 'right',
        [theme.breakpoints.down('md')]: {
          justifyContent: 'center',
        },
      },
      walletNav: {
        marginTop: '29px',
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
          justifyContent: 'center',
        },
      },
      navButton: {
        color: theme.palette.primary.blue,
        background: 'transparent',
        textTransform: 'none'
      },
      tableCell: {
        border: 'none',
      },
      tableHead: {
        borderBottom: '1px solid black',
        color: theme.palette.primary.blue
      },
      pagination: {
        fontSize: '16px',
        margin: '40px auto',
        display: 'flex',
        width: '206px',
        gap: '19px'
      },
      paginButton: {
        color: theme.palette.primary.blue,
        fontSize: '16px',
        padding: 0
      },
      mobileTableItem: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '17px'
      }
    }))
    const classes = useStyle();

    const navButtonList = [
      'Fund', 'Securities', 'Crypto'
    ]

  return (
    <div>
        <Header/>
        <Grid className={`${classes.welcomePanel} ${classes.container}`} container>
              <Grid item sm={12} md className={classes.welcomePanelItem} >
                 <Typography
                   fontSize={'25px'}
                 >My Transaction</Typography>
              </Grid>
              <Grid item sm={12} md className={classes.welcomePanelItem}>
                <Box className={classes.buttonHolder}>
                  <div className={classes.buttonHolder1}>
                    <button className={classes.button}>Send Funds</button>
                    <button className={classes.button}>Crypto</button>
                  </div>
                  <button className={classes.button}>Securities</button>
                </Box>  
              </Grid>
        </Grid>
        <Container className={classes.container}>
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
          <Hidden mdDown>

          <Table>
            <TableHead className={classes.tableHead} sx={{ '& th': {borderBottom: '1.5px solid #37383d', color: '#1F3684'}}}>
              <TableCell>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                  <div>Order Date</div>
                  <div>
                    <span><img src={updownArrow} alt='' /></span>
                  </div>
                </Box>
              </TableCell>
              <TableCell>Action</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Currency</TableCell>
              <TableCell>Remarks</TableCell>
              <TableCell>Order Status</TableCell>
            </TableHead>
            {
              transactionList && transactionList.map((item, index) => (
                <TableRow sx={{backgroundColor: `${(index % 2 === 1) ? '#f5f5f5' : 'white'}`, '& td': {border: 0}}}>
                  <TableCell>
                  <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                      <div>{item.orderDate}</div>
                      <div>
                        <span><img src={updownArrow} alt='' /></span>
                      </div>
                    </Box>
                  </TableCell>
                  <TableCell>{item.action}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell>{item.currency}</TableCell>
                  <TableCell>{item.remarks}</TableCell>
                  <TableCell>{item.orderStatus}</TableCell>
              </TableRow>
              ))
            }
          </Table>
          </Hidden>
          <Hidden mdUp>
            <Box sx={{marginTop: '28px'}}>
            {
              transactionList.map((item, index) => (
              <Box className={classes.mobileTableItem} sx={{backgroundColor: `${index % 2 === 0 ? '#f5f5f5' : ''}`}}>
                <div>
                  <Typography textAlign={'left'} fontWeight={500}>{item.orderStatus}</Typography>
                  <Typography textAlign={'left'}>{item.orderDate}</Typography>
                  <Typography textAlign={'left'} sx={{marginTop: '4px'}}>{item.remarks}</Typography>
                </div>
                <div>
                  <Typography textAlign={'right'} fontWeight={600}>{item.amount} {item.currency}</Typography>
                  <Typography textAlign={'right'}>{item.action}</Typography>
                </div>
              </Box>
              ))
            }
          </Box>
            </Hidden>
          <Box width={'100%'}>
            <div className={classes.pagination}>
              <Box className={classes.paginButton}><img src={caretLeft} alt='' /></Box>
              {
                paginList.map(item => (
                  <Typography className={classes.paginButton}>{item}</Typography>
                ))
              }
              <Box>
                <img src={caretRight} alt='' />
              </Box>
            </div>
          </Box>
          </Container>
        <Footer/>
    </div>
  )
}

export default MyTransaction