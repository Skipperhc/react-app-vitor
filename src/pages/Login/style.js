import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    container: {
        flex: 1,
        display: 'flex',
        direction: 'column',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        background: 'linear-gradient(rgba(250, 0, 0, 0.5), transparent)',
        backgroundColor: 'aquamarine'
    },
    cardLogin: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justify: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(255, 255, 255)',
        maxWidth: 550,
        maxHeight: 800,
        borderRadius: 10
    },
    form: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justify: 'center',
        alignItems: 'center'
    },
    input: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        width: '80%',
        padding: 20
    },
    boxPassword: {
        display: 'flex',
        flex: 1,
        width: '80%',
        padding: 20,
        flexDirection: 'column',
        justifyItems: 'flex-start'
    },
    boxLogo: {
        paddingTop: 20,
        height: 150
    },
    msgErro: {
        color: 'red',
        margin: 0,
        paddingBottom: 10
    },
    logo: {
        height: '100%',
        width: '100%'
    }
});

export default useStyles;