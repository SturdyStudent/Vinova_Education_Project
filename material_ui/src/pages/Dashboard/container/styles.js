import { makeStyles } from '@mui/styles'

export const useDashboardStyles = makeStyles( ( theme ) => ( {
    container: {
        maxWidth: 'none',
        [ theme.breakpoints.down( 'md' ) ]: {
            padding: '0px 30px',
            maxWidth: 'none',
        },
        [ theme.breakpoints.up( 'md' ) ]: {
            padding: '0px 60px',
            maxWidth: 'none',

        },
        [ theme.breakpoints.up( 'lg' ) ]: {
            padding: '0px 171px',
            maxWidth: 'none',
        },
        [ theme.breakpoints.up( 'xl' ) ]: {
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
        [ theme.breakpoints.down( 'md' ) ]: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '27px'
        },
    },
    functionNav: {
        width: 'max-content !important',
        borderRadius: '30px !important',
        background: 'transparent',
        padding: '14px 28px !important',
        border: `1px solid ${ theme.palette.primary.blue } !important`,
        fontSize: '14px',
        textTransform: 'none !important',
        color: theme.palette.primary.blue,
        [ theme.breakpoints.down( 'md' ) ]: {
            width: '100% !important',
        },
    },
    functionNavHolder: {
        color: theme.palette.primary.blue,
        [ theme.breakpoints.up( 'md' ) ]: {
            padding: '0 !important',
        },
    },
    gridContainer: {
        display: 'flex',
        gap: '12px',
        boxSizing: 'borderBox',
        flexDirection: 'row',
        width: 'auto !important',
        [ theme.breakpoints.down( "md" ) ]: {
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
        [ theme.breakpoints.down( 'md' ) ]: {
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
        [ theme.breakpoints.down( 'md' ) ]: {
            flexDirection: 'column',
        },
    },
    walletDetail: {
        width: '50%',
        textAlign: 'center',
        color: theme.palette.primary.blue,
        padding: '37px 0',
        maxWidth: 'none',
        [ theme.breakpoints.down( 'md' ) ]: {
            width: '100%',
        },
    },
    detailButton: {
        padding: '17px 30px !important',
        margin: '0 auto',
        marginTop: '30px !important',
        borderRadius: '30px !important',
        background: 'transparent',
        width: 'fit-content',
        border: `${ theme.palette.primary.blue } 1px solid !important`,
        textTransform: 'none !important'
    },
    tableHead: {
        borderBottom: '1px solid black',
        color: theme.palette.primary.blue
    },
    loginInfo: {
        textAlign: 'right',
        [ theme.breakpoints.down( 'md' ) ]: {
            textAlign: 'left'
        }
    },
    mobileTableItem: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '17px'
    }
} ) )

