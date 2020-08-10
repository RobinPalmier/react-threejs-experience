import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    headerContent:{
        width: '100%',
        height: 50,
        backgroundColor: theme => theme.isDark ? theme.colors.black : theme.colors.white, 
        zIndex: 1
    }
});

export default useStyles;