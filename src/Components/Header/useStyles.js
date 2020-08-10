import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    headerContent:{
        width: '100%',
        height: 50,
        backgroundColor: theme => theme.isDark ? theme.colors.black : theme.colors.white, 
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0px 20px',
    },
    contentTextHeader:{
        fontFamily: 'monospace',
    },
    h2Title:{
        fontSize: 17,
    },
    h4Title:{
        fontSize: 13,
        fontWeight: 300,
    }
});

export default useStyles;