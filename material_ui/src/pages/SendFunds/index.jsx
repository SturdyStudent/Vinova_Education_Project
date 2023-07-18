import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Box, Input, Typography, Container, Divider, Hidden } from '@mui/material'
import caretDown from '../../assets/img/CaretDown.png'
import { makeStyles } from '@mui/styles'

export default function SendFund() {
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
              padding: '0 120px'
            }
          },
        titlePanel: {
            background: theme.palette.primary.gold,
            color: theme.palette.primary.blue,
            paddingTop: '23px',
            paddingBottom: '23px',
            textAlign: 'left'
        },
        inputRow: {
            display: 'flex',
            flexDirection: 'row',
            [theme.breakpoints.down('md')]: {
                flexDirection: 'column'
            }
        },
        inputItem: {
            width: '33.3333%',
            boxSizing: 'border-box',
            [theme.breakpoints.down('md')]: {
                width: '100%',
                paddingLeft: '0 !important',
                paddingRight: '0 !important'
            }
        },
        inputItem2: {
            width: '66.6666%',
            boxSizing: 'border-box',
            [theme.breakpoints.down('md')]: {
                width: '100%',
                paddingLeft: '0 !important',
                paddingRight: '0 !important'
            }
        },
        select: {
            width: '100%',
            backgroundColor: '#F5F5F5',
            padding: '13px 0 9px 15px',
            border: 'none',
            appearance: 'none',
            backgroundPosition: `calc(100% - 12px) center !important`,
            background: `url(${caretDown}) no-repeat`,
            borderBottom:`${theme.palette.primary.blue} 2px solid`,
        },
        input: {
            width: '100%',
            background: '#F5F5F5',
            padding: '4px 0 3px 15px',
            border: 'none',
            borderBottom:`${theme.palette.primary.blue} 1.5px solid`,
        },
        hr: {
            marginTop: '50px',
            marginBottom: '50px'
        },
        label: {
            color: theme.palette.primary.blue
        },
        summaryItem: {
            display: 'flex',
            justifyContent: 'space-between',    
            paddingLeft: '22px',
            paddingRight: '22px'
        },
        summaryResult: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '16px 22px',
            background: theme.palette.primary.gold,
            alignItems: 'center',
            marginTop: '13px'
        },
        summaryContainer: {
            width: '373px',
            margin: '20px 0 !important',
            [theme.breakpoints.down('md')]: {
                width: '100%',
            }
        },
        submitButton: {
            padding: '12px 30px',
            color: 'white',
            background: theme.palette.primary.blue,
            borderRadius: '30px',
            marginBottom: '30px',
            border: 'none',
            [theme.breakpoints.down('md')]: {
                width: '80%'
            }
        },
        submitHolder: {
            textAlign: 'left',
            [theme.breakpoints.down('md')]: {
                textAlign: 'center'
            }
        },
        noteText: {
            width: '724px',
            [theme.breakpoints.down('md')]: {
                width: '100%'
            },
        }
        }))

    const classes = useStyle();

  return (
    <div>
        <Header/>
        <Box className={`${classes.titlePanel} ${classes.container}`}>
            <Typography fontSize={'25px'} >Transfer of Funds</Typography>
        </Box>

        <form className={classes.container} style={{marginTop: '31px'}}>
            <Box className={classes.inputRow}>
                <Box className={classes.inputItem} paddingRight={'10px'}>
                    <Box sx={{width: '100%', '& label': {textAlign: 'left', display: 'block', paddingBottom: '9px'}}} >
                        <label className={classes.label}>Amount</label>
                        <Input
                            className={classes.input}
                            placeholder="0.00"
                            type="number"
                        />
                    </Box>
                </Box>
                <Box sx={{height: '21px'}}/>
                <Box className={classes.inputItem} paddingRight={'10px'} paddingLeft={'10px'}>
                    <Box sx={{width: '100%', '& label': {textAlign: 'left', display: 'block', paddingBottom: '9px'}}} >
                        <label className={classes.label}>Currency</label>
                        <select
                        className={classes.select}
                        >
                            <option>EUR</option>
                            <option>GBP</option>
                            <option>USD</option>
                        </select>
                    </Box>
                </Box>
                <Box sx={{height: '21px'}}/>
                <Box className={classes.inputItem} paddingLeft={'10px'}>
                    <Box sx={{width: '100%', '& label': {textAlign: 'left', display: 'block', paddingBottom: '9px'}}} >

                        <label className={classes.label}>SEPA or SWIFT</label>
                        <select
                                className={classes.select}
                        >
                            <option>SEPA</option>
                            <option>SWIFT</option>
                        </select>
                    </Box>
                </Box>
            </Box>
            <hr className={classes.hr}  />
            <Box className={classes.inputRow}>
                <Box className={classes.inputItem} paddingRight={'10px'}>
                    <Box sx={{width: '100%', '& label': {textAlign: 'left', display: 'block', paddingBottom: '9px'}}} >
                        <label className={classes.label}>IBAN</label>
                        <select
                        className={classes.select}
                        >
                            <option>Send</option>
                        </select>
                    </Box>
                </Box>
                <Box sx={{height: '21px'}}/>
                <Box className={classes.inputItem} paddingLeft={'10px'} paddingRight={'10px'}>
                    <Box sx={{width: '100%', '& label': {textAlign: 'left', display: 'block', paddingBottom: '9px'}}} >
                        <label className={classes.label}>BIG/SWIFT</label>
                        <Input
                            className={classes.input}
                            placeholder="Type here"
                        />
                    </Box>
                </Box>
            </Box>
            <Box className={classes.inputRow} marginTop={'30px'} >
                <Box className={classes.inputItem} paddingRight={'10px'}>
                    <Box sx={{width: '100%', '& label': {textAlign: 'left', display: 'block', paddingBottom: '9px'}}} >
                        <label className={classes.label}>Receiving Bank</label>
                        <Input
                        className={classes.input}
                        placeholder="Type here"
                        type="text"
                        />
                    </Box>
                </Box>
                <Box sx={{height: '21px'}}/>
                <Box className={classes.inputItem2} paddingLeft={'10px'}>
                    <Box sx={{width: '100%', '& label': {textAlign: 'left', display: 'block', paddingBottom: '9px'}}} >
                        <label className={classes.label}>Receiving Bank Address</label>
                        <Input
                        className={classes.input}
                        placeholder="Type here"
                        type="text"
                        />
                    </Box>
                </Box>
            </Box>
            <hr className={classes.hr} />
            <Box className={classes.inputRow}>
                <Box className={classes.inputItem} paddingRight={'10px'}>
                    <Box sx={{width: '100%', '& label': {textAlign: 'left', display: 'block', paddingBottom: '9px'}}} >
                        <label className={classes.label}>Beneficiary</label>
                        <Input
                        className={classes.input}
                        placeholder="Type here"
                        type="text"
                        />
                    </Box>
                </Box>
                <Box sx={{height: '21px'}}/>
                <Box className={classes.inputItem2} paddingLeft={'10px'}>
                    <Box sx={{width: '100%', '& label': {textAlign: 'left', display: 'block', paddingBottom: '9px'}}} >
                    <label className={classes.label}>Beneficiary Address</label>
                    <Input
                    className={classes.input}
                    placeholder="Type here"
                    type="text"
                    />
                </Box>
            </Box>
            </Box>
            <Box className={classes.inputRow} marginTop={'30px'}>
                <Box className={classes.inputItem} paddingRight={'10px'} >
                    <Box sx={{width: '100%', '& label': {textAlign: 'left', display: 'block', paddingBottom: '9px'}}} >
                        <label className={classes.label}>City</label>
                        <Input
                        className={classes.input}
                        placeholder="Type here"
                        type="text"
                        />
                    </Box>
                </Box>
                <Box sx={{height: '21px'}}/>
                <Box className={classes.inputItem} paddingRight={'10px'} paddingLeft={'10px'}>
                    <Box sx={{width: '100%', '& label': {textAlign: 'left', display: 'block', paddingBottom: '9px'}}} >
                        <label className={classes.label}>Postal / Zip Code</label>
                        <Input
                        className={classes.input}
                        placeholder="Type here"
                        type="text"
                        />
                    </Box>
                </Box>
                <Box sx={{height: '21px'}}/>
                <Box className={classes.inputItem} paddingLeft={'10px'}>
                    <Box sx={{width: '100%', '& label': {textAlign: 'left', display: 'block', paddingBottom: '9px'}}} >
                        <label className={classes.label}>Country</label>
                        <Input
                        className={classes.input}
                        placeholder="Type here"
                        type="text"
                        />
                     </Box>
                </Box>
            </Box>
            <Box className={classes.inputRow} marginTop={'30px'}>
                <Box className={classes.inputItem} paddingRight={'10px'}>
                    <Box sx={{width: '100%', '& label': {textAlign: 'left', display: 'block', paddingBottom: '9px'}}} >
                        <label className={classes.label}>Transfer Date</label>
                        <Input
                        className={classes.input}
                        placeholder="Type here"
                        type="date"
                        />
                    </Box>
                </Box>
                <Box sx={{height: '21px'}}/>
                <Box className={classes.inputItem2} paddingLeft={'10px'}>
                    <Box sx={{width: '100%', '& label': {textAlign: 'left', display: 'block', paddingBottom: '9px'}}} >
                        <label className={classes.label}>
                        Message to beneficiary
                        </label>
                        <Input
                            className={classes.input}
                            placeholder="Type here"
                        />
                    </Box>
                </Box>
            </Box>
            <hr className={classes.hr} />
            <Typography textAlign={'left'} className={classes.label} fontSize={'18px'} fontWeight={600}>
                Summary
            </Typography>
            <Box className={classes.summaryContainer} maxWidth={'none'}>
                <Box className={classes.summaryItem}>
                    <Typography>Transfer amount</Typography>
                    <Typography>1,000.00 EUR</Typography>
                </Box>
                <Box className={classes.summaryItem}>
                    <Typography>Fee</Typography>
                    <Typography>10.00 EUR</Typography>
                </Box>
                <Box className={classes.summaryResult}>
                    <Typography>Recipient will receive</Typography>
                    <Typography fontWeight={'600'}>990.00 EUR</Typography>
                </Box>
            </Box>
            <Typography fontStyle={'italic'} className={classes.noteText} textAlign={'left'} marginTop={'50px'} marginBottom={'30px'}>
                Should the selected day be a holiday, the transfer will be executed the
                coming work day. 
                <Divider sx={{height: '10px'}} />
                Please note, amount can't be greater than account balance. If amount is
                equal to account balance, transfer fee will be deducted from the amount
                transferred to beneficiary.
            </Typography>
            <div className={classes.submitHolder}>
                <button
                className={classes.submitButton}
                >
                Submit
                </button>
            </div>
        </form>
        <Footer/>
    </div>
  )
}
