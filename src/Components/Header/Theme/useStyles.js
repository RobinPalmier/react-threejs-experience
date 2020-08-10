import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    iconeThemeChange:{
        width:30,
        cursor: 'pointer',
        animation: `$darkLightMode 500ms ease-in`,
        transition: '0.5s',
        position: 'fixed',
        right: '5%',
        top: 11,
        zIndex: 1,
        '&:active': {
            transform: 'scale(0.5, 0.5)',
            '-webkit-transform': 'scale(0.5, 0.5)',
            '-ms-transform': 'scale(0.5, 0.5)',
            '-moz-transform': 'scale(0.5, 0.5)',
            '-o-transform': 'scale(0.5, 0.5)',
        },
    },
    "@keyframes darkLightMode": {
        "0%": {
          opacity: 0,
          transform: 'scale(0, 0)',
          '-webkit-transform': 'scale(0, 0)',
          '-ms-transform': 'scale(0, 0)',
          '-moz-transform': 'scale(0, 0)',
          '-o-transform': 'scale(0, 0)',
          transition: '0.5s',
        },
        "100%": {
            opacity: 1,
            transform: 'scale(1, 1)',
            '-webkit-transform': 'scale(1, 1)',
            '-ms-transform': 'scale(1, 1)',
            '-moz-transform': 'scale(1, 1)',
            '-o-transform': 'scale(1, 1)',
          },
      },
});

export default useStyles;