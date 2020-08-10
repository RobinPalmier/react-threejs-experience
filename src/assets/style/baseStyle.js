import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    app:{
        backgroundColor: props => props.isDark ? props.colors.nightColorBckg : 'none',
        width: '100%',
        height: '100%',
    },
});

export default useStyles;