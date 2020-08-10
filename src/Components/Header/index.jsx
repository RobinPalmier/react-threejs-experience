import React from 'react';
import { useSelector } from 'react-redux';
import ThemeChoice from './Theme';
import useStyles from './useStyles';

const Header = () => {
    const theme = useSelector(state => state.theme);
    const classes = useStyles(theme);

    return (
        <div className={classes.headerContent}>
            <ThemeChoice />
        </div>
    )
}

export default React.memo(Header);