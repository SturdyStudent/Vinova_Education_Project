import React from 'react'
import Header from '../../components/Header'
import { Box, Hidden, Table, TableCell, TableHead, TableRow, Typography, Grid, Button} from '@mui/material'
import Footer from '../../components/Footer'
import { makeStyles } from '@mui/styles'

const functionNavList = [
  'Send Funds',
  'Crypto',
  'Securities',
  'View Transactions'
]


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
  
]

function Dashboard() {
  const useStyle = makeStyles((theme) => ({
    container: {
      maxWidth: 'none',
      [theme.breakpoints.down('md')]: {
        padding: '0px 30px',
        maxWidth: 'none',
      },
      [theme.breakpoints.up('md')]: {
        padding: '0px 60px',
        maxWidth: 'none',

      },
      [theme.breakpoints.up('lg')]: {
        padding: '0px 171px',
        maxWidth: 'none',
      },
      [theme.breakpoints.up('xl')]: {
        padding: '0px 65px',
        maxWidth: 'none',
      }
    },
    welcomePanel: {
      display: 'flex',
      justifyContent: "space-between",
      alignItems: 'center',
      paddingTop: '51px',
      paddingBottom: '51px',
      flexDirection: 'row',
      backgroundColor: theme.palette.primary.gold,
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '27px'
      },
    },
    functionNav: {
      width: 'max-content !important',
      borderRadius: '30px',
      background: 'transparent',
      padding: '17px 28px',
      border: `1px solid ${theme.palette.primary.blue}`,
      fontSize: '14px',
      textTransform: 'none',
      color: theme.palette.primary.blue,
      [theme.breakpoints.down('md')]: {
        width: '100% !important',
      },
    },
    functionNavHolder: {
      color: theme.palette.primary.blue,
      [theme.breakpoints.up('md')]: {
        padding: '0 !important',
        },
    },
    gridContainer: {
      display: 'flex',
      gap: '12px',
      boxSizing: 'borderBox',
      flexDirection: 'row',
      width: 'auto !important',
      [theme.breakpoints.down("md")]: {
        width: 'auto !important',
        display: 'block',
        gap: '0'
      }
    },
    walletTitle: {
      fontSize: '25px',
      color: theme.palette.primary.blue
    },
    walletNav: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      color: theme.palette.primary.blue,
      marginTop: '62px',
      marginBottom: '32px',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px'
      }
    },
    walletHolder: {
      display: 'flex',
      borderTop: 'solid black 1px',
      borderBottom: 'solid black 1px',
      flexDirection: 'row',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    },
    walletDetail: {
      width: '50%',
      textAlign: 'center',
      color: theme.palette.primary.blue,
      padding: '37px 0',
      maxWidth: 'none',
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
    },
    detailButton: {
      padding: '17px 30px',
      margin: '0 auto',
      marginTop: '30px',
      borderRadius: '30px',
      background: 'transparent',
      width: 'fit-content',
      border: `${theme.palette.primary.blue} 1px solid`,
      textTransform: 'none'
    },
    tableHead: {
      borderBottom: '1px solid black',
      color: theme.palette.primary.blue
    },
    loginInfo: {
      textAlign: 'right',
      [theme.breakpoints.down('md')]: {
        textAlign: 'left'
      }
    },
    mobileTableItem: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '17px'
    }
}))
const classes = useStyle();

  return (
    <div>
        <Header/>

        <Box className={`${classes.container} ${classes.welcomePanel}`}>
          <Box sx={{textAlign: 'left'}}>
            <Typography fontWeight={600}fontSize={'25px'}>Welcome Back, John</Typography>
            <Typography>Account number: 100TestMe98</Typography>
          </Box>
          <Box className={classes.loginInfo}>
            <Typography>Your last login was 11:12 AM on</Typography>
            <Typography>Wednesday 7th July, 2021 (Singapore)</Typography>
          </Box>
        </Box>
        <Box className={classes.container}>
            <Box className={classes.walletNav}>
              <div item sm={12}>
                <Typography fontSize={'25px'} fontWeight={400}>My Wallets</Typography>
              </div>
              <Grid className={classes.gridContainer} container spacing={0} >
                {
                  functionNavList.map((item, index) => (
                    <Grid
                      item 
                      className={classes.functionNavHolder}
                      sx=
                      {{
                        boxSizing: 'border-box', 
                        padding: `6px ${(index % 2 === 1 ? '0px' : '6px')} 6px ${(index % 2 === 1 ? '6px' : '0px')}`}}
                      sm={6}
                      md
                    >
                      <button className={classes.functionNav}>
                        {item}
                      </button>
                    </Grid>
                  ))
                }
              </Grid>
            </Box>
        </Box>
        <div className={classes.container} style={{marginBottom: '112px'}}>

          <Box className={`${classes.walletHolder} `}>
              <Box className={classes.walletDetail} sx={{background: '#f5f5f5'}}>
                <Typography>Funds Wallet</Typography>
                <Typography fontSize={'25px'} fontWeight={600}>1,000,000.00 EUR</Typography>
                <Box
                className={classes.detailButton}
                >View Detail</Box>
              </Box>
              <Box className={classes.walletDetail}>
                <Typography>Crypto Wallet</Typography>
                <Typography fontSize={'25px'} fontWeight={600}>1,000,000.00 EUR</Typography>
                <Box className={classes.detailButton} textTransform={'none'}>View Detail</Box>
              </Box>
          </Box>
          <Box sx={{height: "46px"}}>

          </Box>
          <Hidden mdDown>
            <Table>
              <TableHead className={classes.tableHead} sx={{ '& th': {borderBottom: '1.5px solid #37383d', color: '#1F3684'}}}>
                <TableCell>
                  <Box >
                    <div>Order Date</div>
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
                  <Box >
                      <div>{item.orderDate}</div>
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
            <Box >
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
        </div>
        <Footer/>
    </div>
  )
}

export default Dashboard