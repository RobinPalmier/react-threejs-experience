import React from 'react';
import { useSelector } from 'react-redux';
import ThemeChoice from './Theme';
import useStyles from './useStyles';

const Header = () => {
    const theme = useSelector(state => state.theme);
    const classes = useStyles(theme);

    return (
        <div className={classes.headerContent}>
            <div className={classes.contentTextHeader}>
                <h2 className={classes.h2Title}>Experience 1</h2>
                <h4 className={classes.h4Title}>ThreeJS x React x Redux</h4>
            </div>
            <ThemeChoice />
        </div>
    )
}

export default React.memo(Header);