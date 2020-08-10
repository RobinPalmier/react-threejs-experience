import actions from './actionsLabels';

export const defineTheme = (theme) => {
    return {
        type: actions.TOGGLE_DARK_MODE,
        playload: theme
    }
}