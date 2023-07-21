import { makeStyles } from '@mui/styles'
import React from 'react'
import footerLogo from '../../assets/img/footer_logo.png'
import { Box, Select, Typography, MenuItem } from '@mui/material'
import caretDown from '../../assets/img/CaretDownWhite.png'

function Footer() {
    const useStyle = makeStyles((theme) => ({
        footer: {
            backgroundColor: theme.palette.primary.blue,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            color: 'white',
            maxWidth: 'none',
            [theme.breakpoints.down('md')]: {
              padding: '48px 30px',
              flexDirection: 'column',
              alignItems: 'center'
            },
            [theme.breakpoints.up('md')]: {
              padding: '48px 60px'
            },
            [theme.breakpoints.up('lg')]: {
              padding: '48px 171px'
            },
            [theme.breakpoints.up('xl')]: {
              padding: '48px 171px'
            }
        },
        logoHolder: {
            textAlign: 'right',
            [theme.breakpoints.down('md')]: {
                display: 'flex',
                textAlign: 'center',
                flexDirection: 'column',
                gap: '21px'
              },
        },
        languageSelect: {
            backgroundColor: '#57679d',
            width: '168px',
            color: 'white !important',
            paddingRight: '15px',
            paddingLeft: '15px',
            backgroundPosition: `calc(100% - 12px) center !important`,
            [theme.breakpoints.down('md')]: {
                width: '85%',
                marginBottom: '72px',
                marginTop: '15px'
              },
        }
    }))
    const classes = useStyle();
        return (
            <div className={classes.footer}>
                <Select
                  defaultValue={'english'}
                  IconComponent={() => <img src={caretDown} alt='' />}
                  className={classes.languageSelect}
                  sx={{
                    width: 240,
                  }}
                >
                    <MenuItem value={'english'}>English</MenuItem> 
                </Select>
                <Box className={classes.logoHolder}>
                    <div>
                        <img src={footerLogo} alt='' />
                    </div>
                    <Typography>Copyright 2021. Valens Bank Ltd</Typography>
                </Box>
            </div>
  )
}

export default Footer