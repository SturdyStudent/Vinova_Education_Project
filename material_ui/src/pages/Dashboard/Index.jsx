import React from 'react'
import Header from '../../components/Header/Header'
import { Box } from '@mui/material'
import Footer from '../../components/Footer/Footer'
import { useDashboardStyles as useStyles } from './container/styles'
import WelcomePanel from './container/WelcomePanel'
import WalletNav from './container/WalletNav'
import WalletDetail from './container/WalletDetail'
import WalletTable from './container/WalletTable'

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
  const classes = useStyles();
  return (
    <div>
        <Header/>
        <WelcomePanel/>
        <Box className={classes.container}>
          <WalletNav functionNavList={functionNavList}/>
        </Box>
        <div className={classes.container} style={{marginBottom: '112px'}}>
          <WalletDetail/>
          <Box sx={{height: "46px"}}/>
          <WalletTable transactionList={transactionList} />
        </div>
        <Footer/>
    </div>
  )
}

export default Dashboard